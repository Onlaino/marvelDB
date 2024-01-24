// hooks
import {useState} from "react";

// components
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';


import PropTypes from "prop-types";


const App = () => {
	const [selectedChar, setChar] = useState(null);


	const onCharSelected = (id) => {
		setChar(id);
	}

	return (
		<div className="app">
			<AppHeader/>
			<main>
				{/*<ErrorBoundary>*/}
				{/*	<RandomChar/>*/}
				{/*</ErrorBoundary>*/}
				{/*<div className="char__content">*/}
				{/*	<ErrorBoundary>*/}
				{/*		<CharList onCharSelected={onCharSelected}/>*/}
				{/*	</ErrorBoundary>*/}
				{/*	<ErrorBoundary>*/}
				{/*		<CharInfo charId={selectedChar}/>*/}
				{/*	</ErrorBoundary>*/}
				{/*</div>*/}
				<ComicsList/>
				<img className="bg-decoration" src={decoration} alt="vision"/>
			</main>
		</div>
	)

}

App.propType = {
	onCharSelected: PropTypes.func,
}

export default App;