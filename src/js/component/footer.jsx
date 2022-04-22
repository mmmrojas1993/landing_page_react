import React from "react";
import { PropTypes } from "prop-types";

const Footer = (props) => {
	return (
		<div className="bg-dark text-center text-white py-3">
			<footer>{props.nameFooter}</footer>
		</div>
	);
};
Footer.propTypes = {
	nameFooter: PropTypes.string,
};
export default Footer;
