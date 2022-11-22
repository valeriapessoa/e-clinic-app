import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import StartScreen from "../screens/StartScreen";
import Agendamento from "../screens/Agendamento";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Agendamento" component={Agendamento} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
