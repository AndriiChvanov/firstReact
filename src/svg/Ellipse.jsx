import React, { Component } from "react";

export default class Ellipse extends Component {
	render() {
		const svg2 = {
			marginBottom: "3px",
		};
		const svg1 = {
			marginLeft: "2px",
			marginRight: "2px",
			marginBottom: '4px'
		};

		return (
			<>
				<svg
					style={svg2}
					width='9'
					height='9'
					viewBox='0 0 9 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle cx='4.5' cy='4.5' r='4.5' fill='#6AC32E' />
				</svg>
				<svg
					style={svg1}
					width='7'
					height='7'
					viewBox='0 0 7 7'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle cx='3.5' cy='3.5' r='3.5' fill='#6AC32E' />
				</svg>
				<svg
					style={svg2}
					width='9'
					height='9'
					viewBox='0 0 9 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle cx='4.5' cy='4.5' r='4.5' fill='#6AC32E' />
				</svg>
			</>
		);
	}
}
