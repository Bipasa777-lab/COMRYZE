import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: SITE, lastModified: new Date() }]; }
