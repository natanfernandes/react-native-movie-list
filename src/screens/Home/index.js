import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import {addMovie} from '../../state/actions';

const Wrapper = styled.View`
  padding: 15px;
`;

const Header = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const ListWrapper = styled.SafeAreaView`
  padding: 0px;
`;
const List = styled.FlatList`
  padding: 5px;
  height: 100%;
`;
const ListItem = styled.View`
  padding: 5px;
  background: #fff;
  height: 150px;
  width: 95%;
  border-radius: 14px;
  margin:5px;
  margin-right:10px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;
const ListItemImageContainer = styled.View`
  padding: 5px;
  background: red;
  height: 100%;
  width: 30%;
  margin:10px;
  position: absolute;
  bottom: 10px;
  border-radius: 5px;
`;
const ListItemContainer = styled.View`
  padding: 5px;
  height: 100%;
  width: 70%;
  position: absolute;
  right: 0;
`;
const ListItemTitle = styled.Text`
  font-size: 20px;
  font-weight: normal;
`;
const ListItemYear = styled.Text`
  font-size: 17px;
  font-weight: normal;
`;
const Home = (props) => {
  console.log(props)
  
  const renderItem = ({ item }) => {

  return (
    <ListItem>
      <ListItemImageContainer></ListItemImageContainer>
      <ListItemContainer>
        <ListItemTitle>{item.movie.title}</ListItemTitle>
        <ListItemYear>{item.movie.year}</ListItemYear>
      </ListItemContainer>
    </ListItem>
  )};

  return (
    <Wrapper>
        <Header>Filmes</Header>
        <Button onPress={() => props.addMovie()} title="asdas"></Button>
        <ListWrapper>
            <List 
              data={props.movies.defaultMovies}
              renderItem={renderItem}
              keyExtractor={item => item.id}/>
        </ListWrapper>
    </Wrapper>
  );
}


const mapStateToProps = (state) => {
  const { movies } = state
  return { movies }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: () => dispatch(addMovie())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);