import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Prefer arrow functions over function declarations
  // Prefer functional iteration over imperative loops
  {
    rules: {
      "prefer-arrow-callback": "warn",
      "no-restricted-syntax": [
        "warn",
        { selector: "ForStatement", message: "Use .map()/.forEach()/.reduce() instead of for loops." },
        { selector: "ForInStatement", message: "Use Object.keys/values/entries() instead of for...in." },
        { selector: "ForOfStatement", message: "Use .map()/.forEach() or Promise.all + .map() instead of for...of." },
      ],
    },
  },
]);

export default eslintConfig;
