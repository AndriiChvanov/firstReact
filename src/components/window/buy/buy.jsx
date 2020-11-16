import React, { Component } from "react";
import "./buy.scss";
import smile from "../../../img/smile.png";
export default class Buy extends Component {
	render() {
		
		const modal = (e) => {
			e.preventDefault();
			const modal = document.querySelector(".reviews__enter-buy");
			const cont = document.querySelector(".reviews");
			if (e.target) {
				modal.style.display = "none";
				cont.style.filter = "";
				document.getElementsByTagName("body")[0].style.overflow = "";
			}
		};
		return (
			<div className='reviews__enter-buy' onClick={(e) => modal(e)}>
				<div className='container'>
					<div className='reviews__enter-container-buy'>
						<h1>
							Спасибо за
							<br /> ваш отзыв!
						</h1>
						<img src={smile} alt='' />
					</div>
				</div>
			</div>
		);
	}
}
