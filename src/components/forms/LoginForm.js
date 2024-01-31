import { View, ToastAndroid, StyleSheet, Image, TouchableOpacity} from "react-native";
import React from "react";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import fetchServices from "../../services/fetchServices"


export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });
  
  const handleLogin = async (values) => {
    try {
      const url = "http://192.168.1.5:8000/api/v1/login";
      // const url = "http://192.168.116.40:8000/api/v1/login";
      // const url = "http://192.168.43.94:8000/api/v1/login";


      const result = await fetchServices.postData(url, values);
      console.debug(result);
      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        return (
          <View styles={{ flex: 1 }}>
            <Text style={styles.title}></Text>
            <Image source={require('../../../assets/SWAPP_logo_clear.png')} style={styles.logo} resizeMode='contain'/>
            <Text style={styles.appName}>SWAPP</Text>
            <View style={{paddingRight: 10, paddingLeft:10}}>
            <TextInput
              mode="outlined"
              placeholder="Email"
              label="Email"
              left={<TextInput.Icon icon="email" color={'#365486'} />}
              // style={{ marginTop: 10 }}
              style={styles.userInput}
              defaultValue={values.email}
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email && touched.email}
              onFocus={() => setTouched({ email: true }, false)}
            />
            {errors.email && touched.email && (
              <HelperText type="error" visible={errors.email}>
                {errors.email}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              placeholder="Password"
              label="Password"
              left={<TextInput.Icon icon="key" color={'#365486'} />}
              secureTextEntry={!showPass}
              right={
                <TextInput.Icon
                  icon={showPass ? "eye" : "eye-off"}
                  onPress={() => setShowPass(!showPass)}
                  color={'#365486'}
                />
              }
              style={{ marginTop: 10, marginBottom: 0}}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password && touched.password}
              onFocus={() => setTouched({ password: true }, false)}
            />
            {errors.password && touched.password && (
              <HelperText type="error" visible={errors.password}>
                {errors.password}
              </HelperText>
            )}
          </View>
            <TouchableOpacity
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={handleSubmit}
              icon="login"
              mode="contained"
              style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>  
            </TouchableOpacity>

            <View style={styles.infoText}>
            <Text style={{fontSize:15}}> Don't have an account?{' '}
              <Text style={styles.signUpText} onPress={() => navigation.navigate("Register")}>Sign up</Text>
            </Text>

            </View>

            {/* <TouchableOpacity
              disabled={isSubmitting}
              onPress={() => navigation.navigate("Register")}
              icon="account-plus"
              mode="contained"
              style={styles.button}
            >
            <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity> */}
          </View>
        );
      }}
    </Formik>
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
    width: '70%',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: '#365486',
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo:{
    width: 250,
    height: 250,
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 75,
    alignItems: 'center'
},
title: {
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 0,
  marginTop: 20
  // marginTop: -80,
  // marginLeft: 80
},
appName:{
  marginTop: 5,
  marginBottom:10,
  fontSize: 40,
  fontWeight: '900', // React Native uses string values for fontWeight
  lineHeight: 38,
  letterSpacing: 3,
  textAlign: 'center',
  color: '#365486',
},
signUpText: {
  color: '#365486', // Set the desired text color
  textDecorationLine: 'underline', // Underline the text to indicate it's clickable
},
infoText: {
  marginTop: 10,
  alignItems: 'center'
}
// userInput:{
//   marginTop: 10,
//   borderRadius: 40
// }
}
)