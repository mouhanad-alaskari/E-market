import { createSwitchNavigator , createAppContainer } from "react-navigation";
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from "./DrawerNavigator";

export default initialRouteName =>
   createAppContainer (createSwitchNavigator (
     {
       Auth:{ screen : AuthNavigator },
       Home:{ screen : DrawerNavigator}
     },{
       initialRouteName:"Auth",
       headerMode: "none"
     }
   ));
