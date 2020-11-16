import React from "react";
import "./reviews.scss";
import Slid from "./slider";
import { useForm } from "react-hook-form";
function Reviews() {
	const { handleSubmit, register } = useForm();
	const onSubmit = (data, e) => {
		console.log(data, e);
		e.preventDefault();
		const modal = document.querySelector(".reviews__enter-buy");
		const cont = document.querySelector(".reviews");
		const formClear = document.querySelectorAll("input");
		const star = document.querySelectorAll(".btn1 p");
		if (e.target) {
			modal.style.display = "block";
			cont.style.filter = "blur(3px)";
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
			formClear.forEach((item) => {
				item.value = "";
			});
			for (let i = 0; i < star.length; i++) {
				star[i].classList.remove("active");
			}
		}
	};
	const star = (e) => {
		e.preventDefault();
		const star = document.querySelectorAll(".btn1 p");
		for (let i = 0; i < star.length; i++) {
			if (e.target === star[i]) {
				if (e.target.classList.contains("active")) {
					e.target.classList.remove("active");
				} else {
					e.target.className = "active";
				}
			}
		}
	};
	return (
		<div className='reviews' id='reviews'>
			<div className='container'>
				<div className='reviews__container'>
					<div className='reviews__form'>
						<h1>Отзывы о нашей компании</h1>
						<span>Поделись отзывом о нашей компании</span>
						<p>
							Для нашей компании важно ваше мнение, мы прислушиваемся к<br />
							конструктивной критике и исправляем ошибки есть такии имеются.
							<br />
							Оставить свой отзыв можете заполнив эту простую форму.
						</p>
						<form className='form__container' onSubmit={handleSubmit(onSubmit)}>
							<div className='input__left'>
								<input
									placeholder='Ваше имя'
									required
									id='name'
									className='btn1'
									name='name'
									ref={register({
										validate: (value) => value !== "admin" || "Nice try!",
									})}
								/>

								<input
									placeholder='Номер заказа'
									id='number'
									className='btn1 mt15'
									name='number'
									required
									ref={register({
										pattern: {
											value: /\D/g,
										},
									})}
								/>
								<div className='btn1 mt15' onClick={(e) => star(e)}>
									<p className=''></p>
									<p className=''></p>
									<p className=''></p>
									<p className=''></p>
									<p className=''></p>
								</div>

								<input
									placeholder='Отзыв'
									id='review'
									className='review'
									required
									name='review'
									ref={register({
										validate: (value) => value !== "admin" || "Nice try!",
									})}
								/>
							</div>
							<div className='input__right'>
								<label>
									<h1>Фото +</h1>
									<input
										type='file'
										id='photo'
										className='photo'
										name='photo'
										ref={register}></input>
								</label>
							</div>
							<button type='submit' className='enter__reviews'>
								Оставить отзыв
							</button>
						</form>
					</div>
					<div className='reviews__slider'>
						<Slid />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Reviews;
