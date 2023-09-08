import * as React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputEndEditingEventData,
} from 'react-native';
import styled from '../theme';
import {SearchIcon} from './Icons';
import {colors} from '../styles';

const FormInputWrapper = styled.View<{
  isFocused: boolean;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  ${(props: {isFocused: boolean}) =>
    props.isFocused
      ? `border: 1.25px solid ${colors.gray66};`
      : `border: 1px solid ${colors.gray66};`}
  border-radius: 20px;
  padding-right: 8px;
  padding-left: 16px;
  background-color: white;
`;

const FormInput = styled(TextInput)`
  font-size: 14px;
  width: 85%;
  font-family: 'SchibstedGrotesk-Regular';
  color: ${colors.black1E};
`;

interface SearchProps {
  placeholder?: string;
  search: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
}

export const Search = ({
  placeholder,
  search,
  onChange,
  onSubmitEditing,
}: SearchProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const onChangeText = (text: string) => {
    onChange(text);
  };

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <FormInputWrapper isFocused={isFocused}>
      <FormInput
        value={search}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={toggleFocus}
        onEndEditing={toggleFocus}
        placeholderTextColor={colors.gray66}
      />
      <SearchIcon fill={colors.gray66} />
    </FormInputWrapper>
  );
};
