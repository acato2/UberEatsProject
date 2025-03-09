import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhoneInput from "../components/PhoneInput";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LandingScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/ubereats.png")} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Use your Uber account to get started</Text>

        <PhoneInput
          onChangeText={setPhoneNumber}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          placeholder="232 188 7651"
        />
      </View>

      {phoneNumber.length > 0 && (
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate("PhoneInputScreen")}
        >
          <Ionicons name="arrow-forward-outline" size={40} color="gray" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 15,
    lineHeight: 36,
  },
  arrowButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
  },
});

export default LandingScreen;
