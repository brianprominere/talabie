import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator, } from "react-navigation";

import SideBar from "./screens/sidebar";

import Home from "./screens/home/";
import Dashboard from "./screens/dashboard/";
import Settings from "./screens/settings/";
import AllOrders from "./screens/allorders/";
import DineIn from "./screens/dinein/";
import PickUp from "./screens/pickup/";
import Reservation from "./screens/reservation/";
import MenuItem from "./screens/menuitem/";
import MenuItems from "./screens/menuitems/";
import DineInView from "./screens/dineinview/";
import PickUpView from "./screens/pickupview/";
import ReservationView from "./screens/reservationview/";



const Drawer = DrawerNavigator(
  {
    
    Dashboard: { screen: Dashboard},
    Settings: { screen: Settings},
    AllOrders: { screen: AllOrders},
    DineIn: { screen: DineIn},
    PickUp: { screen: PickUp},
    Reservation: { screen: Reservation},
    MenuItems: { screen: MenuItems},
    MenuItem: { screen: MenuItem},
    DineInView: { screen: DineInView},
    PickUpView: { screen: PickUpView},
    ReservationView: { screen: ReservationView},


    
   
  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);


const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
