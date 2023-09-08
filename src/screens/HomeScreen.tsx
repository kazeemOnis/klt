/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from '../theme';
import {SearchIcon} from '../components/Icons';
import {Container, Row, colors} from '../styles';

const Wrapper = styled.ScrollView`
  padding-horizontal: 20px;
`;

const SearchWrapper = styled.TouchableOpacity`
  margin-bottom: 8px;
  padding-horizontal: 16px;
`;

const CarouselItem = styled.TouchableOpacity`
  width: 290px;
  height: 125px;
  margin-right: 24px;
`;

const CarouselImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const SearchText = styled.Text`
  color: ${colors.gray66};
  font-size: 12px;
  font-family: 'SchibstedGrotesk-Regular';
  margin-left: 4px;
`;

export const HomeScreen: React.FC = () => {
  const carousel = [
    {
      image:
        'data:image/jpeg;base64,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',
    },
    {
      image:
        'data:image/jpeg;base64,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',
    },
    {
      image:
        'data:image/jpeg;base64,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',
    },
    {
      image:
        'data:image/jpeg;base64,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',
    },
    {
      image:
        'data:image/jpeg;base64,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',
    },
  ];
  return (
    <Container>
      <SearchWrapper>
        <Row
          style={{
            alignItems: 'center',
          }}>
          <SearchIcon fill={colors.gray66} />
          <SearchText>Search...</SearchText>
        </Row>
      </SearchWrapper>
      <Wrapper horizontal showsHorizontalScrollIndicator={false}>
        {carousel.map((item, index) => (
          <CarouselItem key={index}>
            <CarouselImage source={{uri: item.image}} />
          </CarouselItem>
        ))}
      </Wrapper>
    </Container>
  );
};
