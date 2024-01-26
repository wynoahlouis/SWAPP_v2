// import React, { useState } from 'react';
// import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
// import { Button, Text } from 'react-native-paper';
// import { useUser } from './UserContext'; // Import useUser from your context


// const EditProfilePage = ({ navigation }) => {
//   const { userName, userAccountName, updateUserDetails } = useUser();
//   const [editedName, setEditedName] = useState(userName);
//   const [editedAccountName, setEditedAccountName] = useState(userAccountName);

//   const onSaveChanges = () => {
//   // Add logic to save edited details using updateUserDetails from context
//     updateUserDetails(editedName, editedAccountName);

//   // Navigate back to the previous screen (ProfilePage)
//      navigation.goBack();
// };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.formContainer}>
//         <Text>Edit Name:</Text>
//         <TextInput
//           style={styles.input}
//           value={editedName}
//           onChangeText={(text) => setEditedName(text)}
//         />

//         <Text>Edit Email:</Text>
//         <TextInput
//           style={styles.input}
//           value={editedAccountName}
//           onChangeText={(text) => setEditedAccountName(text)}
//         />
//         {/* Add more TextInput components for other editable fields */}

//         <Button mode="contained" onPress={onSaveChanges} style={styles.button}>
//           Save Changes
//         </Button>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default EditProfilePage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   formContainer: {
//     width: '80%',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#365486',
//   }
// });

// ------------------------------------------------

import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useUser } from './UserContext';

const EditProfilePage = ({ navigation }) => {
  const { userName, userAccountName, updateUserDetails, userEmail } = useUser();
  const [editedName, setEditedName] = useState(userName);
  const [editedAccountName, setEditedAccountName] = useState(userAccountName);


  const onSaveChanges = () => {
    // Add logic to save edited details using updateUserDetails from context
    updateUserDetails(editedName, editedAccountName);

    // Navigate back to the previous screen (ProfilePage)
    navigation.goBack();
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

          <Button mode="contained" onPress={onSaveChanges} style={styles.button}>
            Save Changes
          </Button>
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
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    marginTop: 20,
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
    marginTop: 20,
  },
});

// ------------------------------------------------


