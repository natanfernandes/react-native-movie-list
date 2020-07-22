import { combineReducers } from 'redux';

const MOVIES_STATE = {
    defaultMovies : [
        {
          watchers: 21,
          movie: {
            title: 'TRON: Legacy',
            year: 2010,
            ids: {
              trakt: 1,
              slug: 'tron-legacy-2010',
              imdb: 'tt1104001',
              tmdb: 20526
            }
          }
        },
        {
            watchers: 21,
            movie: {
              title: 'TRON: Legacy',
              year: 2010,
              ids: {
                trakt: 1,
                slug: 'tron-legacy-2010',
                imdb: 'tt1104001',
                tmdb: 20526
              }
            }
          }
      ],
      movies : []
}

const moviesReducer = (state = MOVIES_STATE, action) => {
    console.log(action)
    const newState = {...state}
    switch (action.type) {
        case 'ADD_MOVIE':
            console.log(state.movies)
            newState.defaultMovies.push(action.payload)
            break;
        default:
          return newState
      }
      return newState;
}
export default combineReducers({
    movies: moviesReducer,
});