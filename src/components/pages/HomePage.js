import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
  const navigation = useNavigation();  
  
  return (
    <View style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",}}>
      <TouchableOpacity onPress={() => navigation.navigate("Dummy")} icon="account-plus" mode="contained" style={styles.button}>
          <Text style={styles.buttonText}>Dummy Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: '#ffffff',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    backgroundColor: '#365486',
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo:{
    width: 350,
    height: 350,
    marginTop: -130,
    marginBottom: 0,
    marginLeft: 15
},
title: {
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 20,
  marginTop: -80,
  marginLeft: 80

},
}
)