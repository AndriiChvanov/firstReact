import React, { useState, useEffect, useRef } from "react";
import "./slider.scss";
import slide from "../../../img/12.jpg";
import slide1 from "../../../img/13.jpg";
import slide2 from "../../../img/15.jpg";
import play from "../../../img/play.png";
import playS from "../../../img/playHover.png";
function Slider() {
	const sliderArr = [
		{
			id: 1,
			slide: 0,
			img: slide,
			play: play,
			info: "Как наши специалисты выращивают эко продукты",
		},
		{
			id: 2,
			slide: 1,
			img: slide1,
			play: play,
			info: "10 причин заказать рацион питания",
		},
		{
			id: 3,
			slide: 2,
			img: slide2,
			play: play,
			info: "Почему важно питаться правильно",
		},
	];
	const sliderArr1 = [
		{
			id: 12,
			slide: 1,
			img: slide1,
			play: playS,
		},
		{
			id: 13,
			slide: 2,
			img: slide2,
			play: playS,
		},
		{
			id: 11,
			slide: 0,
			img: slide,
			play: playS,
		},
	];
	const sliderArr2 = [
		{
			id: 23,
			slide: 2,
			img: slide2,
			play: playS,
		},
		{
			id: 21,
			slide: 0,
			img: slide,
			play: playS,
		},
		{
			id: 22,
			slide: 1,
			img: slide1,
			play: playS,
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
	];

	const [width, setWidth] = useState(null);
	const [width1, setWidth1] = useState(null);
	const [width2, setWidth2] = useState(null);
	const [x, setX] = useState(0);
	const [x1, setX1] = useState(0);
	const [x2, setX2] = useState(0);
	const sliderL = 100 * sliderArr.length + "%";
	const ref = useRef(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	useEffect(() => {
		setWidth(ref.current.clientWidth);
		setWidth1(ref1.current.clientWidth);
		setWidth2(ref2.current.clientWidth);
	}, []);
	const changeSlide = (e) => {
		e.preventDefault();
		const sliderId = e.target.getAttribute(`data-slide-to`);
		const dots = document.querySelectorAll(".company-slider-indicators li");
		dots.forEach((dot) => (dot.className = "inActive"));
		dots[sliderId].className = "active";
		setX({
			x: +width * sliderId,
		});
		setX1({
			x1: +width1 * sliderId,
		});
		setX2({
			x2: +width2 * sliderId,
		});
	};
	const changeSlide2 = (e) => {
		e.preventDefault();
		const sliderId = e.target.getAttribute(`data-slide-to`);
		const dots = document.querySelectorAll(".company-slider-indicators li");
		dots.forEach((dot) => (dot.className = "inActive"));
		dots[sliderId].className = "active";
		setX({
			x: +width * sliderId,
		});
		setX1({
			x1: +width1 * sliderId,
		});
		setX2({
			x2: +width2 * sliderId,
		});
	};
	return (
		<div className='company-slider' id='example'>
			<div className='company-slider-row'>
				<div className='company-slider-wrap'>
					<div
						className='company-slider-inner'
						style={{ width: sliderL, transform: `translateX(-${x.x}px)` }}>
						{sliderArr.map(({ id, img, play, info }) => {
							return (
								<div
									className='company-container-it'
									key={`it + ${id}`}
									style={{ width: width }}
									ref={ref}>
									<div className='company-container'>
										<div className='company-slide'>
											<img src={img} alt='slide' />
											<div className='info'>
												<img src={play} alt='play' />
												<h1>{info}</h1>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='company-slider-wrap1'>
				<div
					className='company-slider-inner1'
					style={{ width: sliderL, transform: `translateX(-${x1.x1}px)` }}>
					{sliderArr1.map(({ id,slide, img, play }) => {
						return (
							<div
								className='company-container-it1'
								key={`it1 + ${id}`}
								style={{ width: width1 }}
								ref={ref1}>
								<div className='company-container1'>
									<div className='company-slide1'>
										<img src={img} alt='slide' />
										<div className='info1'>
											<img
												src={play}
												alt='play'
												data-slide-to={slide}
												onClick={(e) => changeSlide2(e)}
											/>
										</div>
									</div>
								</div>
							</div>
						);
						
					})}
				</div>
			</div>

			<div className='company-slider-wrap2'>
				<div
					className='company-slider-inner2'
					style={{ width: sliderL, transform: `translateX(-${x2.x2}px)` }}>
					{sliderArr2.map(({ id,slide, img, play }) => {
						return (
							<div
								className='company-container-it2'
								key={`it2 + ${id}`}
								ref={ref2}
								style={{ width: width2 }}>
								<div className='company-container2'>
									<div className='company-slide2'>
										<img src={img} alt='slide' />
										<div className='info2'>
											<img
												src={play}
												alt='play'
												data-slide-to={slide}
												onClick={(e) => changeSlide2(e)}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<ol className='company-slider-indicators'>
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
export default Slider;
