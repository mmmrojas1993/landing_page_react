import React from "react";
//include images into your bundle
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Footer from "../component/footer.jsx";
import Card from "../component/card.jsx";
import image from "../../img/madrid.png";

//create your first component
const Home = (props) => {
	return (
		<div>
			<Navbar
				navName="Start Boostrap"
				navHome="Home"
				navAbout="About"
				navServices="Services"
				navContact="Contact"
			/>

			<Jumbotron
				tittle="A Warm Welcome!"
				description="paragraph"
				botton="Call to action!"
			/>

			<Card
				imageURL={image}
				cardTittle="Card title"
				description="This is a wider card with supporting text below
				as a natural lead-in to additional content. This
				content is a little bit longer."
				btn="Find Out More!"
			/>

			<Footer nameFooter="Copyright© Your Website 2021" />
		</div>
	);
};

export default Home;
