import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../asssets/eniola.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Eniola Ademola</h1>
				<h4 className="text-light">
					<Typewriter
						options={{
							strings: [
								"A FullStack Developer💻",
								"I build things for the web🌐",
								"Currrently learning MERN Stack💻",
								"I’m looking to collaborate for Dev Projects",
								"Life Hack: Learn new tech 🔥 and share what you have learned 🎉",
							],
							autoStart: true,
							loop: true,
							pauseFor: 2500,
						}}
					/>
				</h4>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default header;
