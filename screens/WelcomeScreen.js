import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="checkmark"
          size={50}
          color="white"
          style={styles.icon}
        />
      </View>

      <Text style={styles.title}>All set.</Text>

      <Text style={styles.subtitle}>
        You'll be signed into your account in a moment. If nothing happens,
        click continue
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.buttonText}>Continue</Text>
        <Ionicons name="arrow-forward" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
    alignItems: "flex-start",
    padding: 20,
  },
  iconContainer: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: "black",
    borderWidth: 6,
    borderColor: "#276EF1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 30,
    textAlign: "left",
    marginLeft: 7,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "left",
    marginBottom: 30,
    lineHeight: 20,
    fontWeight: "400",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    marginRight: 10,
  },
});

export default WelcomeScreen;
