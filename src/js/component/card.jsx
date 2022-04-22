import React from "react";
import { PropTypes } from "prop-types";

const Card = (props) => {
	return (
		<div className="container">
			<div className="row row-cols-4 row-cols-g-4 text-center">
				<div className="col">
					<div className="card h-100">
						<img
							src={props.imageURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{props.cardTittle}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								{props.btn}
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src={props.imageURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{props.cardTittle}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								{props.btn}
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src={props.imageURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{props.cardTittle}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								{props.btn}
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img
							src={props.imageURL}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{props.cardTittle}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								{props.btn}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.PropTypes = {
	cardTittle: PropTypes.string,
	description: PropTypes.string,
	btn: PropTypes.string,
	imageURL: PropTypes.any,
};

export default Card;
