import React, { Component } from "react";
import "./contacts.scss";
import {
	Nav,
	Phone,
	Youtube,
	Tiktok,
	Telegram,
	Instagram,
	HoverYoutube,
	HoverTiktok,
	HoverTelegram,
	HoverInstagram,
	Email,
} from "../../svg/";

import img1 from "../../img/cnts1.jpg";
import img2 from "../../img/cnts2.jpg";
import img3 from "../../img/cnts3.jpg";

export default class Contacts extends Component {
	state = {
		yt: false,
		tik: false,
		tel: false,
		inst: false,
	};
	
	render() {
		return (
			<div className='contacts' id='contact'>
				<div className='container'>
					<div className='contacts__container'>
						<div className='contacts__info'>
							<h1>Наши контакты</h1>
							<div className='contacts__adr conts'>
								<div className='cont__img'>
									<Nav />
								</div>
								<h1>
									г.Киев ул. Сагайдачного 102
									<br /> Пн-Сб 8:00 - 20:00
									<p>главный офис</p>
								</h1>
							</div>
							<div className='contacts__phone conts'>
								<div className='cont__img'>
									<Phone />
								</div>
								<h1>+48(485) 125 147 555</h1>
							</div>
							<div className='contacts__phon conts'>
								<div className='cont__img'>
									<Phone />
								</div>
								<h1>
									+48(485) 125 147 555
									<p>
										контактый центр по вопросам подбора
										<br />
										программ питания
									</p>
								</h1>
							</div>
							<div className='contacts__email conts'>
								<div className='cont__img'>
									<Email />
								</div>
								<h1>
									healthy-food@gmail.com
									<p>
										електронный адрес по вопросам
										<br /> сотрудничества и рекламы
									</p>
								</h1>
							</div>
						</div>
						<div className='contacts__media'>
							<div className='contacts__prew'>
								<h1>Присоединяйтесь к нам!</h1>
								<p>
									Мы активно ведем наши социальные сети в которых вы можете
									<br />
									найти для себя много полезной и новой информации о здоровом
									<br />
									питании и о здоровом образе жизни
								</p>
							</div>
							<div className='contacts__inst'>
								<h1>Мы в instagram</h1>
								<div className='contacts__icons'>
									<span
										onMouseEnter={() => this.setState({ yt: true })}
										onMouseLeave={() => this.setState({ yt: false })}>
										{this.state.yt ? <HoverYoutube /> : <Youtube />}
									</span>
									<span
										onMouseEnter={() => this.setState({ tik: true })}
										onMouseLeave={() => this.setState({ tik: false })}>
										{this.state.tik ? <HoverTiktok /> : <Tiktok />}
									</span>
									<span
										onMouseEnter={() => this.setState({ tel: true })}
										onMouseLeave={() => this.setState({ tel: false })}>
										{this.state.tel ? <HoverTelegram /> : <Telegram />}
									</span>
									<span
										onMouseEnter={() => this.setState({ inst: true })}
										onMouseLeave={() => this.setState({ inst: false })}>
										{this.state.inst ? <HoverInstagram /> : <Instagram />}
									</span>
								</div>
								<div className='contacts__img'>
									<img src={img1} alt='inst' />
									<img src={img2} alt='inst' />
									<img src={img3} alt='inst' />
									<img src={img1} alt='inst' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
