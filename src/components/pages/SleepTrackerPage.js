import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const SleepTrackerPage = () => {
  const navigation = useNavigation();

  const [isSleepTimePickerVisible, setSleepTimePickerVisible] = useState(false);
  const [isWakeUpTimePickerVisible, setWakeUpTimePickerVisible] = useState(false);
  const [sleepTime, setSleepTime] = useState(null);
  const [wakeUpTime, setWakeUpTime] = useState(null);
  const [sleepDuration, setSleepDuration] = useState(null);

  const showSleepTimePicker = () => {
    setSleepTimePickerVisible(true);
  };

  const hideSleepTimePicker = () => {
    setSleepTimePickerVisible(false);
  };

  const handleSleepTimeConfirm = (selectedTime) => {
    setSleepTime(moment(selectedTime).format('hh:mm A'));
    hideSleepTimePicker();
  };

  const showWakeUpTimePicker = () => {
    setWakeUpTimePickerVisible(true);
  };

  const hideWakeUpTimePicker = () => {
    setWakeUpTimePickerVisible(false);
  };

  const handleWakeUpTimeConfirm = (selectedTime) => {
    setWakeUpTime(moment(selectedTime).format('hh:mm A'));
    hideWakeUpTimePicker();
  };

  const calculateSleepDuration = () => {
    if (sleepTime && wakeUpTime) {
      const sleepMoment = moment(sleepTime, 'hh:mm A');
      const wakeUpMoment = moment(wakeUpTime, 'hh:mm A');

      let durationInMilliseconds = wakeUpMoment.diff(sleepMoment);

      if (durationInMilliseconds < 0) {
        durationInMilliseconds += 24 * 60 * 60 * 1000;
      }

      const durationInHours = durationInMilliseconds / (1000 * 60 * 60);

      setSleepDuration(durationInHours.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Tracker</Text>

      <TouchableOpacity onPress={showSleepTimePicker} style={styles.input}>
        <Text style={styles.inputText}>{sleepTime ? sleepTime : "Select Sleep Time"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={showWakeUpTimePicker} style={styles.input}>
        <Text style={styles.inputText}>{wakeUpTime ? wakeUpTime : "Select Wake Up Time"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={calculateSleepDuration}>
        <Text style={styles.buttonText}>Calculate Sleep Duration</Text>
      </TouchableOpacity>

      {sleepDuration !== null && (
        <Text style={styles.resultText}>
          You slept for {sleepDuration} hours.
        </Text>
      )}

      <DateTimePickerModal
        isVisible={isSleepTimePickerVisible}
        mode="time"
        onConfirm={handleSleepTimeConfirm}
        onCancel={hideSleepTimePicker}
      />

      <DateTimePickerModal
        isVisible={isWakeUpTimePickerVisible}
        mode="time"
        onConfirm={handleWakeUpTimeConfirm}
        onCancel={hideWakeUpTimePicker}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  resultText: {
    fontSize: 20,
    marginTop: 20,
    color: '#00aaff',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    backgroundColor: '#365486',
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SleepTrackerPage;