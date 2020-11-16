import React, { Component } from "react";
import "./main.scss";
import { Link } from "react-scroll";
import Header from "../header";
import { PromoHeader } from "../../svg";
export default class Main extends Component {
	render() {
		return (
				<div className='main'>
					<div className='container'>
						<Header />
						<div className='main__container'>
							<div className='main__info'>
								<h1>
									Доставка здорового
									<br /> питания в Киеве
								</h1>
								<p>
									Закажи полный рацион здоровой еды на целый день и почувствуй
									<br />
									как изменится твоя жизнь. Сколько свободного времени и енергии
									<br />
									появится для других важных задачь
								</p>
								<Link
									activeClass='active'
									to='program'
									offset={-10}
									spy={true}
									smooth={true}
									duration={500}>
									<button className='info__btn'>Подобрать программу</button>
								</Link>
							</div>
							<div className='main__promo'>
								<button className='promo__btn'>
									Пробный <span>день</span> всего
									<br /> <span>499 грн</span> + <PromoHeader />
								</button>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
