import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from '../../config/styles';

export default function SleepTrackerApp() {
  const [isSleepTimePickerVisible, setSleepTimePickerVisible] = useState(false);
  const [isWakeTimePickerVisible, setWakeTimePickerVisible] = useState(false);
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');
  const [sleepResult, setSleepResult] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

  const showSleepTimePicker = () => {
    setSleepTimePickerVisible(true);
  };

  const hideSleepTimePicker = () => {
    setSleepTimePickerVisible(false);
  };

  const handleSleepTimeConfirm = (selectedDate) => {
    const formattedTime = moment(selectedDate).format('hh:mm A');
    setSleepTime(formattedTime);
    hideSleepTimePicker();
  };

  const showWakeTimePicker = () => {
    setWakeTimePickerVisible(true);
  };

  const hideWakeTimePicker = () => {
    setWakeTimePickerVisible(false);
  };

  const handleWakeTimeConfirm = (selectedDate) => {
    const formattedTime = moment(selectedDate).format('hh:mm A');
    setWakeTime(formattedTime);
    hideWakeTimePicker();
  };

  const validateForm = () => {
    if (!sleepTime || !wakeTime) {
      alert('All fields are required!');
    } else {
      const sleepMoment = moment(sleepTime, 'hh:mm A');
      const wakeMoment = moment(wakeTime, 'hh:mm A');
  
      // Check if wake time is before sleep time but on the next day
      if (wakeMoment.isBefore(sleepMoment) && wakeMoment.isSame(moment().startOf('day'))) {
        alert('Wake time should be later than sleep time!');
      } else {
        calculateSleepTime();
      }
    }
  };
  
  
  

  const calculateSleepTime = () => {
    const sleepMoment = moment(sleepTime, 'hh:mm A');
    const wakeMoment = moment(wakeTime, 'hh:mm A');
    
    // Check if wake time is earlier than sleep time but on the next day
    if (wakeMoment.isBefore(sleepMoment) && wakeMoment.isSame(moment().startOf('day'))) {
      alert('Wake time should be later than sleep time!');
      return;
    }
  
    // Add a day to wakeMoment if it's earlier than sleepMoment
    if (wakeMoment.isBefore(sleepMoment)) {
      wakeMoment.add(1, 'day');
    }
  
    const timeSlept = wakeMoment.diff(sleepMoment, 'hours', true);
  
    const currentDate = moment().format('YYYY-MM-DD hh:mm A');
    setSleepResult([...sleepResult, { sleepTime, wakeTime, timeSlept, currentDate }].reverse());
    setSleepTime('');
    setWakeTime('');
  };
  

  const deleteSleepEntry = (index) => {
    const newSleepResult = [...sleepResult];
    newSleepResult.splice(index, 1);
    setSleepResult(newSleepResult);
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Sleep Tracker</Text>
      <TouchableOpacity onPress={showSleepTimePicker} style={styles.input}>
        <Text style={styles.inputText}>{sleepTime ? sleepTime : 'Select Sleep Time'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isSleepTimePickerVisible}
        mode="time"
        onConfirm={handleSleepTimeConfirm}
        onCancel={hideSleepTimePicker}
      />

      <TouchableOpacity onPress={showWakeTimePicker} style={styles.input}>
        <Text style={styles.inputText}>{wakeTime ? wakeTime : 'Select Wake Time'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isWakeTimePickerVisible}
        mode="time"
        onConfirm={handleWakeTimeConfirm}
        onCancel={hideWakeTimePicker}
      />

      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Calculate Sleep Time</Text>
      </TouchableOpacity>
      {/* <Text style={styles.subtitle}>Sleep History</Text> */}
      <TouchableOpacity style={styles.button2} onPress={() => setShowHistory(!showHistory)}>
        <Text style={styles.buttonText2}>{showHistory ? 'Hide History' : 'Show History'}</Text>
      </TouchableOpacity>
      {showHistory && (
        <ScrollView style={styles.scrollView}>
          {sleepResult.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>Date and Time: {item.currentDate}</Text>
              <Text style={styles.listItemText}>Sleep Time: {item.sleepTime}</Text>
              <Text style={styles.listItemText}>Wake Time: {item.wakeTime}</Text>
              <Text style={styles.listItemText}>Time Slept: {item.timeSlept.toFixed(2)} hours</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteSleepEntry(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#1e90ff',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   listTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   listItem: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   listItemText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   deleteButton: {
//     backgroundColor: '#ff6666',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     width: '100',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   deleteButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   scrollView: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '90%',
//     padding: 5,
//     marginBottom: 15,
//   },
//   toggleButton: {
//     backgroundColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     width: '80%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   toggleButtonText: {
//     color: '#333',
//     fontWeight: 'bold',
//   },
// });
