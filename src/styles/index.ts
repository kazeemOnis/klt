import {Platform} from 'react-native';
import styled from '../theme';

export interface InputInterface {
  hasError?: boolean;
  hasMargin?: boolean;
}

export interface ErrorTextInterface {
  hasMargin?: boolean;
}

export const colors = {
  primary: '#FFD5EA',
  alphaWhite: 'rgba(255, 255, 255, 0.1)',
  primaryLight: 'rgba(11, 30, 80, 0.6)',
  primaryLight2: '#FCEFEC',
  secondary: '#48437B',
  secondary2: '#27AE60',
  white: '#fff',
  black: '#000',
  black1E: '#1E1E1E',
  red: '#FF3A44',
  grayFB: '#fbfbfb',
  gray77: '#777',
  grayBB: '#bbb',
  grayEE: '#eee',
  grayAA: '#aaa',
  grayCA: '#CACACA',
  grayC4: '#c4c4c4',
  grayDA: '#dadada',
  grayDB: '#DBDCE0',
  grayF5: '#F5F8FA',
  grayF2: '#F2F2F2',
  grayF9: '#F9F9F9',
  gray82: '#828282',
  grayC6: '#C6C6C8',
  grayEF: '#EFEFEF',
  gray97: '#979797',
  grayOpac: 'rgba(0, 0, 0, 0.5)',
  gray75: '#757575',
  gray8D: '#8D9091',
  gray9B: '#9B9B9B',
  gray66: '#667085',
  green: '#00AC53',
};

export const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  ${Platform.OS === 'android' && 'padding: 20px 0px;'}
`;

export const Asterisk = styled.Text`
  color: ${colors.red};
  font-size: 14px;
  font-weight: 600;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  color: white;
  font-family: 'SchibstedGrotesk-SemiBold';
  font-weight: 600;
`;

export const Label = styled.Text`
  margin-bottom: 8px;
  color: ${colors.black};
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  color: ${colors.red};
  margin-top: 8px;
  font-size: 12px;
`;

export const InputField = styled.TextInput<InputInterface>`
  ${(props: InputInterface) => {
    return `
      border-width: 1px;
      border-color: ${props.hasError ? colors.primary : colors.grayEF};
      height: 48px;
      padding-horizontal: 16px;
      border-radius: 8px;
      margin-bottom: ${props.hasError ? 5 : props.hasMargin ? 30 : 0}px;
    `;
  }}
`;

export const CenteredView = styled.View<{hideBackground?: boolean}>`
  ${(props: {hideBackground?: boolean}) => {
    return `
      ${!props.hideBackground && 'background: rgba(0, 0, 0, 0.7);'};
      flex: 1;
      justify-content: flex-end;
    `;
  }}
`;

export const ModalView = styled.View<{height?: string}>`
  ${(props: {height?: string}) => {
    return `
      background: white;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      padding-vertical: 50px;
      padding-horizontal: 20px
      width: 100%;
      min-height: ${props.height ? props.height : '90%'};
    `;
  }}
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SpacedRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
