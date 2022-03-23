import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 50px;
`;

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Container>
          <MainText>Hello!</MainText>
        </Container>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
