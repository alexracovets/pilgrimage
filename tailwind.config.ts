import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'tablet': '1024px',
			'mobile': '540px',
		},
		extend: {
			fontFamily: {
				'oswald': ["var(--font-oswald)"],
				'imb': ["var(--font-imb)"]
			},
			colors: {
				'regal-black': '#000000',
				'regal-white': '#FFFFFF',
				'regal-orange': '#FF6328',
				'regal-gray': '#E9E9E9'
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
