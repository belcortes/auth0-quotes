module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "extends": ["airbnb"],
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "arrow-parens": ["error", "as-needed"],
      "comma-dangle": ["error", "never"],
      "jsx-a11y/label-has-for": [ 2, {
        "required": {
            "some": [ "nesting", "id" ]
        }
      }],
      "react/jsx-wrap-multilines": ["error", {"condition": "ignore"}],
      "react/jsx-one-expression-per-line": "off",
      "react/destructuring-assignment": "off",
      "object-curly-newline": "off",
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "react/jsx-indent": "off"
      // "object-curly-newline": ["error", {
      //   "ObjectExpression": "never"
      // }]
    }
};
