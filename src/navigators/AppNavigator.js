import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Header } from 'react-navigation-native-base';

import Splashscreen from '../views/splashscreen/';
import BlankPage from '../views/blankPage';
import SettingsNavigator from '../navigators/SettingsNavigator';
import TabNavigator from '../navigators/TabNavigator';

const AppNavigator = StackNavigator({
  Splashscreen: { screen: Splashscreen },
  Tab: { screen: TabNavigator },
  BlankModal: { screen: BlankPage },
}, {
  initialRouteName: 'Splashscreen',
  mode: 'modal',
});

export default AppNavigator;
