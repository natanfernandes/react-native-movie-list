import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native'
import {Wrapper, AppHeader, MoviesList, Loading, Error} from './components/index';
import { connect } from 'react-redux';
import { getPopularMovies, getMostWatchedMovies } from '../../state/actions';

const Home = (props) => {
  const { movies } = props
  const [selectedCategory, setSelectedCategory] = useState('popular');

  useEffect(() => {
    if(selectedCategory === 'popular'){
      props.getPopularMovies();
    } else{
      props.getMostWatchedMovies();
    }
  }, [selectedCategory])

  const renderMoviesList = () => {
    if(!movies.popularMovies.error && !movies.popularMovies.isLoading && selectedCategory === 'popular'){
      return (
        <MoviesList movies={movies.popularMovies}></MoviesList>
      )
    } else if(movies.popularMovies.isLoading){
      return (
        <Loading text="Carregando filmes populares..."></Loading>
      )
    } else if(movies.popularMovies.error && selectedCategory === 'popular'){
      return (
        <Error refreshMovies={() => props.getPopularMovies()}></Error>
      )
    }

    if(!movies.mostWatchedMovies.error && !movies.mostWatchedMovies.isLoading && selectedCategory === 'watched'){
      return (
        <MoviesList movies={movies.mostWatchedMovies} ></MoviesList>
      )
    } else if(movies.mostWatchedMovies.isLoading){
      return (
        <Loading text="Carregando filmes mais assistidos..."></Loading>
      )
    } else if(movies.mostWatchedMovies.error && selectedCategory === 'watched'){
      return (
        <Error refreshMovies={() => props.getMostWatchedMovies()}></Error>
      )
    }
  }

  return (
    <Wrapper>
      <AppHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></AppHeader>
      {renderMoviesList()}
    </Wrapper>
  );
}


const mapStateToProps = (state) => {
  const { movies } = state
  return { movies }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(getPopularMovies()),
    getMostWatchedMovies: () => dispatch(getMostWatchedMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);