import React from "react";
import RegistrationForm from "../forms/RegistrationForm"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function RegistrationPage(props) {
  return (
    <KeyboardAwareScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    style={{ padding: 20 }}
    keyboardShouldPersistTaps="handled"
    >
      <RegistrationForm {...props} />
    </KeyboardAwareScrollView>
  );
}