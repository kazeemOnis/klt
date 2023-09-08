/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationProvider} from './src/providers';
import {RootNavigator} from './src/navigation/RootNavigator/RootNavigator';
import {ThemeProvider} from './src/theme';

const App = () => {
  const navigationRef = React.createRef<any>();

  return (
    <React.Fragment>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AuthenticationProvider>
        <NavigationContainer ref={navigationRef}>
          <GestureHandlerRootView style={{flex: 1}}>
            <ThemeProvider theme={{}}>
              <SafeAreaProvider>
                <RootNavigator />
              </SafeAreaProvider>
            </ThemeProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </AuthenticationProvider>
    </React.Fragment>
  );
};

export default App;
