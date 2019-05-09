import React from "react";
import { Platform } from "react-native";
import { Button, Icon, Text, Badge } from "native-base";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/homeScreen";
import Product from "../screens/homeScreen/product";
import CartScreen from "../screens/CartScreen/CartScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Show:{screen:Product}
  },
  { headerMode: "none" }
);

HomeStack.navigationOptions = {

  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={
        Platform.OS === "ios"
          ? 'ios-home'
          : "md-home"
      }
      size={26}
       color ={focused ? "blue" : "#D3D3D3"}
    />
  )
};

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  { headerMode: "none" }
);

CartStack.navigationOptions = {

  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={
        Platform.OS === "ios"
          ? "ios-cart"
          : "md-cart"
      }
      size={26}
      color = {focused ? "blue" : "#D3D3D3"}
    />
  )
};

export default createMaterialTopTabNavigator(
  {
    HOME : HomeStack,
    CART :CartStack,
  },
  {
    tabBarOptions: {
      activeTintColor:'blue',
      inactiveTintColor:'black',
      showIcon:true,
      style: {
        backgroundColor: "#fff",
        height: "8%"
      },
      labelStyle: {
    fontSize: 10,
    margin: 0,
    padding: 0,

     },
   },
    tabBarPosition:'bottom',
    animationEnabled: true,
    swipeEnabled: true,

}
);
