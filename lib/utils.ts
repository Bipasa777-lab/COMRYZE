import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...i: ClassValue[]) => twMerge(clsx(i));
export const BRAND = "Orbyt"; // placeholder brand name — replace
export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
