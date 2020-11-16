import React, { Component } from "react";
import "./reviewsEnter.scss";
import { Sps } from "../../../svg";
export default class ReviewsEnter extends Component {
	render() {
		const modal = (e) => {
			e.preventDefault();
			const modal = document.querySelector(".reviews__enter");
			const cont = document.querySelector(".program");
			if (e.target) {
				modal.style.display = "none";
				cont.style.filter = "";
				document.getElementsByTagName("body")[0].style.overflow = "";
			}
		};
		return (
			<div className='reviews__enter' onClick={(e) => modal(e)}>
				<div className='container'>
					<div className='reviews__enter-container'>
						<h1>Спасибо за ваш заказ!</h1>
						<p>
							В ближайшее время с вами свяжиться
							<br /> наш специалист для подтверждения заказа.
						</p>
						<Sps />
					</div>
				</div>
			</div>
		);
	}
}
