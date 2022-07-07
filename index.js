module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
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
    "accessor-pairs": 0,
    "array-bracket-spacing": [2, "never"],
    "arrow-spacing": [2, { before: true, after: true }],
    "block-scoped-var": 0,
    "brace-style": 2,
    camelcase: 0,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "consistent-return": 2,
    "consistent-this": 0,
    "constructor-super": 2,
    curly: 0,
    "default-case": 0,
    "dot-location": [2, "property"],
    "dot-notation": 0,
    "eol-last": 0,
    eqeqeq: [2, "smart"],
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [2, { before: false, after: true }],
    "guard-for-in": 2,
    "handle-callback-err": 0,
    indent: [2, 2, { SwitchCase: 1 }],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "keyword-spacing": 2,
    "linebreak-style": 2,
    "lines-around-comment": 0,
    "max-len": [2, { code: 100 }],
    "new-cap": 0,
    "new-parens": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-confusing-arrow": [2, { allowParens: true }],
    "no-console": [2, { allow: ["warn", "error"] }],
    "no-constant-condition": 2,
    "no-continue": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 0,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 0,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": 0,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-requires": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": 2,
    "no-native-reassign": 2,
    "no-negated-in-lhs": 0,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 0,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-path-concat": 0,
    "no-process-env": 2,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // ignore variables that begin with _,
    "no-use-before-define": 0,
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-spacing": [2, "always"],
    "object-shorthand": [2, "always"],
    "one-var": [2, "never"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "before"],
    "padded-blocks": [2, "never"],
    "prefer-const": 2,
    "quote-props": 0,
    quotes: [2, "single", "avoid-escape"],
    "react/display-name": [2, { ignoreTranspilerName: false }],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": [2, { maximum: 3 }],
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-tag-spacing": [2, { beforeSelfClosing: "always" }],
    "react/jsx-pascal-case": 2,
    "react/jsx-wrap-multilines": 2,
    "react/no-direct-mutation-state": 1,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/no-unused-state": 2,
    "react/no-unused-prop-types": 2,
    "react/prop-types": [2, { ignore: ["style", "children", "params"] }],
    "react/react-in-jsx-scope": 2,
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
          style: ["styles"]
        }
      }
    ],
    "react/sort-prop-types": [2, { ignoreCase: true }],
    semi: [2, "always"],
    "semi-spacing": [2, { before: false, after: true }],
    "sort-vars": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": 2,
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 0,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "wrap-regex": 2,
    yoda: 2
  }
};
