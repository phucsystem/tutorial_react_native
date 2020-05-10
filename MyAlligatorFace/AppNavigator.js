import {createStackNavigator} from 'react-navigation-stack';

import Home from "./Home";
import Friends from "./Friend";
import {createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Friends: {screen: Friends},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  }
);

export default createAppContainer(AppNavigator);