// react-router-dom
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//animate
import  {motion, AnimatePresence} from "framer-motion";

import PropTypes from "prop-types";
import {lazy, Suspense} from "react";
// components
// import {MainPage, ComicsPage, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner.js";
import AnimationLayout from '../animationLayout/AnimationLayout'
import {pageVariants, pageTransition} from "../animationLayout/AnimationLayout";


// react lazy imports
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage.js'));



const App = () => {
	return (
		<AnimatePresence>
			<Router>
				<motion.div
					className="app"
					initial="initial"
					animate="in"
					exit="out"
					variants={pageVariants}
					transition={pageTransition}>
					<Suspense fallback={<Spinner/>}>
						<AppHeader/>
						<Routes>
							<Route element={<AnimationLayout />}>
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
							</Route>
						</Routes>
					</Suspense>
				</motion.div>
			</Router>
		</AnimatePresence>
	)

}

App.propType = {
	onCharSelected: PropTypes.func,
}

export default App;