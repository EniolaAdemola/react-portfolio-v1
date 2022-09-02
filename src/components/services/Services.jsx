import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { dataScience, tutorials, webDev } from "../../asssets/data";

const Service = () => {
	return (
		<section id="service">
			<h5>What i Offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Data Science</h3>
					</div>
					<ul className="service__list">
						{dataScience.map(({ id, service }) => {
							return (
								<li key={id}>
									<BiCheck className="service__list-item" />
									<p>{service}</p>
								</li>
							);
						})}
					</ul>
				</article>
				{/* End of Data Science */}
				<article className="service">
					<div className="service__head">
						<h3>Web Development</h3>
					</div>

					<ul className="service__list">
						{webDev.map(({ id, service }) => {
							return (
								<li key={id}>
									<BiCheck className="service__list-item" />
									<p>{service}</p>
								</li>
							);
						})}
					</ul>
				</article>
				{/* End of Web Development */}
				<article className="service">
					<div className="service__head">
						<h3>Tutorials</h3>
					</div>

					<ul className="service__list">
						{tutorials.map(({ id, service }) => {
							return (
								<li key={id}>
									<BiCheck className="service__list-item" />
									<p>{service}</p>
								</li>
							);
						})}
					</ul>
				</article>
				{/* End of Tutorial */}
			</div>
		</section>
	);
};

export default Service;
