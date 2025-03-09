import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OtpInput from "../components/OTPInput";
import { useNavigation } from "@react-navigation/native";

const PhoneVerificationScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter the 4-digit code sent to you at 05599224612
      </Text>

      <OtpInput otp={otp} setOtp={setOtp} />

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>I haven’t received a code (0.09)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.passwordButton}>
        <Text style={styles.passwordText}>Log in with password</Text>
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("PasswordInputScreen")}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => navigation.navigate("EmailVerificationScreen")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="arrow-forward" size={26} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 25,
  },
  resendButton: {
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: "#7F7F7F",
    fontWeight: "500",
  },
  passwordButton: {
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  passwordText: {
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
    backgroundColor: "#EDEDED",
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

export default PhoneVerificationScreen;
