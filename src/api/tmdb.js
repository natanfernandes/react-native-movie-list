import axios from 'axios';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = 'da23befdaa8e39535955c0c07d0c2a07';

const tmdbApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

const getMoviePoster = async (movieId) => {
    const GET_MOVIE_POST_URL = API_URL+'movie/'+movieId+'/images?api_key='+API_KEY+'&language=en-US&include_image_language=en';
    try {
        const response = await tmdbApi.get(GET_MOVIE_POST_URL);
        const path = response.data.posters[0].file_path;
        return {
            data:IMAGE_PATH+path,
            error: false,
        }

    } catch (error) {
        return {
            data: error,
            error: true,
        }
    }
}
export default getMoviePoster;