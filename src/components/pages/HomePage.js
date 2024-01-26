import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
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
      <ScrollView horizontal style={styles.fitnessStatisticsContainer}>
        <FitnessStatistic title="Steps" value="5,467" />
        <FitnessStatistic title="Calories" value="1,890" />
        <FitnessStatistic title="Distance" value="3.2 km" />
        {/* Add more fitness statistics here */}
      </ScrollView>
      <HydrationReminderButton onPress={handleNavigateToHydrationReminder} />
    </View>
  );
};

const FitnessStatistic = ({ title, value }) => {
  return (
    <View style={styles.fitnessStatisticContainer}>
      <Text style={styles.fitnessStatisticTitle}>{title}</Text>
      <Text style={styles.fitnessStatisticValue}>{value}</Text>
    </View>
  );
};

const HydrationReminderButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.hydrationReminderContainer} onPress={onPress}>
      <View style={styles.hydrationReminderImageContainer}>
        <Image source={require('..//..//../assets/hydration.png')} style={styles.waterImage} />
      </View>
      <View style={styles.hydrationReminderTextContainer}>
        <Text style={styles.hydrationReminderText}>
          Stay refreshed with our{" "}
          <Text style={styles.hydrationReminderHighlight}>Hydration Reminder!</Text>
        </Text>
      </View>
      <View style={styles.arrowButtonContainer}>
        <Icon name="arrow-right" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5", // Add background color
  },
  fitnessStatisticsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white", // Add background color
    borderRadius: 10, // Add border radius
    padding: 10, // Add padding
  },
  fitnessStatisticContainer: {
    alignItems: "center",
    marginRight: 20,
    borderRadius: 10, // Add border radius
    padding: 10, // Add padding
  },
  fitnessStatisticTitle: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 5,
  },
  fitnessStatisticValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  hydrationReminderContainer: {
    alignItems: "center",
    marginTop: 0,
    borderRadius: 10, // Add border radius
    padding: 10, // Add padding
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hydrationReminderImageContainer: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  waterImage: {
    width: '100%', // Set width to 100% to span across the screen
    height: '100%', // Set height to 100% to span across the screen
    resizeMode: "contain",
  },
  hydrationReminderTextContainer: {
    flex: 1,
    marginLeft: 10,
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
  arrowButtonContainer: {
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