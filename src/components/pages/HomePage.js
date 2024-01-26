// import React from "react";
// import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/FontAwesome";
// // import styles from '../../config/styles';


// const HomePage = () => {
//   const navigation = useNavigation();

//   const handleNavigateToDummy = () => {
//     navigation.navigate("Dummy");
//   };

//   const handleNavigateToHydrationReminder = () => {
//     navigation.navigate("HydrationReminder");
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal style={styles.fitnessStatisticsContainer}>
//         <FitnessStatistic title="Steps" value="5,467" />
//         <FitnessStatistic title="Calories" value="1,890" />
//         <FitnessStatistic title="Distance" value="3.2 km" />
//         {/* Add more fitness statistics here */}
//       </ScrollView>
//       <HydrationReminderButton onPress={handleNavigateToHydrationReminder} />
//     </View>
//   );
// };

// const FitnessStatistic = ({ title, value }) => {
//   return (
//     <View style={styles.fitnessStatisticContainer}>
//       <Text style={styles.fitnessStatisticTitle}>{title}</Text>
//       <Text style={styles.fitnessStatisticValue}>{value}</Text>
//     </View>
//   );
// };

// const HydrationReminderButton = ({ onPress }) => {
//   return (
//     <TouchableOpacity style={styles.hydrationReminderContainer} onPress={onPress}>
//       <View style={styles.hydrationReminderImageContainer}>
//         <Image source={require('..//..//../assets/hydration.png')} style={styles.waterImage} />
//       </View>
      
//       {/* <View style={styles.hydrationReminderTextContainer}>
//         <Text style={styles.hydrationReminderText}>
//           Stay refreshed with our{" "}
//           <Text style={styles.hydrationReminderHighlight}>Hydration Reminder!</Text>
//         </Text>
//       </View> */}

//       {/* <View style={styles.hydrationReminderTextContainer}>
//         <Text style={styles.hydrationReminderText}>
//           It's better to {" "}
//           <Text style={styles.hydrationReminderHighlight}>HYDRATE </Text>
//           than to VIBRATE
//         </Text>
//       </View> */}

//       <View style={styles.hydrationReminderTextContainer}>
//         <Text style={styles.hydrationReminderText}>
//           Water Breaks Made Easy:  {" "}
//           <Text style={styles.hydrationReminderHighlight}>Set A Reminder Now!</Text>
//         </Text>
//       </View>

//       <View style={styles.arrowButtonContainer}>
//         <Icon name="arrow-right" size={20} color="white" />
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#f5f5f5", // Add background color
//   },
//   fitnessStatisticsContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: "white", // Add background color
//     borderRadius: 10, // Add border radius
//     padding: 10, // Add padding
//   },
//   fitnessStatisticContainer: {
//     alignItems: "center",
//     marginRight: 20,
//     borderRadius: 10, // Add border radius
//     padding: 10, // Add padding
//   },
//   fitnessStatisticTitle: {
//     fontSize: 14,
//     color: "#333333",
//     marginBottom: 5,
//   },
//   fitnessStatisticValue: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333333",
//   },
//   hydrationReminderContainer: {
//     alignItems: "center",
//     marginTop: 0,
//     borderRadius: 10, // Add border radius
//     padding: 10, // Add padding
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   hydrationReminderImageContainer: {
//     width: 80,
//     height: 80,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   waterImage: {
//     width: '100%', // Set width to 100% to span across the screen
//     height: '100%', // Set height to 100% to span across the screen
//     resizeMode: "contain",
//   },
//   hydrationReminderTextContainer: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   hydrationReminderText: {
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: "center",
//     color: "#333333",
//   },
//   hydrationReminderHighlight: {
//     color: "#28a745",
//     fontWeight: "bold",
//   },
//   arrowButtonContainer: {
//     width: 40,
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#28a745", // or any color you prefer
//     borderRadius: 20,
//     marginTop: 10,
//   },
  
// });

// export default HomePage;


import React, {useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {ScrollView, Text, StyleSheet, View, ImageBackground, useWindowDimensions, Image, TouchableOpacity} from 'react-native';

const images = [
  'https://drivefordti.com/wp-content/uploads/2019/06/driverHydrationBlog-02.png',
  'https://www.somatechnology.com/app/uploads/2018/01/water-and-hydration-blog.png',
  'https://mymind.org/image/posts/0853ea02-d1fe-4b54-9f95-4bbef32ad322.jpg',
  'https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg?_=07167',
];
const topImage = {uri: 'https://www.freevector.com/uploads/vector/preview/30891/DRINK_MORE_WATER.jpg'};

const HomePage = () => {
  const {width: windowWidth} = useWindowDimensions();

  const navigation = useNavigation();

  const handleNavigateToHydrationReminder = () => {
    navigation.navigate("HydrationReminder");
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View scrollEnabled={false} style={styles.topContainer}>
      <ImageBackground source={topImage} style={{ width: '100%', height: undefined, alignItems: 'center', justifyContent: 'center', aspectRatio: 2}}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleNavigateToHydrationReminder} activeOpacity={0.2}>
            <Text style={styles.infoText}>
              {'STAY HYDRATED ➜'}
            </Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
      </View>
    
    {/* <TouchableOpacity onPress={handleNavigateToHydrationReminder} activeOpacity={0.8}>
      <View scrollEnabled={false} style={styles.topContainer}>
        <ImageBackground source={topImage} style={{ width: '100%', height: undefined, alignItems: 'center', justifyContent: 'center', aspectRatio: 2}}>
          <View style={styles.textContainer}>
            <Text style={styles.infoText}>
              {'STAY HYDRATED ➜'}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity> */}


    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <Text style={{ width: '50%', margin: 10}}>Hydration is vital for our health and well-being, as water makes up two thirds of our body and helps with many functions.</Text>
          <View style={styles.inlineImageBox}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2447/2447774.png' }}
              style={styles.inlineImage}
            />
          </View>
      </View>
      <View style={styles.inlineContainer}>
          <View style={styles.inlineImageBox}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10476/10476452.png' }}
              style={styles.inlineImage}
            />
          </View>
          <Text style={{ width: '50%', margin: 10}}> Body weight is correlated with health and fitness and can be used as an indicator of progress</Text>
      </View>
      <View style={styles.inlineContainer}>
        <Text style={{ width: '50%', margin: 10}}>Sleep plays a crucial role in tissue repair, hormone regulation, and overall health.</Text>
        <View style={styles.inlineImageBox}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3094/3094837.png' }}
            style={styles.inlineImage}
          />
        </View>
      </View>
    </View>
      {/* <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {images.map((image, imageIndex) => {
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];
          return (
            <View style={{width: windowWidth, height: 250}} key={imageIndex}>
            <ImageBackground source={{uri: randomImage}} style={styles.card}>
              <View style={styles.textContainer}>
                <Text style={styles.infoText}>
                  {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
      </View> */}
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 250}} key={imageIndex}>
                <ImageBackground source={{uri: image}} style={styles.card}>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: `#ffffff`,
    elevation: 5,
    shadowColor: '#2a2a2a',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#2a2a2a',
    bottom: 45,
  },
  infoText: {
    color: '#6fbf6f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineContainer: {
    backgroundColor: '#ffffff',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#2a2a2a',
  },
  inlineImage: {
    width: 90,
    height: 90,
  },
  inlineImageBox: {
    backgroundColor: '#ffffff',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    elevation: 5,
    shadowColor: '#2a2a2a',
  }
});

export default HomePage;