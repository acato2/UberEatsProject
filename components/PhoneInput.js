import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const countryData = [
  { flag: "🇬🇧", code: "+44" },
  { flag: "🇺🇸", code: "+1" },
  { flag: "🇮🇳", code: "+91" },
];

const PhoneInput = ({ onChangeText, placeholder = "Enter phone number" }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.pickerWrapper}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.largeFlag}>{selectedCountry.flag}</Text>
          <Text style={styles.countryCode}>{selectedCountry.code}</Text>
          <Ionicons
            name="chevron-down"
            size={20}
            color="black"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType="phone-pad"
          onChangeText={onChangeText}
          returnKeyType="done"
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
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
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: "#f5f5f5",
  },
  pickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: 110,
    borderRightWidth: 1,
    borderRightColor: "#FFFFFF",
  },
  largeFlag: {
    fontSize: 27,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 5,
    lineHeight: 24,
  },
  arrowIcon: {
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#A4A4A4",
    paddingLeft: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 15,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
});

export default PhoneInput;
