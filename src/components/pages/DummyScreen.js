import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";


const DummyScreen = () => {
  const navigation = useNavigation();  
  
  return (
    <SafeAreaView style={{flex: 1, padding: 20, justifyContent: "center",}}>     
        <View>
            <Image source={require('../../../assets/newlogo.png')} style={styles.logo} resizeMode='contain'/>
        </View> 
      <TouchableOpacity onPress={() => navigation.navigate("Home")} icon="account-plus" mode="contained" style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DummyScreen;

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
    backgroundColor: 'black',
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