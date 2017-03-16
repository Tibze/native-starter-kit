import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Header } from 'react-navigation-native-base';

import Home from './components/home/';
import Blank from './components/blankPage/';

// const AppNavigator = StackNavigator({
//   Home: { screen: Home },
//   Blank: { screen: Blank },
// },{
//   headerComponent: Header
// });

const AppNavigator = DrawerNavigator({
  Home: { screen: Home },
  Blank: { screen: Blank },
}, {
  initialRouteName: 'Home',
});

export default AppNavigator;
