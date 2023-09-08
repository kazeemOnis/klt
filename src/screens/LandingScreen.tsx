import React from 'react';
import styled from '../theme';
import {Container} from '../styles';

const Wrapper = styled.ScrollView`
  padding-horizontal: 20px;
`;

export const LandingScreen: React.FC = () => {
  return (
    <Container>
      <Wrapper showsVerticalScrollIndicator={false} />
    </Container>
  );
};
