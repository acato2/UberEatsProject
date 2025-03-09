import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PasswordInputScreen = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, John</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please enter your password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.helperButton}>
        <Text style={styles.helperButtonText}>I've forgotten my password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helperButton}>
        <Text style={styles.helperButtonText}>I can't sign in</Text>
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("PhoneInputScreen")}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("PhoneVerificationScreen")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="arrow-forward" size={26} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 100,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 25,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#7F7F7F",
  },
  iconContainer: {
    padding: 5,
  },
  helperButton: {
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  helperButtonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  backButton: {
    backgroundColor: "#EEEEEE",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 20,
  },
  nextButtonText: {
    fontSize: 17,
    marginRight: 5,
    color: "gray",
    fontWeight: "700",
  },
});

export default PasswordInputScreen;
