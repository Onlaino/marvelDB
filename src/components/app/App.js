// react-router-dom
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// components
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";

import PropTypes from "prop-types";


const App = () => {
	return (
		<Router>
			<div className="app">
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
			</div>
		</Router>
	)

}

App.propType = {
	onCharSelected: PropTypes.func,
}

export default App;