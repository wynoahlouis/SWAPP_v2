  import { View, ToastAndroid, StyleSheet, Image, TouchableOpacity } from "react-native";
  import React from "react";
  import { Button, Text, TextInput } from "react-native-paper";
  import fetchServices from "../../services/fetchServices"
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  //Added PERO TRIAL RA
  import { useNavigation } from '@react-navigation/native';

  export default function RegistrationForm({ navigation }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repassword, setRepassword] = React.useState("");
    const [showPass, setShowPass] = React.useState(false);
    const [showRePass, setShowRePass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const showToast = (message = "Something went Wrong") => {
      ToastAndroid.show(message,  3000);
    };

    
    const handleRegistration = async () => {
      try{

        if(name === '' || email === '' || password === '' || repassword === ''){
          showToast("Please input required data");
          setIsError(true);
          return false;
        }

        if(password === '' != repassword === ''){
          showToast("Please match password");
          setIsError(true);
          return false;
        }

        const url = 'http://192.168.1.5:8000/api/v1/register';
        // const url = 'http://192.168.116.40:8000/api/v1/register';
        // const url = 'http://192.168.43.94:8000/api/v1/register';



        const data = {
          name,
          email,
          password,
          password_confirmation: repassword,
        }

        const result = await fetchServices.postData(url, data);

        console.debug(result);

        if(result?.message != null){
          showToast(result?.message); 
        }else{
          navigation.navigate("Login")
        }
      }catch(e){
        showToast(e.toString());
      }
    }

    return (
      <View styles={{ flex: 1 }}>
        
        <Image source={require('../../../assets/newlogo.png')} style={styles.logo} resizeMode='contain'/>
        <Text style={styles.title}>Create an account:</Text>
        <TextInput
          mode="outlined"
          placeholder="Name"
          label="Name"
          left={<TextInput.Icon icon="account" color={'#365486'} />}
          style={{ marginTop: 10 }}
          value={name}
          onChangeText={setName}
          error={isError}
        />
        <TextInput
          mode="outlined"
          placeholder="Email"
          label="Email"
          left={<TextInput.Icon icon="email" color={'#365486'} />}

          style={{ marginTop: 10 }}
          value={email}
          onChangeText={setEmail}
          error={isError}
        />
        <TextInput
          mode="outlined"
          placeholder="Password"
          label="Password"

          left={<TextInput.Icon icon="lock" color={'#365486'} />}

          secureTextEntry={!showPass}
          right={
            <TextInput.Icon
              icon={showPass ? "eye" : "eye-off"}
              onPress={() => setShowPass(!showPass)}
              color={'#365486'}
            />
          }
          style={{ marginTop: 10 }}
          value={password}
          onChangeText={setPassword}
          error={isError}
        />
        <TextInput
          mode="outlined"
          placeholder="Re-type Password"
          label="Re-type Password"
          left={<TextInput.Icon icon="lock" color={'#365486'}/>}

          secureTextEntry={!showRePass}
          right={
            <TextInput.Icon
              icon={showPass ? "eye" : "eye-off"}
              onPress={() => setShowRePass(!showRePass)}
              color={'#365486'}
            />
          }
          style={{ marginTop: 10, marginBottom:20}}
          value={repassword}
          onChangeText={setRepassword}
          error={isError}
        />
        <TouchableOpacity
          disabled={loading}
          loading={loading}
          icon="account-plus"
          mode="contained"
          style={styles.button}
          onPress={handleRegistration}
        >
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={loading}
          onPress={() => navigation.pop()}
          icon="arrow-left"
          mode="contained"
          style={styles.button}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }


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
      marginLeft: 30
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    logo:{
      width: 350,
      height: 160,
      marginTop: 30,
      marginBottom: 10,
      alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
    color: '#365486',
  },
  appName:{
    marginTop: 5,
    marginBottom:10,
    fontSize: 40,
    fontWeight: '900', 
    lineHeight: 38,
    letterSpacing: 3,
    textAlign: 'center',
  },
  }
  )
