import React from 'react';
import styled from '../theme';
import {LogoText} from '../styles';

const Container = styled.View`
  background: #232323;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const SplashScreen: React.FC = () => {
  return (
    <Container>
      <LogoText>KAZLITTLETHING</LogoText>
    </Container>
  );
};
