import React, { Component } from "react";
import "./itemList.scss";
import { Okej } from "../../svg";
import m1b from "../../img/balance/m1B.png";
import m1s from "../../img/balance/m1S.png";
import m2b from "../../img/balance/m2B.png";
import m2s from "../../img/balance/m2S.png";
import m3b from "../../img/balance/m3B.png";
import m3s from "../../img/balance/m3S.png";
export default class Gain extends Component {
	state = {
		slide: 1,
		id: {
			1: {
				title_plusL: "Плюсы питания для набора массы",
				info_plusL: {
					1: "Значительный прирост мышечной массы",
					2: "Прилив силы во время тренеровок",
					3: "Быстрое востановление мышц",
				},
				title_pluseR: "Набор массы",
				info_pluseR:
					"Питание на массу — это соблюдение гиперкалорийной диеты с акцентом на повышенном количестве белков и правильных углеводов в рационе. Также для набора веса важно следить за наличием витаминов и минералов.",
				bId: 1,
				bst: 2,
				bsb: 3,
				imgBig: m1b,
				imgSmallT: m2s,
				imgSmallB: m3s,
				title_eat: "Тушенные овощи с телятиной",
				info_eat:
					"Тушеные овощи (баклажаны, спаржа, кабачек) телятина в кисло-сладком соусе",
				info_cal: "200 гр 250 ккал",
			},
			2: {
				title_plusL: "Плюсы питания для набора массы",
				info_plusL: {
					1: "Значительный прирост мышечной массы",
					2: "Прилив силы во время тренеровок",
					3: "Быстрое востановление мышц",
				},
				title_pluseR: "Набор массы",
				info_pluseR:
					"Питание на массу — это соблюдение гиперкалорийной диеты с акцентом на повышенном количестве белков и правильных углеводов в рационе. Также для набора веса важно следить за наличием витаминов и минералов.",
				bId: 2,
				bst: 3,
				bsb: 1,
				imgBig: m2b,
				imgSmallT: m1s,
				imgSmallB: m3s,
				title_eat: "Бронзовый рис с добавками",
				info_eat:
					"Бронзовый рис с добавками (лук, горошек, грибочки, перец острый, кукуруза, лечо )",
				info_cal: "300 гр 250 ккал",
			},
			3: {
				title_plusL: "Плюсы питания для набора массы",
				info_plusL: {
					1: "Значительный прирост мышечной массы",
					2: "Прилив силы во время тренеровок",
					3: "Быстрое востановление мышц",
				},
				title_pluseR: "Набор массы",
				info_pluseR:
					"Питание на массу — это соблюдение гиперкалорийной диеты с акцентом на повышенном количестве белков и правильных углеводов в рационе. Также для набора веса важно следить за наличием витаминов и минералов.",
				bId: 3,
				bst: 1,
				bsb: 2,
				imgBig: m3b,
				imgSmallT: m2s,
				imgSmallB: m1s,
				title_eat: "Стейк с гренками",
				info_eat: "Стейк с говядины с гренками, буряком и зеленью",
				info_cal: "300 гр 250 ккал",
			},
		},
	};
	render() {
		const modal = (e) => {
			e.preventDefault();
			const modal = document.querySelector(".reviews__enter");
			const cont = document.querySelector(".program");
			if (e.target) {
				modal.style.display = "block";
				cont.style.filter = "blur(3px)";
				document.getElementsByTagName("body")[0].style.overflow = "hidden";
			}
		};
		const changeSlide = (e) => {
			e.preventDefault();
			const slideId = e.target.id;
			this.setState({
				slide: slideId,
			});
		};
		const changeDay = (e) => {
			e.preventDefault();
			const day = document.querySelectorAll(".item__day li");
			for (let i = 0; i < day.length; i++) {
				day[i].classList.remove("active");
				if (e.target === day[i]) {
					e.target.className = "active";
				}
			}
		};
		const changeTime = (e) => {
			e.preventDefault();
			const time = document.querySelectorAll(".item__time li");
			for (let i = 0; i < time.length; i++) {
				time[i].classList.remove("active");
				if (e.target === time[i]) {
					e.target.className = "active";
				}
			}
		};
		const changeCalcD = (e) => {
			e.preventDefault();
			const calcD = document.querySelectorAll(".calc__day p");
			for (let i = 0; i < calcD.length; i++) {
				calcD[i].classList.remove("active");
				if (e.target === calcD[i]) {
					e.target.className = "active";
				}
			}
		};
		const changeCalcE = (e) => {
			e.preventDefault();
			const calcE = document.querySelectorAll(".calc__eats p");
			for (let i = 0; i < calcE.length; i++) {
				calcE[i].classList.remove("active");
				if (e.target === calcE[i]) {
					e.target.className = "active";
				}
			}
		};

		const changeBtn = (e) => {
			e.preventDefault();
			const btn = document.querySelectorAll(".items__days-price button");
			for (let i = 0; i < btn.length; i++) {
				btn[i].classList.remove("active");
				if (e.target === btn[i]) {
					e.target.className = "itm__btn active";
				}
			}
		};
		const {
			title_plusL,
			info_plusL,
			title_pluseR,
			info_pluseR,
			imgBig,
			imgSmallB,
			imgSmallT,
			bId,
			bst,
			bsb,
			title_eat,
			info_cal,
			info_eat,
		} = this.state.id[this.state.slide];

		return (
			<div className='eats__container'>
				<div className='eats__title'>
					<div className='plus__eats'>
						<h1>{title_plusL}</h1>
						<p>
							<Okej />
							{info_plusL[1]}
						</p>
						<p>
							<Okej />
							{info_plusL[2]}
						</p>
						<p>
							<Okej />
							{info_plusL[3]}
						</p>
					</div>
					<div className='item__eats'>
						<h1>{title_pluseR}</h1>
						<p>{info_pluseR}</p>
					</div>
				</div>
				<div className='line__eats'></div>
				<div className='item__container'>
					<div className='item__cart'>
						<div className='item__img'>
							<div className='img__big'>
								<img src={imgBig} alt='bal1' id={bId} />
							</div>
							<div className='img__small'>
								<img
									src={imgSmallB}
									id={bst}
									alt='bal2'
									onClick={(e) => changeSlide(e)}
								/>
								<img
									src={imgSmallT}
									id={bsb}
									alt='bal3'
									onClick={(e) => changeSlide(e)}
								/>
							</div>
						</div>
						<h1>
							{title_eat} <p>{info_cal}</p>
						</h1>

						<div className='pp'>{info_eat}</div>
						<button className='item__btn' onClick={(e) => modal(e)}>Заказать программу</button>
					</div>
					<div className='item__info'>
						<div className='item__day' onClick={(e) => changeDay(e)}>
							<ul>
								<li>Пн</li>
								<li>Вт</li>
								<li>Ср</li>
								<li>Чт</li>
								<li>Пт</li>
								<li>Сб</li>
								<li>Вс</li>
							</ul>
						</div>
						<div className='item__time' onClick={(e) => changeTime(e)}>
							<ul>
								<li>Завтрак</li>
								<li>Обед</li>
								<li>Ужин</li>
								<li>Перекус</li>
								<li>Перекус</li>
							</ul>
						</div>
						<div className='item__calc'>
							<div className='calc__day' onClick={(e) => changeCalcD(e)}>
								<h1>Енергитическая ценность рациона </h1>
								<p>1100 ккал/день</p>
								<p>1500 ккал/день</p>
							</div>
							<div className='calc__eats' onClick={(e) => changeCalcE(e)}>
								<h1>Прийомов пищи</h1>
								<p>5 в день</p>
								<p>6 в день</p>
							</div>
						</div>
						<div className='items__days-price' onClick={(e) => changeBtn(e)}>
							<h1>Количество дней</h1>
							<button className='itm__btn'>
								<span>1 день</span>/550 грн
							</button>
							<button className='itm__btn'>
								<span>7 дней</span>/530 грн
							</button>
							<button className='itm__btn'>
								<span>14 дней</span>/499 грн
							</button>
							<button className='itm__btn'>
								<span>21 день</span>/470 грн
							</button>
							<button className='itm__btn'>
								<span>30 дней</span>/499 грн
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
