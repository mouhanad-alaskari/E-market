import React , { Component } from 'react'
import {Root} from 'native-base'
import AppNavigator from "./Navigation/AppNavigator";

export default class Router extends Component {


  render(){
    let Navigator = AppNavigator("Auth");
     return (
        <Root>
         <Navigator/>
        </Root>
     );
  }
}
