/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {Button} from '../components/Button';
import styled from '../theme';
import {
  DeliveryTruck,
  GiftCard,
  GraduationIcon,
  Lock,
  ReturnIcon,
  SettingsIcon,
} from '../components/Icons';
import {Container, colors} from '../styles';

const Header = styled.ImageBackground`
  height: 220px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  padding-horizontal: 15px;
  width: 100%;
`;

const ItemWrapper = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grayBB};
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin: 0 16px;
  padding: 20px;
`;

const ItemText = styled.Text`
  font-family: 'SchibstedGrotesk-Bold';
  font-size: 14px;
  font-weight: 600;
  margin-left: 16px;
`;

const Note = styled.Text`
  font-family: 'SchibstedGrotesk-Regular';
  font-size: 12px;
  font-weight: 400;
  padding-horizontal: 16px;
  padding-top: 16px;
`;

export const AccountScreen: React.FC = () => {
  const list = [
    {
      title: 'Delivery',
      icon: DeliveryTruck,
    },
    {
      title: 'Returns',
      icon: ReturnIcon,
    },
    {
      title: 'Privacy Policy',
      icon: Lock,
    },
    {
      title: 'Gift Card',
      icon: GiftCard,
    },
    {
      title: 'Students',
      icon: GraduationIcon,
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
    },
  ];

  return (
    <Container>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <React.Fragment>
            <ItemWrapper onPress={() => {}}>
              <ItemContainer>
                <item.icon />
                <ItemText>{item.title}</ItemText>
              </ItemContainer>
            </ItemWrapper>
          </React.Fragment>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <Header
            source={{
              uri: 'https://cdn-media.prettylittlething.com/wysiwyg/cms/affiliate/header-mob.jpg',
            }}
            resizeMode="cover">
            <ButtonContainer>
              <Button label="SIGN IN" onPress={() => {}} background="#313131" />
              <Button
                style={{
                  marginTop: 16,
                }}
                label="REGISTER"
                buttonStyle="alternate"
                onPress={() => {}}
              />
            </ButtonContainer>
          </Header>
        }
        ListFooterComponent={
          <Note>
            If you'd like to report an issue, please quote this version number
            to CS - 61.6.0
          </Note>
        }
      />
    </Container>
  );
};
