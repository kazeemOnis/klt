/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import styled from '../theme';
import {SearchIcon} from '../components/Icons';
import {Container, Row, colors} from '../styles';

const SearchWrapper = styled.TouchableOpacity`
  margin-bottom: 8px;
  padding-horizontal: 16px;
`;

const ItemWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  height: 90px;
  margin-bottom: 16px;
`;

const ItemContainer = styled.View<{background: string}>`
  width: 70%;
  height: 100%;
  justify-content: center;
  ${props =>
    props.background
      ? `background: ${props.background};`
      : 'background: #F2F2F2;'}
`;

const ItemText = styled.Text`
  font-family: 'SchibstedGrotesk-Bold';
  font-size: 14px;
  font-weight: 600;
  margin-left: 16px;
  text-transform: uppercase;
`;

const ItemImage = styled.Image`
  height: 100%;
  width: 30%;
`;

const SearchText = styled.Text`
  color: ${colors.gray66};
  font-size: 12px;
  font-family: 'SchibstedGrotesk-Regular';
  margin-left: 4px;
`;

export const ShopScreen: React.FC = () => {
  const list = [
    {
      title: 'Naomi Campbell',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/bms/media/2023/08/31/tHvSNlTf3FDydZNAmhB9Vpdyc9UtM66GedERP3JG.jpg?imwidth=800',
    },
    {
      title: 'Royalty',
      background: '#FFD5EA',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      title: 'New In',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/09/05/18dd3ecc-c4bc-4ad8-a3fb-7c184065d38b.jpg',
    },
    {
      title: 'Sale',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2022/11/29/cz4acKpGX2fhygxEkRjPBFvdi6cf8DmEVNSnuG6a.jpg',
    },
    {
      title: 'Clothing',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/07/06/2sLoj8dArH9c0dCz4D4mHVAv77ZnZIFv8f2hjDZ6.jpg',
    },
    {
      title: 'Dresses',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/07/06/R4KXeNNHCv298OuBUHqPtvZ4prD3sDipLhCWOM4Q.jpg',
    },
    {
      title: 'Tops',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/07/06/Xk4JOUiT9MYOW5jbiw8E7nO0MLv17A5YdzvUooDm.jpg',
    },
    {
      title: 'Student',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/08/22/m2tK4RxQQYBTbj779wzIlSc5Vkl4rCKVCKA1ikAz.jpg',
    },
    {
      title: 'Figure',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/04/28/25QnmJXlVliCjeDI9xFJlctrfgsW5IFyIfhP9xcv.jpg',
    },
    {
      title: 'Autumn',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/08/29/746a5046-27e7-4e9b-8a95-d0c026964340.jpg',
    },
    {
      title: 'Swim',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/07/06/A6zTt4NopVgP8KwXqcUcjk5bfCt2UTbAPHkwRB96.jpg',
    },
    {
      title: 'Shoes',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/04/28/YOuxJONOa71qK9ax7qU8tFVSTm8l6hHrGX2Wxq4H.jpg',
    },
    {
      title: 'Accessories',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/07/06/K8iuEzhyJ4wCzXBScL2OOn83eHAIhqI6y4sV5Kug.jpg',
    },
    {
      title: 'Home',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/04/28/2iaZIla43TgwinGsNporeJRQEJ50mfCeYxYjf7qc.jpg',
    },
    {
      title: 'Beauty',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/04/28/aRfhxpwyAhVB1GVTU2covn2N0z4DPUj9BsI38OMy.jpg',
    },
    {
      title: 'Edit',
      background: '#F2F2F2',
      image:
        'https://cdn-media.prettylittlething.com/nms/media/2023/07/06/4QJAJcZw0yeEOlDny4S20ZO3bEDW9fFvogys77Ul.jpg',
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
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <React.Fragment>
            <ItemWrapper onPress={() => {}}>
              <ItemContainer background={item.background}>
                <ItemText>{item.title}</ItemText>
              </ItemContainer>
              <ItemImage source={{uri: item.image}} resizeMode="cover" />
            </ItemWrapper>
          </React.Fragment>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </Container>
  );
};
