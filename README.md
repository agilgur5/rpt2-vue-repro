# rpt2-vue-repro

A minimal reproduction environment for integration issues with [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2) and [rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue).

Please do your best to create a [minimal example](https://stackoverflow.com/help/minimal-reproducible-example) that reproduces this behavior.<br />
Minimal reproductions help us find the root cause of an issue much more expediently than trying to interpret and disentangle a complicated repo. The process of creating a minimal reproduction also often helps users find a misconfiguration in their code. It could also help you identify the root cause yourself and potentially create a Pull Request to fix it!

## Usage

1. Find this environment on [StackBlitz](https://stackblitz.com/edit/rpt2-vue-repro)
1. Click "Fork"
1. Add your deps in `package.json` and run `npm install` in the terminal
1. Add your configuration in `tsconfig.json` and `rollup.config.js`
1. Modify `src/index.ts` to provide a minimal example of the problem you have run into
1. Run `npm run build` and make sure you can reproduce the problem
   - If you cannot reproduce this problem minimally, the issue may be due to misconfiguration (and would therefore not be a bug in rpt2)
1. Can run `npm run vue-tsc` to double-check that `vue-tsc` does not have the same problem
   - If `vue-tsc` has the same problem, then it is very possible the issue is in TypeScript or Vue itself
1. Click "Share" and copy the link into the issue that you are filing
1. Make sure to **follow the steps** in the issue template
