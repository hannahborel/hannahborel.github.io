export const sliderData = [
	{
		id: "0",
		key: "a",
		circle: "bg-circle blue",
		titleFirst: "Fourth ",
		titleSecond: "& Nomad",
		type: "Website ",
		year: "2021 ",
		link: "/projects",
		img: "./assets/img/nomad-home.png",
	},
	{
		id: "1",
		key: "b",
		circle: "bg-circle green",
		titleFirst: "Nike Demo",
		titleSecond: "",
		type: "Website",
		year: "2022 ",
		img: "./assets/img/nike-home.png",
	},
	{
		id: "2",
		key: "c",
		circle: "bg-circle darkBlue",
		titleFirst: "Trivia ",
		titleSecond: "Night",
		type: "Web App ",
		year: "2021 ",
		img: "./assets/img/trivia-home.png",
	},
	{
		id: "3",
		key: "d",
		circle: "bg-circle widget",
		titleFirst: "Weather ",
		titleSecond: "Widget",
		type: "Widget ",
		year: "2019 ",
		img: "./assets/img/widget-home.png",
	},
];

export const projectDetails = [
	{
		id: "1",
		title: "From Store to Screen ",
		tagline: "",
		year: "2021",
		deliverables: [
			"UI/UX & Dev",
			"Visual Design",
			"Creative Direction",
			"Photo Libraires",
			"Custom Graphics",
			"Website Copy",
			"App Integration",
		],
		description:
			"I was approached to redesign Forth & Nomad’s e-commerce site to help increase online sales and create and create a visual design that was more in line with their brand. Working closely with the F&N team I developed several concepts that covered the e-commerce platform, branded content, and tone of voice.",
		website: "https://forthandnomad.com",
		github: "",

		icons: [
			"./assets/img/icons/shopify-icon.png",
			"./assets/img/icons/liquid-icon.png",
			"./assets/img/icons/sketch.png",
			"./assets/img/icons/ps.png",
			"./assets/img/icons/ss-icon.png",
		],
		banner: "./assets/img/projectImg/fn/fn01.png",

		body: [
			{
				p: "Palates were inspired by their brick and mortar location. I chose earth tones but kept it bright.",
				img: "/assets/img/projectImg/fn/fn-palette.png",
			},
			{
				p: "Custom graphic images were created to highlight the trendy and whimsical feel of their store.",
				img: "./assets/img/projectImg/fn/fn-layout01.png",
			},
			{
				p: "I stepped in as the Creative Director for a new library of photos that integrated different products together along with live models to showcase their products.",
				img: "./assets/img/projectImg/fn/fn-layout02.png",
			},
			{
				p: "Product case studies assisted in creating a new product flow and display. We harmonized best sellers with in store products that lacked visibility.",
				img: "./assets/img/projectImg/fn/fn-layout03.png",
			},
			{
				p: "Analytics were taken from 6 months after redesign launch. Here are some of my favorites.",
				img: "./assets/img/projectImg/fn/fn-stats.png",
			},
		],
	},
	{
		id: "2",
		title: "Nike Demo",
		tagline: " Just Do it",
		year: "2022",
		deliverables: [" UI/UX", "Custom Graphics", "JavaScript", "Photo Libraries", "Website Copy"],
		description:
			"I wanted to create a dynamic e-commerce site using only vanilla javaScript. I chose Nike as the template and drove palette inspiration from their current instagram palette.",
		website: "https://hannahborel.github.io/nikeDemo",
		github: "https://github.com/hannahborel/nikeDemo",
		icons: [
			"./assets/img/icons/js.png",
			"./assets/img/icons/ps.png",
			"./assets/img/icons/sketch.png",
			"./assets/img/icons/vsCode.png",
			"./assets/img/icons/html.png",
		],
		banner: "./assets/img/projectImg/nike/nikeBanner.png",

		body: [
			{
				p: "Dynamic sliding, product selection and product color selection was handled with vanilla javaScript.  All graphics are custom, created with Photoshop and Sketch.",
				video: "./assets/img/projectImg/nike/nikeDemoSm.mp4",
			},
		],
	},

	{
		id: "3",
		title: "Trivia Night ",
		tagline: "We love the 90s",
		year: "2019",
		deliverables: [" UI/UX", "Custom Graphics", "JavaScript", "jQuery"],
		description:
			"I am a 90s kid through and through. So when asked to design a themed Trivia night, it was only natural to pay homage to my millennial disposition. Feel free to give it a go for nostalgia…or maybe feeling really old.",
		website: "https://hannahborel.github.io/trivia-game/",
		github: "https://github.com/hannahborel/trivia-game",
		icons: [
			"./assets/img/icons/js.png",
			"./assets/img/icons/ps.png",
			"./assets/img/icons/sketch.png",
			"./assets/img/icons/vsCode.png",
			"./assets/img/icons/html.png",
		],
		banner: "./assets/img/projectImg/trivia/trivia01.png",

		body: [
			{
				img: "./assets/img/projectImg/trivia/trivia02.png",
			},
			{
				img: "./assets/img/projectImg/trivia/trivia03.png",
			},

			{
				img: "./assets/img/projectImg/trivia/trivia04.png",
			},
		],
	},
	{
		id: "4",
		title: "Weather Widget ",
		tagline: "Something cute just for fun",
		year: "2019",
		deliverables: [" UI/UX", "Custom Graphics", "JavaScript", "ajax"],
		description:
			"I was inspired by the cutest little weather widget I saw online and wanted to create my own. All graphics including background vectors and westher icons were created from scratch with Adobe Illustrator. Data is generated dynamically from the weather.com API and is pulled for the city of Houston, TX.",
		website: "https://hannahborel.github.io/weather-widget/",
		github: "https://github.com/hannahborel/weather-widget",
		icons: [
			"./assets/img/icons/js.png",
			"./assets/img/icons/ai.png",
			"./assets/img/icons/sketch.png",
			"./assets/img/icons/vsCode.png",
			"./assets/img/icons/html.png",
		],
		banner: "./assets/img/projectImg/widget/ww-banner.png",

		body: [
			{
				p: "The sun shows the days current temperature and will update hourly. The weather blocks populate by starting with tomorrows date and progressing for the next 7 days.",
				img: "./assets/img/projectImg/widget/ww.gif",
			},
		],
	},
];
