# Create-React-App Project (Redux)

- State Manager : Mobx
- Plugins : eslint, prettier

## Install

```
npm install eslint --save-dev
```

```
npm install eslint-config-airbnb --save-dev
```

```
npm install eslint-plugin-react --save-dev
```

```
npx eslint --init
```

```
npm install prettier --save-dev
```

```
npm install eslint-config-prettier --save-dev
```

```
npm install --save-dev babel-preset-stage-0 babel-plugin-transform-decorators-legacy babel-eslint
```

### Add File

#### [ .eslintrc.json ]

```
{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
```

#### [ .babelrc ]

```
{
  "presets": [["es2015", { "modules": false }], "stage-0", "react"],
  "plugins": ["transform-class-properties", "transform-decorators-legacy"]
}
```

 #### [ .prettierrc ]

```
필요에 따라 작성
```