import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../config/styles';

const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const HydrationReminderPage = () => {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  const totalSeconds = parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60;

  useEffect(() => {
    let interval;

    if (timerRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, remainingTime]);

  const handleStartTimer = () => {
    if (totalSeconds <= 0) {
      Alert.alert('Invalid Time', 'Please enter a valid positive number for the timer.');
      return;
    }

    setRemainingTime(totalSeconds);
    setTimerRunning(true);
  };

  const handleStopTimer = () => {
    setTimerRunning(false);
    setRemainingTime(null);
  };

  useEffect(() => {
    if (remainingTime === 0) {
      Alert.alert('Time to Drink Water', 'Stay hydrated! Drink a glass of water.');
      setTimerRunning(false);
    }
  }, [remainingTime]);

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Hydration Reminder</Text>
      <View style={styles.pickerContainer}>
        <View style={styles.pickerWithUnit}>
          <Picker
            selectedValue={hours}
            onValueChange={(value) => setHours(value)}
            style={styles.picker}
          >
            {[...Array(24)].map((_, index) => (
              <Picker.Item label={index.toString()} value={index.toString()} key={index} />
            ))}
          </Picker>
          <Text style={styles.unitText}>Hrs</Text>
        </View>

        <View style={styles.pickerWithUnit}>
          <Picker
            selectedValue={minutes}
            onValueChange={(value) => setMinutes(value)}
            style={styles.picker}
          >
            {[...Array(60)].map((_, index) => (
              <Picker.Item label={index.toString()} value={index.toString()} key={index} />
            ))}
          </Picker>
          <Text style={styles.unitText}>Min</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button2} onPress={handleStartTimer}>
        <Text style={styles.buttonText2}>Start Timer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stopbutton} onPress={handleStopTimer}>
        <Text style={styles.stopButtonText}>Stop Timer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      
      {remainingTime !== null && (
        <Text style={styles.remainingTime}>Remaining Time: {formatTime(remainingTime)}</Text>
      )}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   pickerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center', // Center the row
//     marginBottom: 20,
//   },
//   pickerWithUnit: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   picker: {
//     width: 100,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginHorizontal: 5,
//     justifyContent: 'center',
//   },
//   unitText: {
//     marginLeft: 10,
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   remainingTime: {
//     marginTop: 20,
//   },
// });

export default HydrationReminderPage;
