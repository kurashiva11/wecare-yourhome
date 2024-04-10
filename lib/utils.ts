import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function normalizedPath(assetPath: string) {
  const config = require("../next.config.js");
  const path = require("path");
  return config.basePath?.length > 0 ? path.join(config.basePath, assetPath) : assetPath;
}