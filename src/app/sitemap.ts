import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://outpace.nl", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://outpace.nl/diensten", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://outpace.nl/over", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://outpace.nl/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
