import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#ffffff",
			cream: "#F3F7F3",
			black: "#121212",
			gray: "#BEBEBE",
			ash: "#8C8C8C",
			pink: "#FF80FA",
		},
		extend: {
			fontFamily: {
				customBlack: ["NeueHaasDisplay-Black"],
				customBold: ["NeueHaasDisplay-Bold"],
				customMed: ["NeueHaasDisplay-Mediu"],
				custom: ["NeueHaasDisplay-Roman"],
				customLight: ["NeueHaasDisplay-Light"],
				customSerif: ["ABCSynt-Bold-Trial"],
			},
			fontSize: {
				"2xl": ["20px", "20px"],
				"3xl": ["28px", "28px"],
				"4xl": ["40px", "40px"],
				"6xl": ["64px", "64px"],
			},

			screens: {
				sm: "300px",
				md: "700px",
				lg: "1250px",
				xl: "1440px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
