import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Badges from "./screens/Badges";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import LevelOne from "./screens/LevelOne";
import LevelSelect from "./screens/LevelSelect";
import LevelTwo from "./screens/LevelTwo";
import About from "./screens/About";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelSelect: {
    screen: LevelSelect,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  Badges: {
    screen: Badges,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelOne: {
    screen: LevelOne,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  LevelTwo: {
    screen: LevelTwo,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
};

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);
