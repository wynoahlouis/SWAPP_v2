import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

const DummyScreen = () => {
  const navigation = useNavigation();  
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View>
        <Image source={require('../../../assets/SWAPP_logo_clear.png')} style={styles.logo} resizeMode='contain'/>
      </View>

      {/* Message */}
      <Text style={styles.title}>This feature is not available yet</Text>

      {/* Go back button */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: 'center', 
    backgroundColor: '#ffffff',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    backgroundColor: '#365486',
    borderRadius: 30,
    borderWidth: 2.5,
    borderStyle: 'solid',
    borderColor: '#365486',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
