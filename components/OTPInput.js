import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OtpInput = ({ otp, setOtp }) => {
  const inputRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={[
            styles.otpInput,
            focusedIndex === index ? styles.focusedInput : null,
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#EEEEEE",
    marginBottom: 15,
  },
  focusedInput: {
    borderColor: "black",
    borderWidth: 2,
  },
});

export default OtpInput;
