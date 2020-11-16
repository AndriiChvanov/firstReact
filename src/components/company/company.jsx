import React, { Component } from "react";
import "./company.scss";
import Slider from './slider'
export default class Company extends Component {
	render() {
		return (
			<>
				<div className='company' id='o nas'>
					<div className='container'>
						<div className='company__container'>
							<h2>О нашей компании Healthy food.</h2>
							<h1>Доставка здорового питания</h1>
							<p>
								Наша компания уже более 10 лет на рынке, мы занимаемся готовкой
								<br />
								и доставкой полноценого рациона здоровой пищи на день, неделю
								<br />
								или месяц. Мы готовим наши блюда исключительно из эко продуктов
								<br />
								поэтому качество на высшем уровне.
								<br />
							</p>
							<button>Подробнее о компании “Healthy food”</button>
						</div>
						<Slider />
					</div>
				</div>
			</>
		);
	}
}
