import React from 'react';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 15px;
  padding-top:0px;
  padding-bottom: 30px;
`;

const Header = styled.View`
    padding: 5px;
`;
const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const HeaderTab = styled.View`
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f1f1f1;
  flex-direction: row;
`;
const HeaderTabButton = styled.TouchableOpacity`
  padding: 14px 16px;
  font-size: 17px;
  width: 50%;
  text-align: center;
  background-color: ${props => props.selected ? '#ccc' : 'transparent'};
`;
const HeaderTabButtonContent = styled.Text`
  text-align: center;
`;

export const AppHeader = (props) => {
    return (
        <Header>
            <HeaderText>Filmes</HeaderText>
            <HeaderTab>
                <HeaderTabButton selected={props.selectedCategory == 'popular' ? true : false} onPress={() => props.setSelectedCategory('popular')}><HeaderTabButtonContent>Populares</HeaderTabButtonContent></HeaderTabButton>
                <HeaderTabButton selected={props.selectedCategory == 'watched' ? true : false} onPress={() => props.setSelectedCategory('watched')}><HeaderTabButtonContent>Mais assistidos</HeaderTabButtonContent></HeaderTabButton>
            </HeaderTab>
        </Header>
    )
}

const List = styled.FlatList`
  padding: 5px;
  height: 100%;
`;
const ListItem = styled.View`
  padding: 5px;
  background: #fff;
  height: 150px;
  width: 97%;
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
export const MoviesList = (props) => {
    const renderItem = ({ item }) => {
        if (item.movie) {
            return (
                <ListItem>
                    <ListItemImageContainer></ListItemImageContainer>
                    <ListItemContainer>
                        <ListItemTitle>{item.movie.title}</ListItemTitle>
                        <ListItemYear>{item.movie.year}</ListItemYear>
                    </ListItemContainer>
                </ListItem>
            )
        } else {
            return (
                <ListItem>
                    <ListItemImageContainer></ListItemImageContainer>
                    <ListItemContainer>
                        <ListItemTitle>{item.title}</ListItemTitle>
                        <ListItemYear>{item.year}</ListItemYear>
                    </ListItemContainer>
                </ListItem>
            )
        }
    }
    return (
        <List
            data={props.movies.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
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