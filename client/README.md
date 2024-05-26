# Aqua Academy Client

## Test starting a quiz
Go to `/quiz/login/sdg-14-quiz` in order to test login page. For now, we're using mock data to simulate starting a quiz.

### Password for this quiz.
```
sdg14
```



## Installation

1. Clone this project to your local machine.
2. Install the required packages with `npm install`.


## Scripts

- `npm run dev`: Starts the server in development mode with hot-reloading.
- `npm start`: Starts the server in production mode.



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
