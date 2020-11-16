import React, { useState, useEffect, useRef } from "react";
import "./slider.scss";
import img from "../../../img/123.png";
import img1 from "../../../img/124.png";
import img2 from "../../../img/125.png";
import star from "../../../img/star1.png";

function Slid() {
	const sliderArr = [
		{
			id: 1,
			img: img,
			star: star,
			name: "Станислав Вербитский",
			num_id: "125-355-1",
			reviews:
				"Очень доволен, что случайно наткнулся на сайт этой компании. Уже как пол года заказываю программу сбалансированого питания, которую помогли мне подобрать специалисты компании. Стал замечать, что появилось больше...",
		},
		{
			id: 2,
			img: img1,
			star: star,
			name: "Ольга Немирова",
			num_id: "125-355-2",
			reviews:
				"Рекомендую всем и всегда эту замечательную компанию так как мне удалось похудеть на целых 5 кг благодаря тому, что я поменяла свое питание. Если хочешь так же обязательно свяжись с специалистом и он тебя проконсультирует...",
		},
		{
			id: 3,
			img: img2,
			star: star,
			name: "Александр Чебукин",
			num_id: "125-355-3",
			reviews:
				"В принципе компания хорошая, еда вкусная и всегда хорошего качества, но были некоторые проблемы с курьером, которые уже конечно решились, за что благодарен оператору Олегу...",
		},
		{
			id: 4,
			img: img,
			star: star,
			name: "Станислав Вербитский",
			num_id: "125-355-1",
			reviews:
				"Очень доволен, что случайно наткнулся на сайт этой компании. Уже как пол года заказываю программу сбалансированого питания, которую помогли мне подобрать специалисты компании. Стал замечать, что появилось больше...",
		},
		{
			id: 5,
			img: img1,
			star: star,
			name: "Ольга Немирова",
			num_id: "125-355-2",
			reviews:
				"Рекомендую всем и всегда эту замечательную компанию так как мне удалось похудеть на целых 5 кг благодаря тому, что я поменяла свое питание. Если хочешь так же обязательно свяжись с специалистом и он тебя проконсультирует...",
		},
	];
	const sliderArr1 = [
		{
			id: 11,
			img: img1,
			star: star,
			name: "Ольга Немирова",
			num_id: "125-355-2",
			reviews:
				"Рекомендую всем и всегда эту замечательную компанию так как мне удалось похудеть на целых 5 кг благодаря тому, что я поменяла свое питание. Если хочешь так же обязательно свяжись с специалистом и он тебя проконсультирует...",
		},
		{
			id: 12,
			img: img2,
			star: star,
			name: "Александр Чебукин",
			num_id: "125-355-3",
			reviews:
				"В принципе компания хорошая, еда вкусная и всегда хорошего качества, но были некоторые проблемы с курьером, которые уже конечно решились, за что благодарен оператору Олегу...",
		},
		{
			id: 13,
			img: img,
			star: star,
			name: "Станислав Вербитский",
			num_id: "125-355-1",
			reviews:
				"Очень доволен, что случайно наткнулся на сайт этой компании. Уже как пол года заказываю программу сбалансированого питания, которую помогли мне подобрать специалисты компании. Стал замечать, что появилось больше...",
		},

		{
			id: 14,
			img: img,
			star: star,
			name: "Станислав Вербитский",
			num_id: "125-355-1",
			reviews:
				"Очень доволен, что случайно наткнулся на сайт этой компании. Уже как пол года заказываю программу сбалансированого питания, которую помогли мне подобрать специалисты компании. Стал замечать, что появилось больше...",
		},
		{
			id: 15,
			img: img1,
			star: star,
			name: "Ольга Немирова",
			num_id: "125-355-2",
			reviews:
				"Рекомендую всем и всегда эту замечательную компанию так как мне удалось похудеть на целых 5 кг благодаря тому, что я поменяла свое питание. Если хочешь так же обязательно свяжись с специалистом и он тебя проконсультирует...",
		},
	];
	const sliderArr2 = [
		{
			id: 21,
			img: img2,
			star: star,
			name: "Александр Чебукин",
			num_id: "125-355-3",
			reviews:
				"В принципе компания хорошая, еда вкусная и всегда хорошего качества, но были некоторые проблемы с курьером, которые уже конечно решились, за что благодарен оператору Олегу...",
		},
		{
			id: 22,
			img: img,
			star: star,
			name: "Станислав Вербитский",
			num_id: "125-355-1",
			reviews:
				"Очень доволен, что случайно наткнулся на сайт этой компании. Уже как пол года заказываю программу сбалансированого питания, которую помогли мне подобрать специалисты компании. Стал замечать, что появилось больше...",
		},
		{
			id: 23,
			img: img1,
			star: star,
			name: "Ольга Немирова",
			num_id: "125-355-2",
			reviews:
				"Рекомендую всем и всегда эту замечательную компанию так как мне удалось похудеть на целых 5 кг благодаря тому, что я поменяла свое питание. Если хочешь так же обязательно свяжись с специалистом и он тебя проконсультирует...",
		},

		{
			id: 24,
			img: img,
			star: star,
			name: "Станислав Вербитский",
			num_id: "125-355-1",
			reviews:
				"Очень доволен, что случайно наткнулся на сайт этой компании. Уже как пол года заказываю программу сбалансированого питания, которую помогли мне подобрать специалисты компании. Стал замечать, что появилось больше...",
		},
		{
			id: 25,
			img: img1,
			star: star,
			name: "Ольга Немирова",
			num_id: "125-355-2",
			reviews:
				"Рекомендую всем и всегда эту замечательную компанию так как мне удалось похудеть на целых 5 кг благодаря тому, что я поменяла свое питание. Если хочешь так же обязательно свяжись с специалистом и он тебя проконсультирует...",
		},
	];
	
	const slideBtn = [
		{
			id: 0,
			class1: "active",
		},
		{
			id: 1,
			class1: "",
		},
		{
			id: 2,
			class1: "",
		},
		{
			id: 3,
			class1: "",
		},
		{
			id: 4,
			class1: "",
		},
	];

	const [height, setHeight] = useState(null);
	const [height1, setHeight1] = useState(null);
	const [height2, setHeight2] = useState(null);
	const [y, setY] = useState(0);
	const [y1, setY1] = useState(0);
	const [y2, setY2] = useState(0);
	const sliderL = 100 * sliderArr.length + "%";
	const ref = useRef(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	useEffect(() => {
		setHeight(ref.current.clientHeight);
		setHeight1(ref1.current.clientHeight);
		setHeight2(ref2.current.clientHeight);
	}, []);
	const changeSlide = (e) => {
		e.preventDefault();
		const sliderId = e.target.getAttribute(`data-slide-to`);
		const dots = document.querySelectorAll(".rev-slider-indicators li");
		dots.forEach((dot) => (dot.className = "inActive"));
		dots[sliderId].className = "active";
		setY({
			y: +height * sliderId,
		});
		setY1({
			y1: +height1 * sliderId,
		});
		setY2({
			y2: +height2 * sliderId,
		});
	};
	return (
		<div className='reviews-slider' id='example'>
			<div className='rev-slider-wrap1'>
				<div
					className='rev-slider-inner1'
					style={{ height: sliderL, transform: `translateY(-${y1.y1}px)` }}>
					{sliderArr1.map(({ id, name, img, star, num_id, reviews }, index) => {
						return (
							<div
								className='rev-container-it1'
								key={`it1 + ${id}`}
								style={{ height: height1 }}
								ref={ref1}>
								<div className='rev-container1'>
									<div className='rev-z1'>
										<img src={img} alt='' />
										<div className='rev-name1'>
											{name}<br/> <span> {num_id}</span>
										</div>
										<div className='rev-star1'>
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
										</div>
									</div>
									<div className='rev-info1'>{reviews}</div>
									<div className='rev-text1'>Читать полностью</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='rev-slider-wrap'>
				<div
					className='rev-slider-inner'
					style={{ height: sliderL, transform: `translateY(-${y.y}px)` }}>
					{sliderArr.map(({ id, name, img, star, num_id, reviews }, index) => {
						return (
							<div
								className='rev-container-it'
								key={`it + ${id}`}
								style={{ height: height }}
								ref={ref}>
								<div className='rev-container '>
									<div className='rev-z'>
										<img src={img} alt='' />
										<div className='rev-name'>
											{name}
											<br /> <span> {num_id}</span>
										</div>
										<div className='rev-star'>
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
										</div>
									</div>
									<div className='rev-info'>{reviews}</div>
									<div className='rev-text'>Читать полностью</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='rev-slider-wrap2'>
				<div
					className='rev-slider-inner2'
					style={{ height: sliderL, transform: `translateY(-${y2.y2}px)` }}>
					{sliderArr2.map(({ id, name, img, star, num_id, reviews }, index) => {
						return (
							<div
								className='rev-container-it2'
								key={`it2 + ${id}`}
								ref={ref2}
								style={{ height: height2 }}>
								<div className='rev-container2 '>
									<div className='rev-z2'>
										<img src={img} alt='' />
										<div className='rev-name2'>
											{name}
											<br /> <span> {num_id}</span>
										</div>
										<div className='rev-star2'>
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
											<img src={star} alt='' />
										</div>
									</div>
									<div className='rev-info2'>{reviews}</div>
									<div className='rev-text2'>Читать полностью</div>
									<div />
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<ol className='rev-slider-indicators'>
				{slideBtn.map(({ id, class1 }) => {
					return (
						<li
							key={`btn +${id}`}
							className={class1}
							data-slide-to={id}
							onClick={(e) => changeSlide(e)}></li>
					);
				})}
			</ol>
		</div>
	);
}
export default Slid;
