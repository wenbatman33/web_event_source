import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import createHtmlPlugin from 'vite-plugin-html';
import dayjs from 'dayjs';
import pkg from './package.json';

export default ( { mode } ) => {
	process.env = { ...process.env, ...loadEnv( mode, process.cwd() ) };
	return defineConfig( {
		plugins: [
			vue(),
			createHtmlPlugin( {
				inject: {
					data: {
						ver: pkg.version,
						buildTime: dayjs().format( 'YYYYMMDDHHmmss' ),
						// 可以依環境注入 script
						// injectScript: process.env.VITE_MODE === 'production'?'':'',
						injectScript: `<script></script>`,
					},
				},
			} ),
		],
		resolve: {
			alias: {
				// @static 可以指向 ./public/static
				'@static': resolve(__dirname, './public/static'),
				'@': resolve(__dirname, './src'),
			}
		},
		build: {
			rollupOptions: {
				input: {
					main: resolve( __dirname, 'index.html' ),
					// 樣本----------------------/campaigns/活動名稱/ --> (ex：活動名稱不能以數字開頭)
					_blank: resolve( __dirname, '/_blank/index.html' ),
					// ------------------------------------------------------------
					stunner2020: resolve( __dirname, '/stunner2020/index.html' ),
				},
			}
		}
	} );
};
