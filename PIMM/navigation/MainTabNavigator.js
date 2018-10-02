import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StepScreen from "../screens/StepScreen";

const StepStack = createStackNavigator({
  Steps: StepScreen
});

StepStack.navigationOptions = {
  tabBarLabel: "Steps",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-walk${focused ? "" : "-outline"}`
          : "md-walk"
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Tasks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-checkmark-circle${focused ? "" : "-outline"}`
          : "md-checkmark-circle"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-options${focused ? "" : "-outline"}`
          : "md-options"
      }
    />
  )
};

export default createBottomTabNavigator({
  StepStack,
  LinksStack,
  SettingsStack
});
