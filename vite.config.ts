import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server:{
		proxy:{
			'/api':'https://backend-test-gray.vercel.app/'
		}
	}
});
