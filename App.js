/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Feed from './src/components/feed/feed';

const FeedApp = StackNavigator({
  Feed: { screen: Feed },
},
  {
    initialRouterName: 'Feed',
    headerMode: 'none',
  },
);

export default class App extends Component {
  render() {
    return <FeedApp />
  }
}