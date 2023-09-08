import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import styled from '../theme';
import {colors} from '../styles';

export type ButtonStyle = 'primary' | 'alternate';
export type ButtonSize = 'default' | 'small';
export type ButtonState = 'default' | 'disabled';

interface ButtonProps {
  size?: ButtonSize;
  buttonStyle?: ButtonStyle;
  buttonState?: ButtonState;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isLoading?: boolean;
  testID?: string;
  label?: string;
  background?: string;
  disabledBackground?: string;
}

interface LabelProps extends ButtonProps {}

const Label = styled.Text<LabelProps>`
  ${(props: LabelProps) => {
    return `
      text-align: center;
      font-weight: 700;
      font-family: 'SchibstedGrotesk-Bold';
      color: ${props.buttonStyle === 'alternate' ? colors.black : colors.white};
      font-size: 14px;
    `;
  }}
`;

const CustomButton = styled.Pressable<ButtonProps>`
  ${(props: ButtonProps) => {
    return `
    background: ${
      props.buttonState === 'disabled' && props.buttonStyle === 'primary'
        ? getColor(props.disabledBackground, colors.primaryLight)
        : props.buttonStyle === 'alternate'
        ? colors.white
        : getColor(props.background, colors.primary)
    };
    height: ${props.size === 'small' ? 40 : 50}px;
    justify-content: center;
    ${
      props.buttonStyle === 'alternate' && `border: 1px solid ${colors.black};`
    };
    `;
  }}
`;

const getColor = (background?: string, sub?: string) => {
  return background ? background : sub;
};

export const Button = ({
  size = 'default',
  style,
  onPress,
  isLoading,
  buttonState = 'default',
  testID,
  label,
  buttonStyle = 'primary',
  background,
  disabledBackground,
}: ButtonProps) => {
  return (
    <CustomButton
      background={background}
      disabledBackground={disabledBackground}
      testID={testID}
      size={size}
      style={style}
      buttonStyle={buttonStyle}
      buttonState={buttonState}
      onPress={(event: GestureResponderEvent) => {
        buttonState !== 'disabled' && onPress && onPress(event);
      }}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <React.Fragment>
          <Label buttonStyle={buttonStyle} size={size}>
            {label}
          </Label>
        </React.Fragment>
      )}
    </CustomButton>
  );
};
