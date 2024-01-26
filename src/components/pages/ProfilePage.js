// import React from "react";
// import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import { Button, Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { useUser } from './UserContext';


// const ProfilePage = () => {

//     const navigation = useNavigation();
//     const { userName, userAccountName, updateUserDetails } = useUser();

//     const onEditProfile = () => {
//         navigation.navigate('EditProfilePage');
//       };
  
//     return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView>
//         <View style={styles.userInfoSection}>
//           <View style={{flexDirection: 'row', marginTop: 15}}>
//             <Avatar.Image 
//               source={require('..//..//..//assets/profileIcon.png')}
//               size={80}
//             />
//             <View style={{marginLeft: 20}}>
//               <Title style={[styles.title, {marginTop:15, marginBottom: 5,}]}>{userName}</Title>
//               <Caption style={styles.caption}>{`@${userAccountName}`}</Caption>
//             </View>
//           </View>
//         </View>
  
//         <View style={styles.userInfoSection}>
//           <View style={styles.row}>
//             <Icon name="map-marker-radius" color="#777777" size={20}/>
//             <Text style={{color:"#777777", marginLeft: 20}}>Cagayan de Oro City, Philippines</Text>
//           </View>
//           <View style={styles.row}>
//             <Icon name="phone" color="#777777" size={20}/>
//             <Text style={{color:"#777777", marginLeft: 20}}>09356362269</Text>
//           </View>
//           <View style={styles.row}>
//             <Icon name="email" color="#777777" size={20}/>
//             <Text style={{color:"#777777", marginLeft: 20}}>wynoahtabasan@gmail.com</Text>
//           </View>
//           <View style={styles.row}>
//             <Icon name="cake" color="#777777" size={20}/>
//             <Text style={{color:"#777777", marginLeft: 20}}>April 26, 2002</Text>
//           </View>
//         </View>
  
//         <View style={styles.infoBoxWrapper}>
//             <View style={[styles.infoBox, {
//               borderRightColor: '#dddddd',
//               borderRightWidth: 1
//             }]}>
//               <Title>21</Title>
//               <Caption>Age</Caption>
//             </View>
//             <View style={[styles.infoBox, {
//               borderRightColor: '#dddddd',
//               borderRightWidth: 1
//             }]}>
//               <Title>24.62</Title>
//               <Caption>Body Mass Index</Caption>
//             </View>
//             <View style={styles.infoBox}>
//               <Title>156 cm</Title>
//               <Caption>Height</Caption>
//             </View>
//         </View>
  
//         <View style={styles.profileWrapper}>
//           <TouchableRipple onPress={() => {navigation.navigate('EditProfile')}}>
//             <View style={styles.profileItem}>
//               <Icon name="account-edit" color="#365486" size={25}/>
//               <Text style={styles.profileItemText}>Edit Profile</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.profileItem}>
//               <Icon name="credit-card" color="#365486" size={25}/>
//               <Text style={styles.profileItemText}>Payment</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.profileItem}>
//               <Icon name="account-check-outline" color="#365486" size={25}/>
//               <Text style={styles.profileItemText}>Support</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.profileItem}>
//               <Icon name="cog-outline" color="#365486" size={25}/>
//               <Text style={styles.profileItemText}>Settings</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {navigation.navigate('Landing')}}>
//             <View style={styles.profileItem}>
//               <Icon name="logout" color="#365486" size={25}/>
//               <Text style={styles.profileItemText}>Log Out</Text>
//             </View>
//           </TouchableRipple>
//         </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   };
  
//   export default ProfilePage;
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: 50,
//     },
//     userInfoSection: {
//       paddingHorizontal: 30,
//       marginBottom: 25,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//     },
//     caption: {
//       fontSize: 14,
//       lineHeight: 14,
//       fontWeight: '500',
//     },
//     row: {
//       flexDirection: 'row',
//       marginBottom: 10,
//     },
//     infoBoxWrapper: {
//       borderBottomColor: '#dddddd',
//       borderBottomWidth: 1,
//       borderTopColor: '#dddddd',
//       borderTopWidth: 1,
//       flexDirection: 'row',
//       height: 100,
//     },
//     infoBox: {
//       width: '33.33%',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     profileWrapper: {
//       marginTop: 10,
//     },
//     profileItem: {
//       flexDirection: 'row',
//       paddingVertical: 15,
//       paddingHorizontal: 30,
//     },
//     profileItemText: {
//       color: '#777777',
//       marginLeft: 20,
//       fontWeight: '600',
//       fontSize: 16,
//       lineHeight: 26,
//     },
//   });

import React from "react";
import { Button, Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from './UserContext';
import styles from '../../config/styles';


const ProfilePage = () => {
  const navigation = useNavigation();
  const { userName, userAccountName, updateUserDetails, bmi, userEmail } = useUser();

    const onEditProfile = () => {
        navigation.navigate('EditProfile');
      };
  
    return (
      <SafeAreaView style={styles.profileContainer}>
        <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={require('..//..//..//assets/profileIcon.png')}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {marginTop:15, marginBottom: 5,}]}>{userName}</Title>
              <Caption style={styles.caption}>{`@${userAccountName}`}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#365486" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>Cagayan de Oro City, Philippines</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#365486" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>09356362269</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#365486" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>wynoahtabasan@gmail.com</Text>
          </View>
          <View style={styles.row}>
            <Icon name="cake" color="#365486" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>April 26, 2002</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>21</Title>
            <Caption>Age</Caption>
          </View>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>{bmi}</Title>
            <Caption>Body Mass Index</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>155 cm</Title>
            <Caption>Height</Caption>
          </View>
        </View>

        <View style={styles.profileWrapper}>
          <TouchableRipple onPress={onEditProfile}>
            <View style={styles.profileItem}>
              <Icon name="account-edit" color="#365486" size={25}/>
              <Text style={styles.profileItemText}>Edit Profile</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.profileItem}>
              <Icon name="credit-card" color="#365486" size={25}/>
              <Text style={styles.profileItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.profileItem}>
              <Icon name="account-check-outline" color="#365486" size={25}/>
              <Text style={styles.profileItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.profileItem}>
              <Icon name="cog-outline" color="#365486" size={25}/>
              <Text style={styles.profileItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {navigation.navigate('Login')}}>
            <View style={styles.profileItem}>
              <Icon name="logout" color="#365486" size={25}/>
              <Text style={styles.profileItemText}>Log Out</Text>
            </View>
          </TouchableRipple>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ProfilePage;
  
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: 50,
  //   },
  //   userInfoSection: {
  //     paddingHorizontal: 30,
  //     marginBottom: 25,
  //   },
  //   title: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //   },
  //   caption: {
  //     fontSize: 14,
  //     lineHeight: 14,
  //     fontWeight: '500',
  //   },
  //   row: {
  //     flexDirection: 'row',
  //     marginBottom: 10,
  //   },
  //   infoBoxWrapper: {
  //     borderBottomColor: '#dddddd',
  //     borderBottomWidth: 1,
  //     borderTopColor: '#dddddd',
  //     borderTopWidth: 1,
  //     flexDirection: 'row',
  //     height: 100,
  //   },
  //   infoBox: {
  //     width: '50%',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   profileWrapper: {
  //     marginTop: 10,
  //   },
  //   profileItem: {
  //     flexDirection: 'row',
  //     paddingVertical: 15,
  //     paddingHorizontal: 30,
  //   },
  //   profileItemText: {
  //     color: '#777777',
  //     marginLeft: 20,
  //     fontWeight: '600',
  //     fontSize: 16,
  //     lineHeight: 26,
  //   },
  // });
