import { View } from "react-native";
import React from "react";
import LoginForm from "../forms/LoginForm";

export default function LoginPage(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <LoginForm {...props} />
    </View>
  );
}