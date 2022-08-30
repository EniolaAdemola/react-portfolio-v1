import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/eniola-ademola-7386161a7/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/EniolaAdemola"
				target="_blank"
				rel="noreferrer noopener"
			>
				<FaGithub />
			</a>
			<a
				href="https://twitter.com/_daveworld"
				target="_blank"
				rel="noreferrer noopener"
			>
				<AiOutlineTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;
