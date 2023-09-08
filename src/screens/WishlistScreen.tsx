/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from '../theme';
import {Button} from '../components/Button';
import {Container, colors} from '../styles';

const Background = styled.ImageBackground`
  flex: 1;
`;

const ButtonContainer = styled.View`
  position: absolute;
  top: 65%;
  padding-horizontal: 15px;
  width: 100%;
`;

export const WishlistScreen: React.FC = () => {
  return (
    <Container>
      <Background
        source={require('../assets/login-wishlist.png')}
        resizeMode="cover">
        <ButtonContainer>
          <Button
            label="SIGN IN"
            onPress={() => {}}
            background={colors.green}
          />
          <Button
            style={{
              marginTop: 16,
            }}
            label="REGISTER"
            buttonStyle="alternate"
            onPress={() => {}}
          />
        </ButtonContainer>
      </Background>
    </Container>
  );
};
