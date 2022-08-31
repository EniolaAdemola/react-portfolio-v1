import React from "react";
import "./about.css";
import ME from "../../asssets/eniolaBG.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { aboutCard } from "../../asssets/data";

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="me" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						{aboutCard.map(({ id, icon, title, info }) => {
							return (
								<article className="about__card" key={id}>
									<>{icon}</>
									<h5>{title}</h5>
									<small>{info}</small>
								</article>
							);
						})}
					</div>
					<p>
						Hi there, i'm Eniola David ADEMOLA (DAVEWORLD) and i am a Fullstack
						Developer, I fell in love with programming since 2020. My field of
						Interest's are building new Web Technologies and Products and also
						in areas related to Machine Learning and Web 3.0.{" "}
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
