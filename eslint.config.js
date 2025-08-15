import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply this configuration to TypeScript files
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest", // Or a specific ECMAScript version (e.g., 2022)
        sourceType: "module", // Or 'script' depending on your project
        //project: './tsconfig.json', // Path to your tsconfig.json for type-aware linting
        // You can also specify an array of tsconfig paths or globs:
        // project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      // Add your TypeScript-specific ESLint rules here
      // For example:
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
    },
  },
  // You can add other configurations for JavaScript files or other purposes
];
