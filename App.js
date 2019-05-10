import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import Navigation from './Navigation'

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <Navigation />
    );
  }
}