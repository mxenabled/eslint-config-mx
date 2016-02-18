# eslint-config-mx

[![npm version](https://badge.fury.io/js/eslint-config-mx.svg)](http://badge.fury.io/js/eslint-config-mx)

## How to use
Utilize the `extends` feature of `.eslintrc` like so:
```javascript
module.exports = {
  "extends": "mx"
};
```
If you need to apply any custom rules, simply add them to your `.eslintrc` file below the `extends` property:
```javascript
module.exports = {
  "extends": "mx",
  "rules": {
    "space-infix-ops": 0
  }
};
```
