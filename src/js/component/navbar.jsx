import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					{props.navName}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								{props.navHome}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.navAbout}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.navServices}
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								{props.navContact}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
Navbar.PropTypes = {
	navName: PropTypes.string,
	navHome: PropTypes.string,
	navAbout: PropTypes.string,
	navServices: PropTypes.string,
	navContact: PropTypes.string,
};

export default Navbar;
