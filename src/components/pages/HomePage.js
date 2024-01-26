import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomePage = () => {
  const navigation = useNavigation();

  const handleNavigateToDummy = () => {
    navigation.navigate("Dummy");
  };

  const handleNavigateToHydrationReminder = () => {
    navigation.navigate("HydrationReminder");
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={handleNavigateToDummy} style={styles.button}>
        <Text style={styles.buttonText}>Dummy Screen</Text>
      </TouchableOpacity> */}

      <HydrationReminderButton onPress={handleNavigateToHydrationReminder} />
    </View>
  );
};

const HydrationReminderButton = ({ onPress }) => {
  return (
    <View style={styles.hydrationReminderContainer}>
      <Image source={require('..//..//../assets/water.png')} style={styles.waterImage} />
      <Text style={styles.hydrationReminderText}>
        Stay refreshed with our{" "}
        <Text style={styles.hydrationReminderHighlight}>Hydration Reminder!</Text>
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.arrowButton}>
        <Icon name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  button: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#365486",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  hydrationReminderContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  hydrationReminderText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#333333",
  },
  hydrationReminderHighlight: {
    color: "#28a745",
    fontWeight: "bold",
  },
  waterImage: {
    width: '100%', // Set width to 100% to span across the screen
    height: 200,   // Set height according to your image size
    marginBottom: 10,
  },
  arrowButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28a745", // or any color you prefer
    borderRadius: 20,
    marginTop: 10,
  },
});

export default HomePage;
