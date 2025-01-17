module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    // "prettier/prettier": "error",

    "max-statements-per-line": ["warn", { max: 1 }],
    "no-nested-ternary": "warn",
    "no-unneeded-ternary": "warn",
    "one-var-declaration-per-line": ["warn", "always"],
    "operator-assignment": ["warn", "always"],
    // "operator-linebreak": ["warn", "none"],

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off", // allow any in typescript
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../"],
            message: "Relative imports are not allowed.",
          },
        ],
      },
    ], // only allow absolute import
    "react/react-in-jsx-scope": "off", // disabled should import "REACT" in react component file
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }], // only allow .tsx file extension for write react component
    "react/prefer-stateless-function": "error", // forbidden using class component
    "react/no-unused-prop-types": "error", // forbidden to defint props that unused
    "react/jsx-no-useless-fragment": "error", // forbidden using unnecessary fragment
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ], // forcing using arrow function while create component
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["function"],
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
    ], // force naming convention
    "no-restricted-syntax": [
      "error",
      // {
      //   selector: "CallExpression[callee.object.name='localStorage']",
      //   message: 'Do not use `localStorage` directly, use secure local storage',
      // },
      // {
      //   selector: "CallExpression[callee.object.name='sessionStorage']",
      //   message: 'Do not use `sessionStorage` directly, use secure session storage',
      // },
    ], // forbid using session and local storage
  },
};
