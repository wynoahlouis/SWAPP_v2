import React from "react";
import { Alert } from "react-native";
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

  const onLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => handleLogout(), style: "destructive",  }, 
      ],
      { cancelable: false }
    );
  };

  const handleLogout = () => {

    navigation.navigate('Login');
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
          <TouchableRipple onPress={onLogout}>
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
