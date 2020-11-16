import React, { Component } from "react";
import Ok from "../img/VectorPlus.png";
export default class Okej extends Component {
	render() {
		const st = {
			paddingRight: "10px",
			paddingTop: '3px'
		};
		return <img src={Ok} alt='ok' style={st} />;
	}
}
