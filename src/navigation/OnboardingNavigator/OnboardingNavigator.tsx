import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CountryScreen} from '../../screens/CountryScreen';

export type OnboardingStackParamList = {
  CountryScreen: undefined;
};

const OnboardingStackNavigator =
  createStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <OnboardingStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStackNavigator.Screen
        name="CountryScreen"
        component={CountryScreen}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
