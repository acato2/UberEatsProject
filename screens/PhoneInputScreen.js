import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhoneInput from "../components/PhoneInput";
import { useNavigation } from "@react-navigation/native";

const countryData = [
  { flag: "🇬🇧", code: "+44" },
  { flag: "🇺🇸", code: "+1" },
  { flag: "🇮🇳", code: "+91" },
];

const PhoneInputScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your mobile number</Text>

      <PhoneInput
        onChangeText={setPhoneNumber}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        placeholder="Mobile number"
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("PasswordInputScreen")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
        <Ionicons
          name="arrow-forward"
          size={24}
          color="white"
          style={styles.nextButtonIcon}
        />
      </TouchableOpacity>

      <Text style={styles.infoText}>
        By proceeding, you consent to get calls, WhatsApp, or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </Text>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../assets/googleicon.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={countryData}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setSelectedCountry(item);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.largeFlag}>{item.flag}</Text>
                <Text style={styles.countryCode}>{item.code}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    paddingTop: 100,
  },
  header: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 20,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingVertical: 16,
    marginTop: 25,
    position: "relative",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  nextButtonIcon: {
    position: "absolute",
    right: 15,
  },
  infoText: {
    fontSize: 12,
    color: "#888888",
    marginTop: 10,
    lineHeight: 20,
    fontWeight: "500",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#A4A4A4",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#888888",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 16,
    position: "relative",
  },
  googleIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 15,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default PhoneInputScreen;
