import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "../screens/LandingScreen";
import PhoneInputScreen from "../screens/PhoneInputScreen";
import PasswordInputScreen from "../screens/PasswordInputScreen";
import PhoneVerificationScreen from "../screens/PhoneVerificationScreen";
import EmailVerificationScreen from "../screens/EmailVerificationScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import DealsTabsNavigator from "./DealsTabsNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="PhoneInputScreen" component={PhoneInputScreen} />
        <Stack.Screen
          name="PhoneVerificationScreen"
          component={PhoneVerificationScreen}
        />
        <Stack.Screen
          name="PasswordInputScreen"
          component={PasswordInputScreen}
        />
        <Stack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="OffersScreen" component={DealsTabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
