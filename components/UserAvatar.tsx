'use client';

import React, { useState, useEffect } from 'react';

interface UserAvatarProps {
  src?: string | null;
  name?: string | null;
  email?: string | null;
  size?: string; // e.g. "w-8 h-8", "w-10 h-10", "w-12 h-12", "w-16 h-16"
  className?: string;
  rounded?: string; // default "rounded-full"
}

// Deterministic pleasing color palette for initials
const BG_COLORS = [
  'bg-amber-700 text-amber-50',
  'bg-cherry-700 text-cherry-50',
  'bg-emerald-700 text-emerald-50',
  'bg-blue-700 text-blue-50',
  'bg-indigo-700 text-indigo-50',
  'bg-purple-700 text-purple-50',
  'bg-rose-700 text-rose-50',
  'bg-roast-800 text-paper-50',
];

function getInitials(name?: string | null, email?: string | null): string {
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  }
  if (email && email.trim()) {
    return email.trim().slice(0, 2).toUpperCase();
  }
  return 'U';
}

function getColorIndex(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % BG_COLORS.length;
}

export function UserAvatar({
  src,
  name,
  email,
  size = 'w-8 h-8',
  className = '',
  rounded = 'rounded-full',
}: UserAvatarProps) {
  const [hasError, setHasError] = useState(false);

  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  const identifier = name || email || 'User';
  const initials = getInitials(name, email);
  const colorClass = BG_COLORS[getColorIndex(identifier)];

  if (!src || hasError) {
    return (
      <div
        className={`${size} ${rounded} ${colorClass} flex items-center justify-center font-bold font-mono tracking-tight shrink-0 select-none border border-black/10 shadow-xs ${className}`}
        style={{ fontSize: 'calc(var(--avatar-size, 32px) * 0.38)' }}
        title={identifier}
      >
        <span>{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="" // Left intentionally empty so browser doesn't render overflowing broken alt text
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${size} ${rounded} object-cover shrink-0 border border-paper-300 shadow-xs ${className}`}
      title={identifier}
    />
  );
}
