import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingNavigator} from '../OnboardingNavigator/OnboardingNavigator';
import {TabNavigation} from '../TabNavigator/TabNavigator';
import {useAuthentication} from '../../providers';

const RootStackNavigator = createStackNavigator();

export const RootNavigator = () => {
  const {isAuthenticated} = useAuthentication();

  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      {!isAuthenticated ? (
        <RootStackNavigator.Screen
          name="OnboardingNavigator"
          component={OnboardingNavigator}
        />
      ) : (
        <RootStackNavigator.Screen
          name="TabNavigator"
          component={TabNavigation}
        />
      )}
    </RootStackNavigator.Navigator>
  );
};
