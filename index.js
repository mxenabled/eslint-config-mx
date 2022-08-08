module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react"],
  settings: {
    react: {
      pragma: "React"
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "consistent-return": 2,
    eqeqeq: [2, "smart"],
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-console": [2, { allow: ["warn", "error"] }],
    "no-continue": 2,
    "no-div-regex": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-implied-eval": 2,
    "no-lonely-if": 2,
    "no-nested-ternary": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-throw-literal": 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // ignore variables that begin with _,
    "no-var": 2,
    "no-void": 2,
    "one-var": [2, "never"],
    "prefer-const": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    yoda: 2,
    // consider adding back
    "no-prototype-builtins": "off",
    // React settings
    "react-hooks/exhaustive-deps": "off",
    "react/no-deprecated": "warn",
    "react/no-did-update-set-state": 2,
    "react/no-unescaped-entities": "off",
    "react/no-unused-state": 2,
    "react/no-unused-prop-types": 2,
    "react/prop-types": [2, { ignore: ["style", "children", "params"] }],
    "react/self-closing-comp": 2,
    "react/sort-comp": [
      2,
      {
        order: [
          "lifecycle",
          "everything-else",
          "rendering",
          "responsive",
          "style"
        ],
        groups: {
          rendering: ["/^render.+$/", "render"],
          responsive: ["breakpoints", "offsets", "orders", "spans"],
          style: ["styles", "darkStyles"]
        }
      }
    ],
    "react/sort-prop-types": [2, { ignoreCase: true }],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-sort-props": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-tag-spacing": [2, { beforeSelfClosing: "always" }],
    "react/jsx-pascal-case": 2,
    "react/jsx-wrap-multilines": 2
  },
  "overrides": [
    {
      "files": ["**-test.js"],
      "rules": {
        "no-import-assign": "off" // we have a lot of tests do this for mocking
      }
    }
  ]
};
