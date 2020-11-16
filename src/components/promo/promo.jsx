import React, { Component } from "react";
import "./promo.scss";
import { Link } from "react-scroll";
export default class Promo extends Component {
	render() {
		return (
			<div className='promo'>
				<div className='container'>
					<div className='promo__container'>
						<h1>
							Пробный
							<span> день </span>
							всего
							<br />
							<span> 499 грн </span>+<span> смузи </span>в подарок
						</h1>
						<p>
							Если не знаешь какую выбрать программу или сомневаешся закажи
							<span> “пробный день” </span>. Курьер привезет тебе программу
							одного дня + смузи в подарок.
						</p>
						<Link
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={160}
							duration={500}>
							<button>Заказать пробный день</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
