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
  const [showHistory, setShowHistory] = useState(false);

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

