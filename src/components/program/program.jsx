import React, { Component } from "react";
import "./program.scss";

import { Balance, Slimming, Gain, Vega } from "../itemList";
export default class Program extends Component {
	state = {
		id: "1",
		active: true,
	};

	render() {
		const changeSlide = (e) => {
			e.preventDefault();
			const slide = `${e.target.id}`;
			const btn = document.querySelectorAll(".nav__form li");
			for (let i = 0; i < btn.length; i++) {
				btn[i].className = "";
			}
			e.target.className = "active";
			this.setState({
				id: slide,
				active: true,
			});
		};
		const changeItem = () => {
			if (this.state.id === "1") {
				return <Balance />;
			} else if (this.state.id === "2") {
				return <Slimming />;
			} else if (this.state.id === "3") {
				return <Vega />;
			} else if (this.state.id === "4") {
				return <Gain />;
			}
		};
		return (
			<div className='program' id='program'>
				<div className='container'>
					<h1>Выбери свою программу питания</h1>
					<div className='form__container'>
						<ul className='nav__form' id='nav__form'>
							<li id='1' className='active' onClick={(e) => changeSlide(e)}>
								Сбалансированое питание
							</li>
							<li id='2' className='' onClick={(e) => changeSlide(e)}>
								Питание для похудения
							</li>
							<li id='3' className='' onClick={(e) => changeSlide(e)}>
								Вегетарианское питание
							</li>
							<li id='4' className='' onClick={(e) => changeSlide(e)}>
								Питание набор массы
							</li>
						</ul>
						{changeItem()}
					</div>
				</div>
			</div>
		);
	}
}
