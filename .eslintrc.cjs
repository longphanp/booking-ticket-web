module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["airbnb-typescript/base", "plugin:prettier/recommended"],
  ignorePatterns: ["src/configs/*"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {
    "import/extensions": ["off", "never"],
    "import/no-extraneous-dependencies": ["off", "never"],
    "import/no-unresolved": 0,
    "import/prefer-default-export": "off",
    "comma-dangle": 0,
    "no-unused-vars": "error",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
      },
    ],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
      },
    ],
    "operator-linebreak": "off",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
  },
};
