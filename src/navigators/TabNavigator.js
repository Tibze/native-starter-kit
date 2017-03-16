import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Header } from 'react-navigation-native-base';

import MainNavigator from '../navigators/MainNavigator';
import SettingsNavigator from '../navigators/SettingsNavigator';

const TabNavigatorC = TabNavigator({
  Home: { screen: MainNavigator },
  Settings: { screen: SettingsNavigator },
}, {
  navigationOptions: {
     header: {
       visible: false,
     },
   },
});

export default TabNavigatorC;
