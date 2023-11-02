module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "unused-imports"
    ],
    "rules": {
        "unused-imports/no-unused-imports": ["error"],
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        'react-hooks/exhaustive-deps': 'off'
    },
}
