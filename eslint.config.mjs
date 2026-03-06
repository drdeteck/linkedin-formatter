import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // `no-page-custom-font` is a Pages Router rule; in App Router the root
      // layout <link> loads fonts for the entire app.
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
