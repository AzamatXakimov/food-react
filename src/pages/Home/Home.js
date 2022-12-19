import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./home.css";
export const Home = () => {
	return (
		<div className='main-wrapper'>
			<div className='main'>
				<div className='d-flex align-items-center justify-content-between form-wrapper'>
					<div>
						<h1 className='home-title'>Jaegar Resto</h1>
						<p className='home-desc'>Tuesday, 2 Feb 2021</p>
					</div>
					<form>
						<input
							className='home-input'
							type='text'
							placeholder='Search for food, coffe, etc..'
						/>
					</form>
				</div>
				<nav>
					<ul className='home-list list-unstyled d-flex align-items-center'>
						<li className='home-item position-relative'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "home-item-wrapper active" : "home-item-wrapper"
								}
								to='/'
							>
								Hot Dishes
								<span className='position-absolute home-item-line'></span>
							</NavLink>
						</li>
						<li className='home-item position-relative'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "home-item-wrapper active" : "home-item-wrapper"
								}
								to='/colddishes'
							>
								Cold Dishes
								<span className='position-absolute home-item-line'></span>
							</NavLink>
						</li>
						<li className='home-item position-relative'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "home-item-wrapper active" : "home-item-wrapper"
								}
								to='/soup'
							>
								Soup
								<span className='position-absolute home-item-line'></span>
							</NavLink>
						</li>
						<li className='home-item position-relative'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "home-item-wrapper active" : "home-item-wrapper"
								}
								to='/grill'
							>
								Grill
								<span className='position-absolute home-item-line'></span>
							</NavLink>
						</li>
						<li className='home-item position-relative'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "home-item-wrapper active" : "home-item-wrapper"
								}
								to='/appetizer'
							>
								Appetizer
								<span className='position-absolute home-item-line'></span>
							</NavLink>
						</li>
						<li className='home-item position-relative'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "home-item-wrapper active" : "home-item-wrapper"
								}
								to='/dessert'
							>
								Dessert
								<span className='position-absolute home-item-line'></span>
							</NavLink>
						</li>
					</ul>
				</nav>

	
			</div>
			<div className='order'></div>
		</div>
	);
};
