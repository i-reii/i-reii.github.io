import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://i-reii.github.io',
	trailingSlash: "never",
	image: {
		domains: ["github.com", "codeberg.org", "x.com", "avatars.githubusercontent.com"]
	},

});


