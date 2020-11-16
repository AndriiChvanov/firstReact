import React, { Component } from 'react'

export default class HoverEllipse extends Component {
	
	render() {
		
		
		const svg1 = {
			margin: '1px'
		};
		return (
			<>
				<svg
					width='6'
					height='6'
					viewBox='0 0 6 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle cx='3' cy='3' r='3' fill='#6AC32E' />
				</svg>
				<svg
					style={svg1}
					width='4'
					height='4'
					viewBox='0 0 4 4'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle cx='2' cy='2' r='2' fill='#6AC32E' />
				</svg>
				<svg
					width='6'
					height='6'
					viewBox='0 0 6 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<circle cx='3' cy='3' r='3' fill='#6AC32E' />
				</svg>
			</>
		);
	}
}
