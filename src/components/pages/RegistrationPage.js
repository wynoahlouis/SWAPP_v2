import { View } from "react-native";
import React from "react";
import RegistrationForm from "../forms/RegistrationForm"

export default function RegistrationPage(props) {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <RegistrationForm {...props} />
    </View>
  );
}