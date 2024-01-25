// react-router-dom
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// components
import {MainPage, ComicsPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";

import PropTypes from "prop-types";


const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<Switch>
					<main>
						<Route exact path="/">
							<MainPage/>
						</Route>
						<Route exact path="/comics">
							<ComicsPage/>
						</Route>
					</main>
				</Switch>
			</div>
		</Router>
	)

}

App.propType = {
	onCharSelected: PropTypes.func,
}

export default App;