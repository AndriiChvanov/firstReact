import React, { Component } from "react";
import "./itemList.scss";
import { Okej } from "../../svg";
import bal1b from "../../img/balance/1B.png";
import bal1s from "../../img/balance/1S.png";
import bal2b from "../../img/balance/2B.png";
import bal2s from "../../img/balance/2S.png";
import bal3b from "../../img/balance/3B.png";
import bal3s from "../../img/balance/3S.png";
export default class Balance extends Component {
	state = {
		slide: 1,
		id: {
			1: {
				title_plusL: "Плюсы сбалансированого питания",
				info_plusL: {
					1: "Очищение организма",
					2: "Приплыв энергии",
					3: "Снижение лишнего веса",
				},
				title_pluseR: "Сбалансированое питание",
				info_pluseR:
					"Сбалансированное питание - это удачное и правильное соединение продуктов, которое помогает организму вовремя получать необходимые для него витамины и минералы.",
				bId: 1,
				bst: 2,
				bsb: 3,
				imgBig: bal1b,
				imgSmallT: bal2s,
				imgSmallB: bal3s,
				title_eat: "Яйцо пашот с овощами ",
				info_eat:
					"Яйцо пашот + помидоры + листья салата +оругци + руккола (по желанию кунжут)",
				info_cal: "200 гр 250 ккал",
			},
			2: {
				title_plusL: "Плюсы сбалансированого питания",
				info_plusL: {
					1: "Очищение организма",
					2: "Приплыв энергии",
					3: "Снижение лишнего веса",
				},
				title_pluseR: "Сбалансированое питание",
				info_pluseR:
					"Сбалансированное питание - это удачное и правильное соединение продуктов, которое помогает организму вовремя получать необходимые для него витамины и минералы.",
				bId: 2,
				bst: 3,
				bsb: 1,
				imgBig: bal2b,
				imgSmallT: bal1s,
				imgSmallB: bal3s,
				title_eat: "Овсянка с фруктами и орехами",
				info_eat:
					"Овсянка с фруктами (в зависимости от сезона) и орехами (миндаль/лесной орех/арахис)",
				info_cal: "300 гр 250 ккал",
			},
			3: {
				title_plusL: "Плюсы сбалансированого питания",
				info_plusL: {
					1: "Очищение организма",
					2: "Приплыв энергии",
					3: "Снижение лишнего веса",
				},
				title_pluseR: "Сбалансированое питание",
				info_pluseR:
					"Сбалансированное питание - это удачное и правильное соединение продуктов, которое помогает организму вовремя получать необходимые для него витамины и минералы.",
				bId: 3,
				bst: 1,
				bsb: 2,
				imgBig: bal3b,
				imgSmallT: bal2s,
				imgSmallB: bal1s,
				title_eat: "Рисовая каша с ягодами",
				info_eat:
					"Рисовая каша с ягодами (в зависимости от сезона) и орехами (миндаль/лесной орех/арахис)",
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
						<div className='item__small'>
							<h1>Пример завтрака в программе питания</h1>
							<p>
								*Для того чтобы выбрать рацион на каждый день нажмите заказать
								программу
							</p>
						</div>
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
						<button className='item__btn' onClick={(e) => modal(e)}>
							Заказать программу
						</button>
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
