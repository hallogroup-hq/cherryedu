export function learnerTitle(title:string):string {
 return title.replace(/\s+[—–]\s+/g,': ').replace(/tanpa (harus |terdengar )?sok ahli/gi,'dengan bahasa yang jelas').replace(/\s*\(V2(?: review)?\)/gi,'').trim();
}
