// react-router-dom
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import PropTypes from "prop-types";
import {lazy, Suspense} from "react";
// components
// import {MainPage, ComicsPage, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner.js";

// react lazy imports
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage.js'));


const App = () => {
	return (
		<Router>
			<div className="app">
				<Suspense fallback={<Spinner/>}>
					<AppHeader/>
					<Routes>
						<>
							<Route
								end
								path="/comics"
								element={<ComicsPage/>}
							/>
							<Route
								end
								path="/comics/:comicId"
								element={<SingleComicPage/>}
							/>
							<Route
								end
								path="/"
								element={<MainPage/>}
							/>
							<Route path="*" element={<Page404/>}/>
						</>
					</Routes>
				</Suspense>
			</div>
		</Router>
	)

}

App.propType = {
	onCharSelected: PropTypes.func,
}

export default App;