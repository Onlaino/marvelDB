import useHttp from "../hooks/http.hook";

const useMarvelService = () =>  {
	const {loading, error, request, clearError} = useHttp();

	const _API_KEY = 'apikey=9159a4147f2e9f93ec632c7122e37b54';
	const _API_BASE = 'https://gateway.marvel.com:443/v1/public/';
	const _baseOffset = 210;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res =  await request(`${_API_BASE}characters?limit=9&offset=${offset}&${_API_KEY}`);
		return res.data.results.map(_transformCharacter);
	}

	const getCharacter = async (id) => {
		const res = await request(`${_API_BASE}characters/${id}?&${_API_KEY}`);
		return _transformCharacter(res.data.results[0]);
	}

	const getAllComics = async (offset = 0) => {
		const res =  await request(`${_API_BASE}comics?offset=${offset}&${_API_KEY}`);
		return res.data.results.map(_transformComics);
	}

	const getComic = async (id) => {
		const res = await request(`${_API_BASE}comics/${id}?${_API_KEY}`);
		return _transformComics(res.data.results[0]);
	};

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

	const _transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].wiki,
			comics: char.comics.items,
		}
	}

	return {
		loading,
		error,
		getAllCharacters,
		getCharacter,
		getAllComics,
		clearError,
		getComic
	}

}

export default useMarvelService;