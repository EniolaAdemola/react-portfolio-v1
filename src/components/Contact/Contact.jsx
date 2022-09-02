import { contact } from "../../asssets/data";
import "./contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_ufpwrk8",
			"template_djcq4pd",
			form.current,
			"ARqm1KX6CttwM12be"
		);
		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					{contact.map(({ id, icon, name, contactInfo, link }) => {
						return (
							<article className="contact__option" key={id}>
								{icon}
								<h4>{name}</h4>
								<h5>{contactInfo}</h5>
								<a href={link} target="_blank" rel="noreferrer noopenner">
									Send a message
								</a>
							</article>
						);
					})}
				</div>
				{/* End of Contact secrion */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="example@mail.com"
						required
					/>
					<textarea
						name="message"
						placeholder="your message"
						rows="7"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
