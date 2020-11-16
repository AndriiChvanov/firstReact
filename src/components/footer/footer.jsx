import React, { Component } from "react";
import { Link } from "react-scroll";

import "./footer.scss";
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
	Logo
} from "../../svg/";
export default class Footer extends Component {
	state = {
		yt: false,
		tik: false,
		tel: false,
		inst: false,
	};
	render() {
		return (
			<div className='footer'>
				<div className='container'>
					<div className='footer__container'>
						<div className='footer__logo'>
							<Logo />
						</div>
						<div className='footer__info'>
							<div className='footer__adr foot'>
								<div className='footer__img'>
									<Nav />
								</div>
								<h1>г.Киев ул. Сагайдачного 102</h1>
							</div>
							<div className='footer__phone foot'>
								<div className='footer__img'>
									<Phone />
								</div>
								<h1>+48(485) 125 147 555</h1>
							</div>
							<div className='footer__phon foot'>
								<div className='footer__img'>
									<Phone />
								</div>
								<h1>+48(485) 125 147 555</h1>
							</div>
							<div className='footer__email foot'>
								<div className='footer__img'>
									<Email />
								</div>
								<h1>healthy-food@gmail.com</h1>
							</div>
						</div>
						<ul className='footer__menu foot-li'>
							<Link
								activeClass='active'
								to='main'
								spy={true}
								smooth={true}
								duration={500}>
								<li>Главная</li>
							</Link>
							<Link
								activeClass='active'
								to='o nas'
								spy={true}
								smooth={true}
								offset={-10}
								duration={500}>
								<li>О нас</li>
							</Link>
							<Link
								activeClass='active'
								to='program'
								offset={-10}
								spy={true}
								smooth={true}
								duration={500}>
								<li>Программы питания</li>
							</Link>
							<Link
								activeClass='active'
								to='reviews'
								spy={true}
								offset={60}
								smooth={true}
								duration={500}>
								<li>Отзывы</li>
							</Link>
							<Link
								activeClass='active'
								to='contact'
								spy={true}
								smooth={true}
								offset={160}
								duration={500}>
								<li>Контакты</li>
							</Link>
						</ul>
						<ul className='footer__url foot-li fl'>
							<li>Полезные ссылки</li>
							<li> Как правильно выбирать программу</li>
							<li>10 витаминов для жизни</li>
							<li>Секреты вашего здоровья</li>
						</ul>
					</div>
				</div>
				<div className='footer__social'>
					<div className='footer__social-btn'>
						<div className='footer__icons'>
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
						<div className='footer__name'>
							<h1>©Healthy food</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
