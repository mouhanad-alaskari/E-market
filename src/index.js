import React , { Component } from 'react'
import  {
  View ,
  Text
} from 'react-native'
import Router from './Router'
import { Provider } from 'react-redux';
import {createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './screens/reducers';

export default class Root extends Component {

 render(){
return (
<Provider  store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
 <Router/>
</Provider>
)
 }

}
