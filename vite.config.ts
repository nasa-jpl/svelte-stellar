import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    sveltekit(),
    svg({
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: { overrides: { removeViewBox: false } },
          },
          {
            name: 'addClassesToSVGElement',
            params: {
              classNames: ['st-icon'],
            },
          },
        ],
      },
    }),
  ],
  test: { include: ['src/**/*.{test,spec}.{js,ts}'] },
});
