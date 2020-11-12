import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Games"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIconA name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Badges"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIconB name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIconC name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIconA(props: { name: string; color: string }) {
  return <Entypo name="game-controller" size={24} color="black" />;
}
function TabBarIconB(props: { name: string; color: string }) {
  return <Foundation name="sheriff-badge" size={24} color="black" />;
}

function TabBarIconC(props: { name: string; color: string }) {
  return <FontAwesome name="user" size={24} color="black" />;
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Play A Game' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Badges and Progress' }}
      />
    </TabTwoStack.Navigator>
  );
  
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </TabThreeStack.Navigator>
  );
  
}
