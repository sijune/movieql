import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
    },
};

export default resolvers;

//Resolver는 DB나 Api에 갈 수 있다.