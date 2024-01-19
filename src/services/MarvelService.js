class MarvelService {
	#API_KEY = 'apikey=9159a4147f2e9f93ec632c7122e37b54';
	#API_BASE = 'https://gateway.marvel.com:443/v1/public/';

	getResource = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}
		return await res.json();
	}

	getAllCharacters = async () => {
		const res =  await this.getResource(`${this.#API_BASE}characters?limit=9&offset=210&${this.#API_KEY}`);
		return res.data.results.map(this._transformCharacter);
	}

	getCharacter = async (id) => {
		const res = await this.getResource(`${this.#API_BASE}characters/${id}?&${this.#API_KEY}`);
		return this._transformCharacter(res.data.results[0]);
	}

	_transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].wiki,
		}
	}

}

export default MarvelService;