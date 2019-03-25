module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    extends: ['eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
    plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {{
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    parser: 'babel-eslint', // class properties
    "rules": {

    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true, 
        trailingComma: 'all',
        bracketSpacing: true
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules

    }

};