import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import PlaceholderScreen from "../screens/PlaceholderScreen";
import SearchCategoriesScreen from "../screens/SearchCategoriesScreen";
import SearchScreen from "../screens/SearchScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        name="SearchCategoriesScreen"
        component={SearchCategoriesScreen}
      />
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchStack.Screen name="AccountScreen" component={AccountScreen} />
    </SearchStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Browse"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Grocery"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Baskets"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="basket" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
