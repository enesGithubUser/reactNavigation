import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import Home from './components/Home'
import Second from './components/Second'
import Third from './components/Third'

export default class App extends React.Component{
  render(){
    return (
      <AppNavigator/>
    )
  }
}

const AppNavigator = StackNavigator({
  Home: {screen : Home},
  Second: {screen : Second},
  Thir: {screen : Third}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
