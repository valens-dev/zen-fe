import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
/**
 * https://vitejs.dev/config/
 */
/* eslint-disable-next-line import/no-default-export */
export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgr()],
    server: {
        proxy: {
            '/api': {
                target: 'https://zen-admin.valens.dev',
                changeOrigin: true,
                rewrite: (path) => {
                    return path.replace(/^\/api/, '');
                },
            },
        },
    },
});
