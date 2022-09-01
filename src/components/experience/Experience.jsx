import React from "react";
import "./experience.css";
import { frontendExperience } from "../../asssets/data";
import { backendExperience } from "../../asssets/data";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5>My programing Skills</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				{/*===== Frontend Experience =====*/}
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{frontendExperience.map(({ id, title, level }) => {
							return (
								<article className="experience__details" key={id}>
									<BsPatchCheckFill className="experience__details-icon" />
									<div>
										<h4>{title}</h4>
										<small className="text-light">{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				{/*===== Backend Experience =====*/}
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{backendExperience.map(({ id, icon, title, level }) => {
							return (
								<article className="experience__details" key={id}>
									<BsPatchCheckFill className="experience__details-icon" />
									<div>
										<h4>{title}</h4>
										<small className="text-light">{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
