import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OffersScreen from "../screens/OffersScreen";
import RewardsScreen from "../screens/RewardsScreen";

const Tab = createMaterialTopTabNavigator();

const DealsTabsNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 30 }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Deals</Text>
      </View>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "white",
            borderBottomWidth: 4,
            borderBottomColor: "#EDEDED",
            paddingBottom: 5,
          },
          tabBarLabel: ({ focused }) => {
            let iconName;
            let label;
            if (route.name === "Offers") {
              iconName = "pricetag";
              label = "Offers";
            } else if (route.name === "Rewards") {
              iconName = "star";
              label = "Rewards";
            }
            return (
              <View style={styles.tabContainer}>
                <Ionicons
                  name={iconName}
                  size={18}
                  color={focused ? "black" : "gray"}
                />
                <Text style={[styles.tabText, focused && styles.activeTabText]}>
                  {label}
                </Text>
              </View>
            );
          },
          tabBarIndicatorStyle: {
            backgroundColor: "black",
            height: 4,
          },
        })}
      >
        <Tab.Screen name="Offers" component={OffersScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "gray",
    marginLeft: 5,
  },
  activeTabText: {
    fontWeight: "500",
    color: "black",
  },
});

export default DealsTabsNavigator;
