import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`; // 영화리스트
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`; // 영화상세
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`; //영화추천

export const getMovies = async(limit, rating) => {
    const {
        data: {
            data: { movies },
        },
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minium_rating: rating,
        },
    });

    return movies;
};

export const getMovie = async(id) => {
    const {
        data: {
            data: { movie },
        },
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id,
        },
    });

    return movie;
};

export const getSuggestions = async(id) => {
    const {
        data: {
            data: { movies },
        },
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id,
        },
    });

    return movies;
};