import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.ts',
    format: 'esm',
    exports: 'named',
  },
  external: ['vue'],
  plugins: [
    vue(),
    typescript({
      verbosity: 3,
      clean: true,
    }),
  ],
};
