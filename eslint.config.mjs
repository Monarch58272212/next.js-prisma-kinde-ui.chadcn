// .eslintrc.js

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Pagkuha ng __filename at __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paggamit ng __dirname sa FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Pag-extend ng ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// Pag-export ng config para magamit sa ESLint
module.exports = eslintConfig;
