import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


function LandingPage() {
    const navigation = useNavigation();
    const handleLoginPress = () => {
    // Navigate to the Login page
        navigation.navigate('Login')
    };
    const handleSignupPress = () => {
        navigation.navigate('Register')
    };
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image source={require('../../../assets/SWAPP_logo_clear.png')} style={styles.logo} resizeMode='contain'/>
        </View>
        <Text style={styles.appName}>SWAPP</Text>
        <Text style={styles.subHeading}>Your companion for a healthier mind & body</Text>
        <View style={styles.loginsignup}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginText}>
                    GET STARTED!
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                <Text style={styles.SignupText}>
                    Signup
                </Text>
            </TouchableOpacity> */}
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#ffffff',
        // marginTop: 50,
    },
    loginsignup:{
        marginTop: 15,
    },
    subHeading: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        fontStyle: "italic",
        fontWeight: "500"
      },
    loginButton:{
        marginTop: 20,
        width: 300,
        padding: 15,
        textAlign: 'center',
        backgroundColor:'#365486',
        color:'#FFFFFF',
        fontSize: 25,
        borderRadius: 35,
        elevation: 10,
    },
    signupButton:{
        marginTop: 20,
        width: 300,
        padding: 15,
        display: 'flex',
        textAlign: 'center',
        borderRadius: 35,
        elevation: 10,
        backgroundColor:'#E8EAED',
    },
    loginText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    SignupText:{
        textAlign: 'center',
        color:'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    logo:{
        width: 500,
        height: 250,
        // marginTop: 70
    },

    appName:{
        marginTop: 10,
        fontSize: 40,
        fontWeight: '900', // React Native uses string values for fontWeight
        lineHeight: 66,
        letterSpacing: 3,
        textAlign: 'center',

    },
}
)
export default LandingPage;