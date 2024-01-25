import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';


const RecoveryPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleRecoverAccount = () => {
    // Add your account recovery logic here
    console.log('Recover Account:', { email });
    // For simplicity, just navigate to the Home page
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logofinal.png')} style={styles.logo} resizeMode='contain'/>
      <Text style={styles.title}>Account Recovery</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <CustomButton title="Recover Account" onPress={handleRecoverAccount} />
      <CustomButton title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  logo: {
    width: 200,
    height: 350,
    marginTop: -450,
    marginLeft: -200
  }
});

export default RecoveryPage;
