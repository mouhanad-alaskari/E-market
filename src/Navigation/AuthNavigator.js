import { createStackNavigator } from "react-navigation";

import Login from "../screens/login";
import Register from "../screens/register";

export default createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);
