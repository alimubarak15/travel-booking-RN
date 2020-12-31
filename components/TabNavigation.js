import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../constants/theme';
import icons from '../constants/icons';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: Platform.OS == 'ios' ? 90 : 50,
          shadowColor: '#000',
          shadowOffset: {height: 10, width: 0},
          shadowOpacity: 0.5,
          shadowRadius: 13,
          elevation: 20,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLOR.primary : COLOR.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 30, height: 30}}
                />
              );

            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 30, height: 30}}
                />
              );

            case 'Bookmark':
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 30, height: 30}}
                />
              );
            case 'Account':
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 30, height: 30}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Bookmark" component={Home} />
      <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
