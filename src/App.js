import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import { Home } from "./pages/Home/Home";
import { Nav } from "./components/Nav";
export const App = () => {
	return (
		<div className='site-wrapper'>
			<Nav />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>

				<div>
					<Routes>
						<Route
							path='/'
							element={<h2 className='text-white'>Hot Dishes</h2>}
						/>
            
						<Route
							path='/colddishes'
							element={
								<div>
									<Home />
									<h2 className='text-white'>
										Sorry, we currently do not have this type of food
									</h2>
								</div>
							}
						/>
            
						<Route
							path='/soup'
							element={
								<div>
									<Home />
									<h2 className='text-white'>
										Sorry, we currently do not have this type of food
									</h2>
								</div>
							}
						/>
						<Route
							path='/grill'
							element={
								<div>
									<Home />
									<h2 className='text-white'>
										Sorry, we currently do not have this type of food
									</h2>
								</div>
							}
						/>
						<Route
							path='/appetizer'
							element={
								<div>
									<Home />
									<h2 className='text-white'>
										Sorry, we currently do not have this type of food
									</h2>
								</div>
							}
						/>
						<Route
							path='/dessert'
							element={
								<div>
									<Home />
									<h2 className='text-white'>
										Sorry, we currently do not have this type of food
									</h2>
								</div>
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};
