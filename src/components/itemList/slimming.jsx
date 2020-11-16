import React, { Component } from "react";
import "./itemList.scss";
import { Okej } from "../../svg";
import sl1b from "../../img/balance/sl1B.png";
import sl1s from "../../img/balance/sl1S.png";
import sl2b from "../../img/balance/sl2B.png";
import sl2s from "../../img/balance/sl2S.png";
import sl3b from "../../img/balance/sl3B.png";
import sl3s from "../../img/balance/sl3S.png";
export default class Slimming extends Component {
	state = {
		slide: 1,
		id: {
			1: {
				title_plusL: "Плюсы питания для похудения",
				info_plusL: {
					1: "Снижение лишнего веса",
					2: "Очищает организм",
					3: "Уменьшает вероятность заболеваний",
				},
				title_pluseR: "Питание для похудения",
				info_pluseR:
					"Стройная фигура — это не только красота, но и здоровье. Питаясь правильно, можно сбросить лишний вес и улучшить общее самочувствие. Для этого не нужно изнурять себя диетами, достаточно - правильно питаться.",
				bId: 1,
				bst: 2,
				bsb: 3,
				imgBig: sl1b,
				imgSmallT: sl2s,
				imgSmallB: sl3s,
				title_eat: "Лосось с овощами",
				info_eat:
					"Лосось запеченый + морковь + кабачки +оругци + руккола + лайм броколи",
				info_cal: "200 гр 550 ккал",
			},
			2: {
				title_plusL: "Плюсы питания для похудения",
				info_plusL: {
					1: "Снижение лишнего веса",
					2: "Очищает организм",
					3: "Уменьшает вероятность заболеваний",
				},
				title_pluseR: "Питание для похудения",
				info_pluseR:
					"Стройная фигура — это не только красота, но и здоровье. Питаясь правильно, можно сбросить лишний вес и улучшить общее самочувствие. Для этого не нужно изнурять себя диетами, достаточно - правильно питаться.",
				bId: 2,
				bst: 3,
				bsb: 1,
				imgBig: sl2b,
				imgSmallT: sl1s,
				imgSmallB: sl3s,
				title_eat: "Тыквеный суп-пюре",
				info_eat:
					"Тыквенный суп-пюре с семечками тыквы с хрустящими сухариками с черного хлеба",
				info_cal: "250 гр 550 ккал",
			},
			3: {
				title_plusL: "Плюсы питания для похудения",
				info_plusL: {
					1: "Снижение лишнего веса",
					2: "Очищает организм",
					3: "Уменьшает вероятность заболеваний",
				},
				title_pluseR: "Питание для похудения",
				info_pluseR:
					"Стройная фигура — это не только красота, но и здоровье. Питаясь правильно, можно сбросить лишний вес и улучшить общее самочувствие. Для этого не нужно изнурять себя диетами, достаточно - правильно питаться.",
				bId: 3,
				bst: 1,
				bsb: 2,
				imgBig: sl3b,
				imgSmallT: sl2s,
				imgSmallB: sl1s,
				title_eat: "Теплый салат с креветками",
				info_eat:
					"Теплый салат с креветками ( креветки вьетнамские, спаржа, кукуруза запеченная, руккола, перец болгарский)",
				info_cal: "250 гр 550 ккал",
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
