import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alnajjarfirmlb.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
