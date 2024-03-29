import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useUser } from './UserContext';

const EditProfilePage = ({ navigation }) => {
  const { userName, userAccountName, updateUserDetails, userEmail } = useUser();
  const [editedName, setEditedName] = useState(userName);
  const [editedAccountName, setEditedAccountName] = useState(userAccountName);


  const onSaveChanges = () => {
    updateUserDetails(editedName, editedAccountName);

    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContent}>
        <View style={styles.userInfoSection}>
          <Image
            source={require('..//..//..//assets/profileIcon.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.formContainer}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={editedName}
            onChangeText={(text) => setEditedName(text)}
          />

          <Text>Username:</Text>
          <TextInput
            style={styles.input}
            value={editedAccountName}
            onChangeText={(text) => setEditedAccountName(text)}
          />  

          <View style={styles.buttonContainer}>
            <TouchableOpacity mode="contained" onPress={onSaveChanges} style={styles.button}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    width: '80%',
  },
  userInfoSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 60,
  },
  formContainer: {
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: '#365486',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#EBF3FF',
    color: '#0F1035',
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
  buttonContainer: {
    alignItems: 'center'
  }
});



