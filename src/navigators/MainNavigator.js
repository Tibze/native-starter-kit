import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Header } from 'react-navigation-native-base';

import Home from '../views/home/';

const MainNavigator = StackNavigator({
  Home: { screen: Home },
});

export default MainNavigator;
