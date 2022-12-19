import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets/images/icons/icons";
import "./nav.css";
export const Nav = () => {
	return (
		<div class='navigation position-fixed h-100 '>
			<Link className='logo d-flex justify-content-center' to='/'>
				<Logo />
			</Link>
			<nav className='site-nav'>
				<ul className='list-unstyled'>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "home-active nav-bg" : "nav-bg  home"
							}
							to='/'
						></NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "discount-active nav-bg" : "nav-bg  discount"
							}
							to='/discount'
						></NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "grahp-active nav-bg" : "nav-bg grahp"
							}
							to='/grahp'
						></NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "message-active nav-bg" : "nav-bg message"
							}
							to='/message'
						></NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "setting-active nav-bg" : "nav-bg setting"
							}
							to='/setting'
						>
							<div className='discount'></div>
						</NavLink>
					</li>
					<li>
						<Link className="log-out nav-bg" to='/'>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
