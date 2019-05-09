import { createDrawerNavigator, DrawerItems,  createAppContainer } from "react-navigation";
import Item1 from "../screens/drawerItems/Item1";
import Item2 from "../screens/drawerItems/Item2";
import TabNavigator from "./TabNavigator";
import SideBar from "../screens/common/SideBar";

export default createDrawerNavigator(
  {
    Tabs: TabNavigator,
    Item1: { screen: Item1 },
    Item2: { screen: Item2 }
  },
  {
    contentComponent: SideBar
  }
);
