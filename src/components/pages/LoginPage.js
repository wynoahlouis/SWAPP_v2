import React from "react";
import LoginForm from "../forms/LoginForm";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginPage(props) {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ padding: 20 }}
      keyboardShouldPersistTaps="handled"
    >
      <LoginForm {...props} />
    </KeyboardAwareScrollView>
  );
}