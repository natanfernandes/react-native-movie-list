import { combineReducers } from 'redux';

const MOVIES_STATE = {
    popularMovies: {
        data:[],
        isLoading: false,
        error: false,
    },
    mostWatchedMovies: {
        data:[],
        isLoading: false,
        error: false,
    },
}

const moviesReducer = (state = MOVIES_STATE, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'GET_POPULAR_MOVIE_PENDING':
            newState.popularMovies.isLoading = true
            break;
        case 'GET_POPULAR_MOVIE_FULFILLED':
            if(!action.payload.error){
                newState.popularMovies.data = action.payload.data
                newState.popularMovies.isLoading = false
            } else {
                newState.popularMovies.error = true
            }
            break;

        case 'GET_MOST_WATCHED_MOVIE_PENDING':
            newState.mostWatchedMovies.isLoading = true
            break;
        case 'GET_MOST_WATCHED_MOVIE_FULFILLED':
            if(!action.payload.error){
                newState.mostWatchedMovies.data = action.payload.data
                newState.mostWatchedMovies.isLoading = false
            } else {
                newState.mostWatchedMovies.error = true
            }
            break;
            
        default:
            return newState
    }
    return newState;
}

export default combineReducers({
    movies: moviesReducer,
});