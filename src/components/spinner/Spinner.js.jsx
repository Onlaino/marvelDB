const Spinner = () => {
	return (
		<div className="spinner">
			<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
				 style={{margin: "auto", background: "white", display: "block", shapeRendering: "auto"}}
				 width="197px" height="197px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<circle cx="50" cy="50" r="31" strokeWidth="10" stroke="#912623"
						strokeDasharray="48.69468613064179 48.69468613064179" fill="none" strokeLinecap="round">
					<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
									  dur="2.4390243902439024s" keyTimes="0;1"
									  values="0 50 50;360 50 50"></animateTransform>
				</circle>
			</svg>
		</div>
	)
}

export default Spinner;

