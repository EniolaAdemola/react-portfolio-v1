import React from "react";
import CV from "../../asssets/EniolaAdemola-resume.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} target="_blank" rel="noreferrer noopenner" className="btn">
				Resume
			</a>
			<a href="#contact" className="btn btn-primary">
				Let's Talk
			</a>
		</div>
	);
};

export default CTA;
