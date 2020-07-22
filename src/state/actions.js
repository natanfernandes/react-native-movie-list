import makeRequest from '../api/requester';

export const getPopularMovies =  () => {
    const response =  makeRequest('GET','/movies/popular');
    console.log(response)
    return {
        type:'GET_POPULAR_MOVIE',
        payload: response
    }
}

export const getMostWatchedMovies =  () => {
    const response =  makeRequest('GET','/movies/watched/weekly');
    console.log(response)
    return {
        type:'GET_MOST_WATCHED_MOVIE',
        payload: response
    }
}