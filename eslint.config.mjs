import coreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

/**
 * Flat config. `eslint-config-next` v16 exports flat config arrays directly, so
 * no `FlatCompat` shim is needed.
 *
 * `next lint` was removed in Next.js 16 — the `lint` script calls ESLint itself.
 */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // An unused binding prefixed with `_` is an intentional placeholder.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    // The QA harness asserts with `condition ? pass(…) : fail(…)`, where the
    // expression *is* the side effect. The rule exists to catch expressions that
    // do nothing, which is the opposite of what these are, and rewriting ~26
    // assertions into if/else would cost readability in a file whose whole job
    // is to be scannable. Application code keeps the rule.
    files: ['scripts/qa/**/*.mjs'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
]

export default config
