import React from 'react';
import { StatusBar  } from 'react-native';
import Root from './src'
export default class App extends React.Component {
componentDidMount(){
  StatusBar.setHidden(true);
}
  render() {
    return <Root/>;
  }
}
