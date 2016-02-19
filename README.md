# eslint-config-mx

[![npm version](https://badge.fury.io/js/eslint-config-mx.svg)](http://badge.fury.io/js/eslint-config-mx)

## How to use
Utilize the `extends` feature of `.eslintrc` like so:
```javascript
{
  "extends": "mx"
}
```
If you need to apply any custom rules, simply add them to your `.eslintrc` file below the `extends` property:
```javascript
{
  "extends": "mx",
  "rules": {
    "space-infix-ops": 0
  }
}
```

## peerDependencies
In an attempt to centralize our build tool versions, this includes `peerDependencies` for related build tools. All projects using these eslint configs/rules should meet these peerDependencies.
