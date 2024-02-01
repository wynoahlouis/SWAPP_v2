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