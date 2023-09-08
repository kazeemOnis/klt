/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {ShopScreen} from '../../screens/ShopScreen';
import {AccountScreen} from '../../screens/AccountScreen';
import {BasketScreen} from '../../screens/BasketScreen';
import {WishlistScreen} from '../../screens/WishlistScreen';
import {
  ShopIcon,
  HomeIcon,
  BagIcon,
  UserIcon,
  HeartIcon,
} from '../../components/Icons';
// import {colors} from '../../styles';

export type TabNavigationParamList = {
  Home: undefined;
  Shop: undefined;
  Account: undefined;
  Basket: undefined;
  Wishlist: undefined;
};

export type HomeNavigationParamList = {
  HomeScreen: undefined;
};

const TabNavigator = createBottomTabNavigator<TabNavigationParamList>();
const HomeNavigator = createStackNavigator<HomeNavigationParamList>();

const HomeNavigation = () => {
  return (
    <HomeNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeNavigator.Screen name="HomeScreen" component={HomeScreen} />
    </HomeNavigator.Navigator>
  );
};

export const TabNavigation = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'SchibstedGrotesk-Bold',
          fontWeight: '500',
          fontSize: 10,
          marginTop: 4,
        },
        tabBarActiveTintColor: '#F742A6',
        tabBarInactiveTintColor: '#6A6A6A',
        tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? 10 : 0,
          alignContent: 'center',
          alignItems: 'center',
        },
      }}>
      <TabNavigator.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon fill={focused ? '#FF73CC' : '#A1A1A1'} />
          ),
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{bottom: 5}}>
              <ShopIcon fill={focused ? '#FF73CC' : '#A1A1A1'} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BagIcon stroke={focused ? '#FF73CC' : '#A1A1A1'} />
          ),
          headerShown: false,
          title: 'Bag',
        }}
      />
      <TabNavigator.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HeartIcon fill={focused ? '#FF73CC' : '#A1A1A1'} />
          ),
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <UserIcon stroke={focused ? '#FF73CC' : '#A1A1A1'} />
          ),
          headerShown: false,
          title: 'My PLT',
        }}
      />
    </TabNavigator.Navigator>
  );
};
