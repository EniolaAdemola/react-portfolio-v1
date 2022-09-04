import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import gymPortfolio from "../asssets/gym-portfolio.PNG";
import secreteApp from "../asssets/secret-app.PNG";
import keeperApp from "../asssets/keeper-app.PNG";
import toDoApp from "../asssets/database-todoapp.PNG";
import newsletter from "../asssets/eniola-newsletter.PNG";
import simonGame from "../asssets/simon-game.PNG";
import AVTR1 from "../asssets/avatar1.jpg";
import AVTR2 from "../asssets/avatar2.jpg";
import AVTR3 from "../asssets/avatar3.jpg";
import AVTR4 from "../asssets/avatar4.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

export const aboutCard = [
	{
		id: 1,
		icon: <FaAward className="about__icon" />,
		title: "Experience",
		info: "3+ Years Working",
	},
	{
		id: 2,
		icon: <FiUsers className="about__icon" />,
		title: "Clients",
		info: "11+ Worldwide",
	},
	{
		id: 3,
		icon: <VscFolderLibrary className="about__icon" />,
		title: "Projects",
		info: "20+ Completed",
	},
];

export const frontendExperience = [
	{
		id: 1,
		title: "HTML",
		level: "Experienced",
	},
	{
		id: 2,
		title: "CSS",
		level: "Intermediate",
	},
	{
		id: 3,
		title: "Bootstrap",
		level: "Intermediate",
	},
	{
		id: 4,
		title: "Tailwind",
		level: "Intermdiate",
	},
	{
		id: 5,
		title: "Javascript",
		level: "Experienced",
	},
	{
		id: 6,
		title: "React",
		level: "Experienced",
	},
];

export const backendExperience = [
	{
		id: 1,
		title: "Node JS",
		level: "Experienced",
	},
	{
		id: 2,
		title: "MongoDB",
		level: "Intermediate",
	},
	{
		id: 3,
		title: "Express",
		level: "Intermediate",
	},
	{
		id: 4,
		title: "MySQL",
		level: "Basic",
	},
	{
		id: 5,
		title: "Python",
		level: "Basic",
	},
];

export const dataScience = [
	{
		id: 1,
		service: "Data Manipulation using Excel.",
	},
	{
		id: 2,
		service:
			"Very strong in producing insights with beautiful data visualisations using Tableau",
	},
	{
		id: 3,
		service: "Proficient in analysing data with python and many libraries",
	},
	{
		id: 4,
		service:
			"EDA e.g Explore data using  pandas, matplotlib, seaborn, plotly and manymore!",
	},
	{
		id: 5,
		service:
			"Vast in creating ML Models Surpervised & Unsupervised using various Algo and deploying them (Streamlit).",
	},
];
export const webDev = [
	{
		id: 1,
		service: "Build responsive and beautiful pages.(HTML, CSS & JS).",
	},
	{
		id: 2,
		service: "Develope your game of interest using JavaScript.",
	},
	{
		id: 3,
		service:
			"React best practice (Router, hooks, usestate, reusable component and many more) .",
	},
	{
		id: 4,
		service: "Build modern Fullstack project using MERN stack.!",
	},
	{
		id: 5,
		service:
			"Deploy & Maintain your website using the best Domain & Hosting provider in the world",
	},
	{
		id: 6,
		service:
			"Authentication and security website using Encrypted & secured database.",
	},
];
export const tutorials = [
	{
		id: 1,
		service:
			"Learn the fundamantals of Programming Languages with various real life examples.",
	},
	{
		id: 2,
		service: "learn how to use Excel for data Validation & Manipulation.",
	},
	{
		id: 3,
		service: "Fundamentals of Structured programming using C Language.",
	},
	{
		id: 4,
		service:
			"Learn the basics Python Programming Language and how they can be applied in today's world.",
	},
	{
		id: 5,
		service: "All you need to know to get started in the technology world!",
	},
];
export const portfolio = [
	{
		id: 1,
		image: gymPortfolio,
		title: "Gym Portfolio Website",
		github: "https://github.com/EniolaAdemola/gym-portfolio",
		demo: "https://eniola-gym-portfolio.vercel.app/",
	},
	{
		id: 2,
		image: secreteApp,
		title: "Secrete Application",
		github: "https://github.com/EniolaAdemola/Authentication_and_Security",
		demo: "https://eniola-secrete-app.herokuapp.com/",
	},
	{
		id: 3,
		image: simonGame,
		title: "Simon Game",
		github: "https://github.com/EniolaAdemola/simon-game",
		demo: "https://simon-game-lilac.vercel.app/",
	},
	{
		id: 4,
		image: toDoApp,
		title: "To Do App",
		github: "https://github.com/EniolaAdemola/to-do-list",
		demo: "https://eniola-todolist.herokuapp.com/",
	},
	{
		id: 5,
		image: newsletter,
		title: "News Letter SignUp",
		github: "https://github.com/EniolaAdemola/NEWSLETTER-SIGNUP",
		demo: "https://eniola-newsletter.herokuapp.com/signup",
	},
	{
		id: 6,
		image: keeperApp,
		title: "Keeper App",
		github: "https://github.com/EniolaAdemola/KeeperAppProject",
		demo: "https://eniola-keeper-app.vercel.app/",
	},
];

export const testimonials = [
	{
		id: 1,
		avatar: AVTR1,
		name: "John Omoniyi",
		review:
			"I haven't seen such a talented, gentle, patient and great listener such as Eniola before! he helped me with my Masters (MSC) project and my project was listed out as the 'Project of the Year!'. Thanks Eniola it was a great honour & priviledge working with you!",
	},
	{
		id: 2,
		avatar: AVTR2,
		name: "Mary Oluwole",
		review:
			"i call him Tutor DAVEWORLD 😀, he helped with a challenging programming course during my 2nd year in school, he broke down the concept and all the part that seemed like a milestone to me and i came out as the best grade student that year!🎉",
	},
	{
		id: 3,
		avatar: AVTR3,
		name: "Lovable Victor",
		review:
			"DAVEWORLD! He has been my mentor through out my Computer Science College degree he really helped and made a deep impact in my reading, thinking and programming skill as well as good grades also.!",
	},
	{
		id: 4,
		avatar: AVTR4,
		name: "Vicky Vic",
		review:
			"Excellent one DAVEWORLD, He helped me develop a website that was fully responsive and load 10 times faster than the one i had before, faster navigation and routes through my pages in miliseconds! Thanks, so glad i found you",
	},
];

export const contact = [
	{
		id: 1,
		icon: <MdOutlineEmail className="contact__option-icon" />,
		name: "Email",
		contactInfo: "it.eniolaademola@gmail.com",
		link: "mailto:it.eniolaademola@gmail.com",
	},
	{
		id: 2,
		icon: <RiMessengerLine className="contact__option-icon" />,
		name: "Messanger",
		contactInfo: "Eniola Ademola",
		link: "https://m.me/100023859273277/",
	},
	{
		id: 3,
		icon: <BsWhatsapp className="contact__option-icon" />,
		name: "WhatApp",
		contactInfo: "+234 701 390 9098",
		link: "https://api.whatsapp.com/send?phone=+2347013909098",
	},
];

export const footerSocials = [
	{
		id: 1,
		link: "https://facebook.com/eniola.ademola.1610",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		link: "https://instagram.com/_daveworld",
		icon: <FiInstagram />,
	},
	{
		id: 3,
		link: "https://twitter.com/_daveworld",
		icon: <IoLogoTwitter />,
	},
	{
		id: 4,
		link: "https://github.com/EniolaAdemola",
		icon: <BsGithub />,
	},
	{
		id: 5,
		link: "https://www.linkedin.com/in/eniola-ademola-7386161a7/",
		icon: <AiFillLinkedin />,
	},
	{
		id: 6,
		link: "https://stackoverflow.com/users/14307813/eniola-ademola",
		icon: <FaStackOverflow />,
	},
];
