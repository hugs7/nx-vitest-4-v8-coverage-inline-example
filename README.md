# NX Vitest V8 Coverage Inline Example

This repository demonstrates the issue defined in [NX Issue 9293](https://github.com/vitest-dev/vitest/issues/9293).

The issue is that when a React component is defined inline (e.g. [SomeInlineComponent](./ui/src/features/SomeInlineComponent/)), the coverage report from v8 doesn't detect when using Vitest 4.

In Vitest 3 this is not an issue, and if you define a component using `return` the issue goes away.

## Reproducing the bug

```bash
npm install
npm test

# Open the test
open coverage/ui/lcov-report/index.html
```

Observe how `SomeComponent` has full coverage while `SomeInlineComponent` has 0%, despite both of them having a test.

If you switch to git branch `feature/istanbul-coverage`, and rerun tests, the problem goes away.
