// Filename: vite.config.js
import { defineConfig ,transformWithEsbuild} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, 
    port: 8000 
  },
});

// export default defineConfig({
//   plugins: [
//     {
//       name: 'treat-js-files-as-jsx',
//       async transform(code, id) {
//         if (!id.match(/src\/.*\.js$/))  return null

//         // Use the exposed transform from vite, instead of directly
//         // transforming with esbuild
//         return transformWithEsbuild(code, id, {
//           loader: 'jsx',
//           jsx: 'automatic',
//         })
//       },
//     },
//     react(),
//   ],

//   optimizeDeps: {
//     force: true,
//     esbuildOptions: {
//       loader: {
//         '.js': 'jsx',
//       },
//     },
//   },
//   server: {
//     open: true, 
//     port: 8000 
//   },
// })