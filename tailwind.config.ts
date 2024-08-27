import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				"random-color-1": "#ff5733",
				"random-color-2": "#33ff57",
				"random-color-3": "#5733ff",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
			},
			animation: {
				pulse: "pulse 30s ease-out infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
