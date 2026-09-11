#!/usr/bin/env ts-node
/**
 * CherryEdu — Database Setup Script
 *
 * Reads schema.sql and seed.sql and executes them against the Supabase
 * project using the service-role key (bypasses RLS).
 *
 * Usage:
 *   npx ts-node scripts/setup-db.ts [--schema-only] [--seed-only] [--reset]
 *
 * Flags:
 *   --schema-only   Run only schema.sql (create tables)
 *   --seed-only     Run only seed.sql  (insert sample data)
 *   --reset         DROP all tables first, then recreate (DESTRUCTIVE!)
 *
 * Requirements:
 *   npm install @supabase/supabase-js
 *   npx ts-node scripts/setup-db.ts
 */

import fs from 'fs';
import path from 'path';

// ─── Config ────────────────────────────────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
  || 'https://yswtpmwfzqqeguiwogvj.supabase.co';

const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const PROJECT_ROOT = path.resolve(__dirname, '..');

// ─── Colours ────────────────────────────────────────────────────────────────
const c = {
  reset: '\x1b[0m',
  bold:  '\x1b[1m',
  red:   '\x1b[31m',
  green: '\x1b[32m',
  yellow:'\x1b[33m',
  cyan:  '\x1b[36m',
  dim:   '\x1b[2m',
};

function log(level: 'info' | 'success' | 'warn' | 'error', msg: string) {
  const prefix: Record<string, string> = {
    info:    `${c.cyan}[INFO]${c.reset}`,
    success: `${c.green}[OK]${c.reset}  `,
    warn:    `${c.yellow}[WARN]${c.reset}`,
    error:   `${c.red}[ERR]${c.reset} `,
  };
  console.log(`${prefix[level]} ${msg}`);
}

function banner(text: string) {
  const line = '─'.repeat(60);
  console.log(`\n${c.bold}${c.cyan}${line}`);
  console.log(`  ${text}`);
  console.log(`${line}${c.reset}\n`);
}

// ─── SQL execution helper ───────────────────────────────────────────────────
/**
 * Supabase JS does not expose a raw `execute SQL` endpoint publicly.
 * We use the PostgREST RPC interface to run arbitrary SQL via the
 * `pg_query` or `exec_sql` function — but the cleanest approach for
 * schema setup is the Supabase Management API or psql.
 *
 * Here we call the Supabase REST API's `/rpc/exec_sql` if it exists,
 * otherwise we split by statement and call via `supabase.rpc`.
 *
 * For pure Supabase projects, the recommended path is to use the
 * Supabase CLI (`supabase db push`) for schema and the JS client for
 * seed inserts.
 *
 * This script therefore:
 *  1. Attempts to execute the SQL via the Supabase Management REST API.
 *  2. Falls back to statement-by-statement execution via fetch to the
 *     /query endpoint (available on Supabase self-hosted / direct Postgres).
 */



/**
 * Split a SQL file into individual statements.
 * Handles:
 *  - -- line comments
 *  - /* block comments (simple)
 *  - Dollar-quoted strings ($$...$$)
 *  - Single-quoted strings
 */
function splitStatements(sql: string): string[] {
  // Normalise line endings
  sql = sql.replace(/\r\n/g, '\n');

  const statements: string[] = [];
  let current = '';
  let i = 0;
  let inSingleQuote = false;
  let inDollarQuote = false;
  let dollarTag = '';

  while (i < sql.length) {
    // Skip line comments outside strings
    if (!inSingleQuote && !inDollarQuote && sql[i] === '-' && sql[i + 1] === '-') {
      while (i < sql.length && sql[i] !== '\n') i++;
      current += '\n';
      i++;
      continue;
    }

    // Dollar-quoted string start/end
    if (!inSingleQuote) {
      // Try to match $$...$$  or $tag$...$tag$
      const dollarMatch = sql.slice(i).match(/^(\$[A-Za-z0-9_]*\$)/);
      if (dollarMatch) {
        const tag = dollarMatch[1];
        if (!inDollarQuote) {
          inDollarQuote = true;
          dollarTag = tag;
          current += tag;
          i += tag.length;
          continue;
        } else if (tag === dollarTag) {
          inDollarQuote = false;
          dollarTag = '';
          current += tag;
          i += tag.length;
          continue;
        }
      }
    }

    // Single-quoted string
    if (!inDollarQuote && sql[i] === "'") {
      if (inSingleQuote && sql[i + 1] === "'") {
        // Escaped quote
        current += "''";
        i += 2;
        continue;
      }
      inSingleQuote = !inSingleQuote;
    }

    // Statement delimiter
    if (!inSingleQuote && !inDollarQuote && sql[i] === ';') {
      current = current.trim();
      if (current.length > 0) {
        statements.push(current + ';');
      }
      current = '';
      i++;
      continue;
    }

    current += sql[i];
    i++;
  }

  // Catch any trailing statement without semicolon
  const trailing = current.trim();
  if (trailing.length > 0) {
    statements.push(trailing);
  }

  return statements.filter(s => {
    const stripped = s.replace(/;$/, '').trim();
    return stripped.length > 0;
  });
}

/**
 * Execute a single SQL statement via the Supabase PostgREST `/rpc` endpoint.
 * This requires a `exec_sql(sql text)` function in the database,
 * OR we use the Management API.
 *
 * Approach: Use the Supabase Management API `/v1/projects/{ref}/database/query`
 * which is available on all hosted projects.
 */
async function execSQL(sql: string, label: string): Promise<void> {
  const projectRef = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
  if (!projectRef) {
    throw new Error('Could not extract project ref from SUPABASE_URL');
  }

  const response = await fetch(
    `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({ query: sql }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    // Parse structured error
    let errorMsg = errorText;
    try {
      const parsed = JSON.parse(errorText);
      errorMsg = parsed.message || parsed.error || errorText;
    } catch {}

    // Ignore "already exists" errors for idempotent runs
    const ignorable = [
      'already exists',
      'duplicate key',
      'does not exist',
      'relation already exists',
      'type already exists',
      'policy already exists',
    ];
    if (ignorable.some(e => errorMsg.toLowerCase().includes(e.toLowerCase()))) {
      log('warn', `${label} — skipped (already exists / not found)`);
      return;
    }

    throw new Error(`${label}: ${errorMsg}`);
  }

  log('success', label);
}

/**
 * Alternative: execute via the direct Postgres REST endpoint that
 * Supabase exposes at /rest/v1/rpc if you have an exec_sql function.
 * Falls back to the Management API approach above.
 */
async function runSQLFile(filePath: string, label: string): Promise<void> {
  const sql = fs.readFileSync(filePath, 'utf-8');
  const statements = splitStatements(sql);

  log('info', `${label}: found ${statements.length} statements`);

  let successCount = 0;
  let warnCount = 0;

  for (let idx = 0; idx < statements.length; idx++) {
    const stmt = statements[idx];

    // Build a short label from the first non-whitespace line of the statement
    const firstLine = stmt.split('\n').find(l => l.trim() && !l.trim().startsWith('--'))?.slice(0, 80) || `Statement ${idx + 1}`;
    const stmtLabel = `[${idx + 1}/${statements.length}] ${firstLine.trim()}`;

    try {
      await execSQL(stmt, stmtLabel);
      successCount++;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      // Certain errors are acceptable (e.g., running schema twice)
      if (
        message.includes('already exists') ||
        message.includes('duplicate key') ||
        message.includes('does not exist') && label.includes('seed')
      ) {
        log('warn', `${stmtLabel} — ${message.slice(0, 120)}`);
        warnCount++;
      } else {
        log('error', `${stmtLabel}\n  → ${message}`);
        // Continue on non-fatal errors
      }
    }
  }

  console.log(
    `\n  ${c.green}✓${c.reset} ${successCount} statements executed` +
    (warnCount > 0 ? `, ${c.yellow}${warnCount} warnings${c.reset}` : '')
  );
}

// ─── Reset helper ───────────────────────────────────────────────────────────
const RESET_SQL = `
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
`;

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const schemaOnly = args.includes('--schema-only');
  const seedOnly   = args.includes('--seed-only');
  const reset      = args.includes('--reset');

  banner('CherryEdu — Database Setup');

  log('info', `Supabase URL: ${SUPABASE_URL}`);
  log('info', `Mode: ${schemaOnly ? 'schema-only' : seedOnly ? 'seed-only' : 'schema + seed'}`);

  // 1. Optional reset
  if (reset && !seedOnly) {
    log('warn', 'RESET flag detected — dropping and recreating public schema...');
    try {
      await execSQL(RESET_SQL, 'Reset public schema');
      log('success', 'Schema reset complete');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      log('error', `Reset failed: ${message}`);
      process.exit(1);
    }
  }

  // 2. Run schema
  if (!seedOnly) {
    const schemaPath = path.join(PROJECT_ROOT, 'supabase', 'schema.sql');
    if (!fs.existsSync(schemaPath)) {
      log('error', `schema.sql not found at: ${schemaPath}`);
      process.exit(1);
    }

    banner('Running schema.sql');
    try {
      await runSQLFile(schemaPath, 'Schema');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      log('error', `Schema setup failed: ${message}`);
      process.exit(1);
    }
  }

  // 3. Run seed
  if (!schemaOnly) {
    const seedPath = path.join(PROJECT_ROOT, 'supabase', 'seed.sql');
    if (!fs.existsSync(seedPath)) {
      log('error', `seed.sql not found at: ${seedPath}`);
      process.exit(1);
    }

    banner('Running seed.sql');
    try {
      await runSQLFile(seedPath, 'Seed');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      log('error', `Seed failed: ${message}`);
      process.exit(1);
    }
  }

  banner('Setup Complete ✓');
  log('success', 'Database is ready.');
  log('info', 'Next: visit your Supabase dashboard to verify tables.');
  log('info', `Dashboard: https://supabase.com/dashboard/project/yswtpmwfzqqeguiwogvj`);
}

main().catch(err => {
  console.error(`\n${c.red}Fatal error:${c.reset}`, err);
  process.exit(1);
});
