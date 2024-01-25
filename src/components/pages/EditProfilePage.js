import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useUser } from './UserContext'; // Import useUser from your context


const EditProfilePage = ({ navigation }) => {
  const { userName, userEmail, updateUserDetails } = useUser();
  const [editedName, setEditedName] = useState(userName);
  const [editedEmail, setEditedEmail] = useState(userEmail);

  const onSaveChanges = () => {
  // Add logic to save edited details using updateUserDetails from context
    updateUserDetails(editedName, editedEmail);

  // Navigate back to the previous screen (ProfilePage)
     navigation.goBack();
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Edit Name:</Text>
        <TextInput
          style={styles.input}
          value={editedName}
          onChangeText={(text) => setEditedName(text)}
        />

        <Text>Edit Email:</Text>
        <TextInput
          style={styles.input}
          value={editedEmail}
          onChangeText={(text) => setEditedEmail(text)}
        />
        {/* Add more TextInput components for other editable fields */}

        <Button mode="contained" onPress={onSaveChanges} style={styles.button}>
          Save Changes
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default EditProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#365486',
  }
});
