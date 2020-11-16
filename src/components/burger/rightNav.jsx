import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { HoverEllipse } from "../../svg/";
const Ul = styled.ul`
	.menu {
		margin-top: -40px;
		z-index: 1;
		position: relative;

		ul {
			padding-top: 5px;
			text-align: left;
			margin-top: 50px;
			li {
				text-align: left;
				display: inline-table;
				font-family: "RobotoRegular";
				font-size: 16px;
				line-height: 143.69%;
				color: #ffffff;
				opacity: 0.6;
				cursor: pointer;
				.centr {
					text-align: center;
					display: none;
				}
				&:hover {
					opacity: 1;
					.centr {
						text-align: center;
						display: block;
					}
				}
			}
		}
	}

	@media screen and (max-device-width: 393px) {
		margin-left:  667px;
		position: relative;
		z-index: 0;
		flex-flow: column nowrap;
		background: #2f2b30;
		margin-top: 0;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		height: 202px;
		width: 158px; 
		text-align: center;
		transition: transform 0.3s ease-in-out;
		.menu {
			ul {
				margin-top: 0px;
				li {
					color: #fff;
				}
			}
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<div className='menu'>
				<ul>
					<Link
						activeClass='active'
						to='main'
						spy={true}
						smooth={true}
						duration={500}>
						<li>
							Главная
							<div className='centr'>
								<HoverEllipse />
							</div>
						</li>
					</Link>
					<Link
						activeClass='active'
						to='o nas'
						spy={true}
						smooth={true}
						offset={-10}
						duration={500}>
						<li>
							О нас
							<div className='centr'>
								<HoverEllipse />
							</div>
						</li>
					</Link>
					<Link
						activeClass='active'
						to='program'
						spy={true}
						smooth={true}
						offset={-10}
						duration={500}>
						<li>
							Программа питания
							<div className='centr'>
								<HoverEllipse />
							</div>
						</li>
					</Link>
					<Link
						activeClass='active'
						to='reviews'
						spy={true}
						offset={40}
						smooth={true}
						duration={500}>
						<li>
							Отзывы
							<div className='centr'>
								<HoverEllipse />
							</div>
						</li>
					</Link>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={160}
						duration={500}>
						<li>
							Контакты
							<div className='centr'>
								<HoverEllipse />
							</div>
						</li>
					</Link>
				</ul>
			</div>
		</Ul>
	);
};

export default RightNav;
