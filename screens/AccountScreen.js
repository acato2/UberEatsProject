import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const menuItems = [
  { title: "Orders", icon: "bookmark" },
  { title: "Your favourites", icon: "heart" },
  { title: "Restaurant Rewards", icon: "star" },
  { title: "Wallet", icon: "wallet" },
  { title: "Send a gift", icon: "gift" },
  {
    title: "Business preferences",
    icon: "briefcase",
    subText: "Make work meals quicker and easier",
    subTextColor: "#2E7D32",
  },
  { title: "Help", icon: "help-circle" },
  { title: "Promotions", icon: "pricetag" },
  {
    title: "Uber Pass",
    icon: "ticket",
    subText: "Join free for 1 month",
    subTextColor: "#2E7D32",
  },
  { title: "Deliver with Uber", icon: "car" },
  { title: "Settings", icon: "settings-outline" },
];

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Icon
            name={item.icon}
            size={24}
            color="black"
            style={styles.menuIcon}
          />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>{item.title}</Text>
            {item.subText && (
              <Text style={[styles.subText, { color: item.subTextColor }]}>
                {item.subText}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.aboutText}>About</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "400",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginLeft: 9,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  menuText: {
    fontSize: 14,
    fontWeight: "500",
  },
  subText: {
    fontSize: 14,
  },
  aboutText: {
    fontSize: 12,
    color: "gray",
    padding: 15,
    marginLeft: 9,
    marginTop: 5,
  },
});

export default AccountScreen;
