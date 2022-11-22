import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigation";
import Home from "../screens/Home";
import Convenio from "../screens/Convenio";
import Unidades from "../screens/Unidades";
import Agendamento from "../screens/Agendamento";
import CentralAtendimento from "../screens/CentralAtendimento";
import StartScreen from "../screens/StartScreen";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1d9bf0",
        tabBarInactiveTintColor: "#222",
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   height: 80,
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Entypo name="home" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Convenio"
        component={Convenio}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <FontAwesome5 name="address-card" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Unidades"
        component={Unidades}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Entypo name="location" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="startAgendamento"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <FontAwesome5 name="calendar-alt" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="centralAtendimento"
        component={CentralAtendimento}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <AntDesign name="customerservice" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
