import React, { Component } from "react";
import "./app.scss";
import Main from "../main";
import Company from "../company";
import PeopleChoose from "../peopleChoose";
import Program from "../program";
import Promo from "../promo";
import Reviews from "../reviews";
import Contacts from "../contacts";
import Footer from '../footer';
import {ReviewsEnter, Buy} from '../window'
class App extends Component {
	render() {
		
		return (
			<>
				<Main />
				<Company />
				<PeopleChoose />
				<Program />
				<Promo />
				<Reviews />
				<Contacts />
				<Footer />
				<ReviewsEnter />
				<Buy />
			</>
		);
	}
}

export default App;
