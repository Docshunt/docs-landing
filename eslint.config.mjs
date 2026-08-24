import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/data/blog-content/*.ts"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["src/components/landing/pages/**/*.tsx", "src/components/landing/templates/**/*.tsx", "src/components/site/pages/**/*.tsx"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/design-system/atoms"],
              message: "Page and template layers must compose molecules or organisms, not landing primitives directly.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/components/site/pages/**/*.tsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name=/^[a-z]/]",
          message: "Page components must compose templates instead of rendering HTML primitives directly.",
        },
        {
          selector: "JSXFragment",
          message: "Page components must compose PageDocument or templates instead of direct fragments.",
        },
      ],
    },
  },
  {
    files: ["src/app/**/page.tsx", "src/app/**/not-found.tsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name=/^[a-z]/]",
          message: "App route pages must compose page components instead of rendering HTML primitives directly.",
        },
        {
          selector: "JSXFragment",
          message: "App route pages must use PageDocument or a page component instead of direct fragments.",
        },
      ],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    ".omx/**",
    "docs/**",
    "scripts/**",
    "public/images/**",
    "public/seo/**",
    "public/videos/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
