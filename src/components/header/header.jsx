import React, { Component } from "react";
import Burger from '../burger';
import "./header.scss";
import {
	Logo,
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
} from "../../svg/";

export default class Header extends Component {
	state = {
		yt: false,
		tik: false,
		tel: false,
		inst: false,
	};

	render() {
		return (
			<>
				<div className='header' id='main'>
					<div className='logo__container'>
						<div className='logo'>
							<Logo />
						</div>
					</div>
					<div className='menu__container'>
						<div className='contact__container'>
							<div className='contact__adress'>
								<h1>
									<Nav />
									г.Киев ул. Сагайдачного 102
								</h1>
							</div>
							<div className='contact__phone ml_25'>
								<h1>
									<Phone />
									+48(485) 125 147 555
								</h1>
							</div>
							<div className='contact__phone ml_25'>
								<h1>
									<Phone />
									+48(485) 125 147 555
								</h1>
							</div>
						</div>
						<Burger/>
					</div>
					<div className='nav__container'>
						<div className='nav__icon'>
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
					</div>
				</div>
			</>
		);
	}
}
