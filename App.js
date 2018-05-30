import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import {Tabs} from './Config/Router';

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}
