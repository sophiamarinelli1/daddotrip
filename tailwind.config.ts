import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				customBlack: ["NeueHaasDisplay-Black"],
				customBold: ["NeueHaasDisplay-Bold"],
				customMed: ["NeueHaasDisplay-Mediu"],
				custom: ["NeueHaasDisplay-Roman"],
				customLight: ["NeueHaasDisplay-Light"],
				customSerif: ["ABCSynt-Bold-Trial"],
			},
			screens: {
				sm: "300px",
				md: "700px",
				lg: "976px",
				xl: "1440px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
