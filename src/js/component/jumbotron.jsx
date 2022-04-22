import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="container">
			<div className="p-5 mb-4 bg-light rounded-3">
				<div className="container-fluid">
					<h1 className="fs-1">{props.tittle}</h1>
					<p className={props.paragraph}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam tenetur similique, impedit corporis libero illo
						at nulla quisquam fugit! Corrupti enim quos aliquid
						voluptas. Rem voluptatibus laborum totam officiis
						laudantium?
					</p>
					<a href="#" className="btn btn-primary">
						{props.botton}
					</a>
				</div>
			</div>
		</div>
	);
};

Jumbotron.PropTypes = {
	tittle: PropTypes.string,
	paragraph: PropTypes.string,
	botton: PropTypes.string,
};

export default Jumbotron;
