module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    /**
     * Validate that your components can safely be updated with fast refresh.
     *
     * 🚫 Not fixable - https://github.com/ArnaudBarre/eslint-plugin-react-refresh#options
     */
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    /**
     * Enforce return statements in callbacks of array methods.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': ['error', { allowImplicit: true }],

    /**
     * Disallow `await` inside of loops.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'error',

    /**
     * Disallow duplicate module imports.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': 'warn',

    /**
     * Disallow returning values from Promise executor functions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'error',

    /**
     * Disallow comparisons where both sides are exactly the same.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * Disallow template literal placeholder syntax in regular strings.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',

    /**
     * Disallow loops with unreachable termination condition.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'error',

    /**
     * Disallow unused variables.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],

    /**
     * Require braces around arrow function bodies.
     *
     * 🔧 Fixable - https://eslint.org/docs/latest/rules/arrow-body-style
     */
    'arrow-body-style': ['warn', 'always'],

    /**
     * Enforce the use of variables within the scope they are defined.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'error',

    /**
     * Enforce camelcase naming convention.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/camelcase
     */
    camelcase: ['error', { ignoreDestructuring: false, properties: 'never' }],

    /**
     * Enforce consistent brace style for all control statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/curly
     */
    curly: 'warn',

    /**
     * Enforce default case in switch statements to be last.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'error',

    /**
     * Enforce default parameters to be last.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': 'error',

    /**
     * Require the use of `===` and `!==`.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: 'error',

    /**
     * Require or disallow named function expressions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/func-names
     */
    'func-names': ['error', 'as-needed'],

    /**
     * Enforce the consistent use of either function declarations or expressions assigned to variables.
     *
     * 🚫 Not fixable - https://eslint.org/docs/latest/rules/func-style
     */
    'func-style': ['error', 'declaration'],

    /**
     * Disallow the use of `alert`, `confirm`, and `prompt`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /**
     * Disallow array constructors.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',

    /**
     * Disallow bitwise operators.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'error',

    /**
     * Disallow the use of `console`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-console
     */
    'no-console': 'error',

    /**
     * Disallow `else` blocks after `return` statements in `if` statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'warn',

    /**
     * Disallow empty functions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'warn',

    /**
     * Disallow shorthand type conversions.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'error',

    /**
     * Disallow inline comments after code.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': 'warn',

    /**
     * Disallow unnecessary nested blocks.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',

    /**
     * Disallow `if` statements as the only statement in `else` blocks.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'warn',

    /**
     * Disallow nested ternary expressions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',

    /**
     * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * Disallow reassigning `function` parameters.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'error',

    /**
     * Disallow assignment in `return` statement.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'error',

    /**
     * Disallow `javascript:` urls.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',

    /**
     * Disallow comma operators.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * Disallow initializing variables to `undefined`.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': 'warn',

    /**
     * Disallow ternary operators when simpler alternatives exist.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',

    /**
     * Disallow unused expressions.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'error',

    /**
     * Disallow unnecessary computed property keys in objects.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'warn',

    /**
     * Disallow unnecessary concatenation of literals or template literals.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': 'warn',

    /**
     * Disallow redundant return statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'warn',

    /**
     * Require `let` or `const` instead of `var`.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-var
     */
    'no-var': 'error',

    /**
     * Require or disallow method and property shorthand syntax for object literals.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': 'warn',

    /**
     * Require `const` declarations for variables that are never reassigned after declared.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'warn',

    /**
     * Require using named capture groups in regular expressions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'error',

    /**
     * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 'error',

    /**
     * Require using `Error` objects as Promise rejection reasons.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    /**
     * Disallow the use of the `RegExp` constructor in favor of regular expression literals.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'error',

    /**
     * Require rest parameters instead of `arguments`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',

    /**
     * Require template literals instead of string concatenation.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'warn',

    /**
     * Disallow async functions which have no `await` expression.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/require-await
     */
    'require-await': 'warn',

    /**
     * Require or disallow "Yoda" conditions.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/yoda
     */
    yoda: 'warn',

    /**
     * Require consistent usage of type exports.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
     */
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],

    /**
     * Require consistent usage of type imports.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],

    /**
     * Require explicit return types on functions and class methods.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/explicit-function-return-type/
     */
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],

    /**
     * Require using function property types in method signatures.
     *
     * These have enhanced typechecking, whereas method signatures do not.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/method-signature-style/
     */
    '@typescript-eslint/method-signature-style': 'warn',

    /**
     * Require consistent naming conventions.
     *
     * Improves IntelliSense suggestions and avoids name collisions.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
     */
    '@typescript-eslint/naming-convention': [
      'error',
      // Anything type-like should be written in PascalCase.
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember'],
      },
      // Interfaces should be prefixed with `I`
      {
        custom: {
          match: true,
          regex: '^I[A-Z]',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],

    /**
     * Disallow members of unions and intersections that do nothing or override type information.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-redundant-type-constituents/
     */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    /**
     * Disallow unnecessary namespace qualifiers.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',

    /**
     * Require using `RegExp.exec()` over `String.match()` for consistency.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-regexp-exec/
     */
    '@typescript-eslint/prefer-regexp-exec': 'warn',

    /**
     * Require Array#sort calls to provide a compare function.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/require-array-sort-compare/
     */
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],

    /**
     * Require exhaustive checks when using union types in switch statements.
     *
     * This ensures cases are considered when items are later added to a union.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    /**
     * Require default parameters to be last.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/default-param-last/
     */
    '@typescript-eslint/default-param-last': 'error',

    /**
     * Disallow creation of functions within loops.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-loop-func/
     */
    '@typescript-eslint/no-loop-func': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the
     * outer scope.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-shadow/
     */
    '@typescript-eslint/no-shadow': 'error',

    /**
     * Disallow unused variables.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-unused-vars/
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],

    /**
     * Disallow the use of extraneous dependencies.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],

    /**
     * Disallow mutable exports.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error',

    /**
     * Disallow the use of absolute paths in imports.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',

    /**
     * Disallow a module from importing itself.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'error',

    /**
     * Disallow importing packages through relative paths.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     */
    'import/no-relative-packages': 'warn',

    /**
     * Disallow a module from importing itself.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'error',

    /**
     * Disallow unnecessary path segments in import and require statements.
     *
     * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     */
    'import/no-useless-path-segments': ['error'],

    /**
     * Ensure all imports appear before other statements.
     *
     * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',

    /**
     * Enforce a newline after import statements.
     *
     * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'warn',

    /**
     * Disallow default exports.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'error',

    /**
     * These are enabled by `import/recommended`, but are better handled by
     * TypeScript and @typescript-eslint.
     */

    /**
     * Disallow the use of default imports from a module that does not have a default export.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
     */
    'import/default': 'off',

    /**
     * Ensure that all named exports exist in the referenced module.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
     */
    'import/export': 'off',

    /**
     * Report invalid exports, i.e., those that do not exist in the referenced module.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import/namespace': 'off',

    /**
     * Ensure imports point to a file/module that can be resolved.
     *
     * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',

    /**
     * Enforce sorted imports.
     *
     * 🔧 Fixable - https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports
     */
    'perfectionist/sort-imports': [
      'warn',
      {
        type: 'line-length',
        order: 'asc',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
      },
    ],

    /**
     * Enforce sorted named imports.
     *
     * 🔧 Fixable - https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports
     */
    'perfectionist/sort-named-imports': [
      'warn',
      {
        type: 'line-length',
        order: 'asc',
      },
    ],

    /**
     * Enforce the type attribute is specified on button elements.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    'react/button-has-type': 'warn',

    /**
     * Enforce a specific function type for function components.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': 'warn',

    /**
     * Ensure state hook names are correct.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
     */
    'react/hook-use-state': 'warn',

    /**
     * Enforce boolean attributes notation in JSX.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': ['warn', 'never'],

    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': 'warn',

    /**
     * Enforce shorthand or standard form for React fragments.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': 'warn',

    /**
     * Disallow context provider value prop to be a non-primitive literal.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
     */
    'react/jsx-no-constructed-context-values': 'warn',

    /**
     * Disallow problematic leaked renders.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
     */
    'react/jsx-no-leaked-render': 'warn',

    /**
     * Disallow usage of unsafe target='_blank'.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
      },
    ],

    /**
     * Disallow unnecessary fragments.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],

    /**
     * Enforce PascalCase for user-defined JSX components.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': 'warn',

    /**
     * Prevent usage of array index in keys.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'warn',

    /**
     * Prevent creating unstable components inside components.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
     */
    'react/no-unstable-nested-components': 'error',

    /**
     * Disable prop-types as we use TypeScript for type checking.
     */
    'react/prop-types': 'off',

    /**
     * Enforce self-closing for components without children.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': 'warn',

    /**
     * Enforce a specific case style for filenames.
     *
     * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     */
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],

    /**
     * Prevent the use of abbreviations in variable names.
     *
     * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
     */
    'unicorn/prevent-abbreviations': 'off',
  },
};
