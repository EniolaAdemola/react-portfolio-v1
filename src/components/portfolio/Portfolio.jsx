import React from "react";
import { portfolio } from "../../asssets/data";
import "./portfolio.css";

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{portfolio.map(({ id, image, title, github, demo }) => {
					return (
						<article className="portfolio__item" key={id}>
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer noopener"
								>
									Github
								</a>
								<a
									href={demo}
									className="btn"
									target="_blank"
									rel="noreferrer noopener"
								>
									Life Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
