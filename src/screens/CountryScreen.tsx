import React from 'react';
import {FlatList} from 'react-native';
import styled from '../theme';
import {useAuthentication} from '../providers';
import {Search} from '../components/Search';
import {Container, colors} from '../styles';
import countries from '../utils/country.json';

const Header = styled.View`
  background-color: ${colors.primary};
  min-height: 250px;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.View`
  bottom: 16px;
  position: absolute;
`;

const Logo = styled.Text`
  color: ${colors.black1E};
  font-size: 36px;
  font-family: 'SchibstedGrotesk-SemiBold';
  font-weight: 600;
  margin-bottom: 8px;
`;

const HeaderText = styled.Text`
  color: ${colors.black1E};
  font-size: 14px;
  font-family: 'SchibstedGrotesk-Regular';
  font-weight: 400;
  margin-bottom: 32px;
`;

const ItemWrapper = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grayBB};
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  padding: 8px;
`;

const ItemText = styled.Text`
  font-family: 'SchibstedGrotesk-Regular';
  font-size: 14px;
`;

const EmptyText = styled.Text`
  text-align: center;
  font-family: 'SchibstedGrotesk-Regular';
  font-size: 14px;
  margin-top: 8px;
`;

const Image = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 16px;
  border-radius: 12.5px;
`;

export const CountryScreen: React.FC = () => {
  const {signIn} = useAuthentication();
  const [search, setSearch] = React.useState('');
  const [list, setList] = React.useState(countries);

  React.useEffect(() => {
    const filter = () => {
      if (search && countries) {
        setList(
          countries.filter(val =>
            val.name.toLowerCase().includes(search.toLowerCase()),
          ),
        );
      } else {
        setList(countries);
      }
    };
    filter();
  }, [search]);

  const onPress = (country: string) => {
    return signIn({country});
  };

  return (
    <Container>
      <Header>
        <Logo>KAZLITTLETHING</Logo>
        <HeaderText>Select Country</HeaderText>
        <SearchWrapper>
          <Search
            search={search}
            onChange={setSearch}
            placeholder="Search..."
          />
        </SearchWrapper>
      </Header>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <React.Fragment>
            <ItemWrapper onPress={() => onPress(item.code)}>
              <ItemContainer>
                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/${item.code.toLowerCase()}.png`,
                  }}
                  resizeMode="cover"
                />
                <ItemText>{item.name}</ItemText>
              </ItemContainer>
            </ItemWrapper>
          </React.Fragment>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={<EmptyText>No country found</EmptyText>}
      />
    </Container>
  );
};
