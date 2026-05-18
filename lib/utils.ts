export function resolveImagePath(raw: string): string {
  if (!raw) return "";
  const t = raw.trim();
  if (/^https?:\/\//i.test(t)) return t;
  if (t.startsWith("./")) return t.slice(1);
  if (t.startsWith("/")) return t;
  return `/${t}`;
}

export function accentLastWordParts(text: string): { rest: string; last: string } {
  const parts = text.trim().split(/\s+/);
  if (parts.length <= 1) return { rest: "", last: text };
  const last = parts[parts.length - 1];
  const rest = parts.slice(0, -1).join(" ");
  return { rest, last };
}

export function parseGrowthText(text: string): Array<{ type: "text" | "number"; value: string }> {
  const parts = text.split(/(\d+(?:\.\d+)?[KMB]?)/gi);
  return parts.map((part) => ({
    type: /^\d+(?:\.\d+)?[KMB]?$/i.test(part) ? "number" : "text",
    value: part,
  }));
}

export const SERVICE_ICONS: Record<string, string> = {
  "Marketing strategy": "/site-icons/9.webp",
  "Content creation": "/site-icons/3-2-min.webp",
  "Content writing": "/site-icons/3-2-min.webp",
  "Script writing": "/site-icons/3-2-min.webp",
  "Content writing / Script writing": "/site-icons/3-2-min.webp",
  "Reels production": "/site-icons/1-2-min.webp",
  "Videography / Photography": "/site-icons/2-7-min.webp",
  "Video Editing": "/site-icons/1-2-min.webp",
  "Social media management": "/site-icons/6-min.webp",
  "Graphic Design": "/site-icons/5-min.webp",
  "Branding & Identity": "/site-icons/5-min.webp",
  "Motion Graphics": "/site-icons/1-2-min.webp",
  "Web / App development": "/site-icons/4-4-min.webp",
};
