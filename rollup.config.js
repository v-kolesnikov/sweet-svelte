import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve'

export default {
  input: 'src/main.js',
  output: {
    name: 'app',
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    svelte({}),

    resolve({ browser: true }),

    serve(),
    livereload()
  ]
}
