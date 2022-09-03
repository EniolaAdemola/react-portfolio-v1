import React from "react";
import { footerSocials } from "../../asssets/data";
import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Eniola David ADEMOLA (DAVEWORLD)
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About Me</a>
				</li>
				<li>
					<a href="#experience">My Experience</a>
				</li>
				<li>
					<a href="#service">Service</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimoonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact Me</a>
				</li>
			</ul>
			<div className="footer__socials">
				{footerSocials.map(({ id, link, icon }) => {
					return (
						<a href={link} target="_blank" rel="noreferrer noopenner" key={id}>
							{icon}
						</a>
					);
				})}
			</div>
			;
			<div className="footer__copyright">
				<small>&copy; Eniola Ademola. All right reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
