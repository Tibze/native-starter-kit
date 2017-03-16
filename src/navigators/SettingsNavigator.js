import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Header } from 'react-navigation-native-base';

import Settings from '../views/settings/';
import SettingsDetails from '../views/settingsDetails';

const SettingsNavigator = StackNavigator({
  Settings: { screen: Settings },
  SettingsDetails: { screen: SettingsDetails },
}, {
  navigationOptions: {
    //  header: {
    //    visible: false,
    //  },
   },
});

export default SettingsNavigator;
