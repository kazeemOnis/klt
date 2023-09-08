/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputEndEditingEventData,
  TouchableOpacity,
} from 'react-native';
import {
  object as yupObject,
  string as yupString,
  ObjectSchema,
  ValidationError,
} from 'yup';
import styled from '../theme';
import {Asterisk, ErrorMessage, Label, colors} from '../styles';

const Wrapper = styled.View<{hasMargin?: boolean}>`
  ${(props: {hasMargin?: boolean}) => props.hasMargin && 'margin-bottom: 24px;'}
`;

const FormInput = styled(TextInput)`
  font-size: 16px;
  width: 85%;
  color: black;
`;

const FormInputWrapper = styled.View<{
  isFocused: boolean;
  hasError?: boolean;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  ${(props: {isFocused: boolean; hasError?: boolean}) =>
    props.isFocused
      ? `border: 2px solid ${colors.primary};`
      : props.hasError
      ? `border: 2px solid ${colors.red};`
      : `border: 1px solid ${colors.gray75};`}
  border-radius: 5px;
  padding-horizontal: 8px;
`;

const PasswordText = styled.Text`
  color: black;
`;

interface InputFieldProps {
  label: string;
  type: 'email' | 'password' | 'text' | 'number';
  value: string;
  inputRef: React.RefObject<TextInput>;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  isValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusChangeCallback?: () => void;
  required?: boolean;
  validators?: {
    name: string;
    argument: string | number;
  }[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  cancelCircleIconLabel?: string;
  errorMessages?: {
    emailValidationError: string;
    requiredError: string;
    minLengthError: string;
    maxLengthError: string;
    patternError: string;
  };
  showHide?: boolean;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  hasMargin?: boolean;
}

const schemaFromProps = (props: InputFieldProps) => {
  let schema = yupString();

  Object.keys(props).map(key => {
    switch (key) {
      case 'type':
        if (props[key].toLowerCase() === 'email') {
          schema = schema.concat(
            yupString().email(
              props.errorMessages?.emailValidationError || undefined,
            ),
          );
        }
        break;
      case 'required':
        if (props.required) {
          schema = schema.required(
            props.errorMessages?.requiredError || undefined,
          );
        }
        break;
      case 'minLength':
        schema = schema.concat(
          yupString().min(
            props[key] || 1,
            props.errorMessages?.minLengthError || undefined,
          ),
        );
        break;
      case 'maxLength':
        schema = schema.concat(
          yupString().max(
            props[key] || 255,
            props.errorMessages?.maxLengthError || undefined,
          ),
        );
        break;
      // case 'pattern' && props[key]:
      //   schema = schema.concat(
      //     yupString().matches(new RegExp(props[key]), {
      //       excludeEmptyString: true,
      //       message: props.errorMessages?.patternError || undefined,
      //     }),
      //   )

      //   break
    }
  });
  return schema;
};

export const InputField = (props: InputFieldProps) => {
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();
  const [validateOnBlur, shouldValidateOnBlur] = React.useState(true);

  const toggleShowHide = () => {
    setIsShowing(!isShowing);
  };

  const toggleFocus = () => {
    setIsFocused(!isFocused);
    props.onFocusChangeCallback && props.onFocusChangeCallback();
  };

  const fieldValidCheck = (
    value: string,
    validationSchema: ObjectSchema<any>,
  ) => {
    try {
      validationSchema.validateSync({validator: value}, {abortEarly: false});
      return true;
    } catch (e) {
      return false;
    }
  };

  const validatorMap = (
    validatorName: string,
    value: string | number,
    validators: any,
  ) => {
    switch (validatorName) {
      case 'MIN_LENGTH':
        validators.minLength = value;
        break;
      case 'MAX_LENGTH':
        validators.maxLength = value;
        break;
      case 'REGEX_MATCHES':
        validators.pattern = value;
        break;
    }
    return validators;
  };

  const validators = {};
  props.validators &&
    props.validators.forEach(validator =>
      validatorMap(validator.name, validator.argument, validators),
    );

  const validationSchema = yupObject().shape({
    validator: schemaFromProps({...props, ...validators}).label(props.label),
  });

  const validateFieldValue = (value: boolean | string): boolean => {
    try {
      validationSchema.validateSync({validator: value}, {abortEarly: false});

      shouldValidateOnBlur(true);
      return true;
    } catch (e) {
      const yupError = e as ValidationError;
      if (yupError.inner.length > 0) {
        setError(yupError.inner[0].message);
      }
    }

    return false;
  };

  const onChangeText = (text: string) => {
    props.onChange(text);
    validateFieldValue(text);

    // if (!validateOnBlur) {
    // }
  };

  const onBlur = () => {
    if (validateOnBlur) {
      setError(undefined);
      validateFieldValue(props.value);
    }
    fieldValidCheck(props.value, validationSchema);
  };

  React.useEffect(() => {
    if (props.isValid) {
      props.isValid(error ? false : true);
    }
  }, [error]);

  return (
    <Wrapper hasMargin={props.hasMargin}>
      <Label>
        {props.required && <Asterisk>*</Asterisk>}
        {props.label}
      </Label>
      <FormInputWrapper isFocused={isFocused} hasError={!!error}>
        <FormInput
          ref={props.inputRef}
          value={props.value}
          secureTextEntry={!isShowing && props.type === 'password'}
          keyboardType={
            props.type === 'email'
              ? 'email-address'
              : props.type === 'number'
              ? 'phone-pad'
              : 'default'
          }
          onChangeText={onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={'go'}
          accessibilityLabel={props.label}
          onFocus={toggleFocus}
          onEndEditing={toggleFocus}
          onBlur={onBlur}
          maxLength={255}
          autoCapitalize="none"
          textContentType={props.textContentType}
        />
        {props.type === 'password' && !!props.value && props.showHide && (
          <TouchableOpacity onPress={toggleShowHide} accessibilityRole="button">
            <PasswordText>{isShowing ? 'Hide' : 'Show'}</PasswordText>
          </TouchableOpacity>
        )}
        {props.type === 'email' && !!props.value && (
          <TouchableOpacity
            onPress={() => props.onChange('')}
            accessibilityLabel={props.cancelCircleIconLabel}
            accessibilityRole="button"
          />
        )}
      </FormInputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
