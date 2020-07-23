import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import getMoviePoster from '../../../api/tmdb';
import makeRequest from '../../../api/requester';

export const Wrapper = styled.SafeAreaView`
  padding: 15px;
  background-color: #141A31;
  height:100%;
  width:100%;
`;

const Header = styled.View`
    padding: 5px;
`;
const HeaderText = styled.Text`
  font-size: 30px;
  font-family:'Pacifico-Regular';
  color:white;
`;
const HeaderTab = styled.View`
  overflow: hidden;
  border-radius: 5px;
  background-color: #f1f1f1;
  flex-direction: row;
`;
const HeaderTabButton = styled.TouchableOpacity`
  padding: 14px 16px;
  font-size: 17px;
  width: 50%;
  text-align: center;
  background-color: ${props => props.selected ? '#0AAEFA' : '#353B50' };
`;
const HeaderTabButtonContent = styled.Text`
  text-align: center;
  color:white;
  font-family:'Nunito-BoldItalic';
`;

export const AppHeader = (props) => {
    return (
        <Header>
            <HeaderText>MOVI3</HeaderText>
            <HeaderTab>
                <HeaderTabButton selected={props.selectedCategory == 'popular' ? true : false} onPress={() => props.setSelectedCategory('popular')}><HeaderTabButtonContent>Populares</HeaderTabButtonContent></HeaderTabButton>
                <HeaderTabButton selected={props.selectedCategory == 'watched' ? true : false} onPress={() => props.setSelectedCategory('watched')}><HeaderTabButtonContent>Mais assistidos</HeaderTabButtonContent></HeaderTabButton>
            </HeaderTab>
        </Header>
    )
}

const List = styled.FlatList`
    padding:0px;
`;
const ListContainer = styled.SafeAreaView`
    padding:0px;
`;
const ListItem = styled.View`
  padding: 5px;
  background: #2E3449;
  height: 110px;
  width: 97%;
  border-radius: 5px;
  margin:5px;
  margin-right:10px;
  margin-top: 45px;
`;
const ListItemImageContainer = styled.View`
  height: 130px;
  width: 30%;
  margin:10px;
  position: absolute;
  bottom: 5px;
`;
const ListItemImage = styled.Image`
    width:100%;
    height:100%;
    border-radius: 5px;
    padding:5px;
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
  color:white;
  font-family: 'Nunito-SemiBold';
`;
const ListItemYear = styled.Text`
  font-size: 17px;
  font-weight: normal;
  color:white;
  font-family: 'Nunito-Light';
`;
const ListItemRatingContainer = styled.View`
  width: 100%;
  flex-direction:row;
`;
const ListItemRating = styled.Text`
  font-size: 18px;
  color:yellow;
  font-family: 'Nunito-SemiBold';
  padding-right:5px;
`;
const ListItemRatingVotes = styled.Text`
  font-size: 15px;
  font-weight: normal;
  color:gray;
  font-family: 'Nunito-Light';
`;

const MovieListItem = (props) => {
    const [poster,setPoster] = useState(null);
    const [rating,setRating] = useState(null);

    useEffect(() => {
        const getThisMoviePoster = async () => {
            const response = await getMoviePoster(props.item.ids.tmdb);
            if(!response.error) {
                setPoster(response.data)
            }
        }
        const getThisMovieRating = async () => {
            const response = await makeRequest('GET','/movies/'+props.item.ids.slug+'/ratings');
            if(!response.error) {
                setRating(response.data)
            }
        }
        getThisMovieRating();
        getThisMoviePoster();
    },[])
    
    return (
        <ListItem>
            <ListItemImageContainer>
                <ListItemImage style={{resizeMode:'contain'}} source={{uri:poster}}></ListItemImage>
            </ListItemImageContainer>
            <ListItemContainer>
                <ListItemTitle>{props.item.title}</ListItemTitle>
                <ListItemRatingContainer>
                    <ListItemRating>{rating? rating.rating.toFixed(1) : null}</ListItemRating>
                    <ListItemRatingVotes>({rating? rating.votes : null} votos)</ListItemRatingVotes>
                </ListItemRatingContainer>
                <ListItemYear>{props.item.year}</ListItemYear>
            </ListItemContainer>
        </ListItem>
    )
}

export const MoviesList = (props) => {
    const renderItem = ({ item }) => {
        if (item.movie) {
            return (
               <MovieListItem item={item.movie}></MovieListItem>
            )
        } else {
            return (
                <MovieListItem item={item}></MovieListItem>
            )
        }
    }
    return (
        <ListContainer style={{flex:1}} >
            <List
                data={props.movies.data}
                renderItem={renderItem}
                initialNumToRender={15}
                keyExtractor={item => item.id}
            />
        </ListContainer>
       
    )
}
const IndicatorWrapper = styled.View`
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items:center;
`
const Indicator = styled.ActivityIndicator`
    height: 50px;
    width:50px;
`
const IndicatorText = styled.Text`
    color:blue;
`
export const Loading = (props) => {
    return (
        <IndicatorWrapper>
            <Indicator size="large" color="blue"></Indicator>
            <IndicatorText>{props.text}</IndicatorText>
        </IndicatorWrapper>
    )
}

const ErrorWrapper = styled.View`
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items:center;
    padding:10px;
`
const ErrorText = styled.Text`
    color:red;
    text-align: center;
`
const ErrorButton = styled.TouchableOpacity`
    padding: 14px 16px;
    font-size: 17px;
    width: 100%;
    border: 1px solid red;
    border-radius: 5px;
    margin:10px;
    background-color:red;
`;
const ErrorButtonText = styled.Text`
    color:white;
    text-align: center;
`
export const Error = (props) => {
    return (
        <ErrorWrapper>
            <ErrorText>Um erro ocorreu, tente novamente!</ErrorText>
            <ErrorButton onPress={() => props.refreshMovies()}>
                <ErrorButtonText>Tentar novamente</ErrorButtonText>
            </ErrorButton>
        </ErrorWrapper>
    )
}