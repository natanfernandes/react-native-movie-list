export const addMovie = () => {
    return {
        type:'ADD_MOVIE',
        payload: {
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
    }
}