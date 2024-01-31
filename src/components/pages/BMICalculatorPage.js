import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import styles from '../../config/styles';
import { useUser } from './UserContext';

export default function BMICalculatorPage() {
  const { userName, userAccountName, updateUserDetails, bmi, height: userHeight } = useUser();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const currentDate = new Date().toLocaleString();

  const validateForm = () => {
    if (!height || !weight) {
      alert('All fields are required!');
    } else {
      countBmi();
    }
  };

  const countBmi = () => {
    const calculatedBmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
    let result = '';

    if (calculatedBmi < 18.5) {
      result = 'Underweight';
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.99) {
      result = 'Healthy';
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.99) {
      result = 'Overweight';
    } else if (calculatedBmi >= 30 && calculatedBmi <= 34.99) {
      result = 'Obese';
    } else if (calculatedBmi >= 35) {
      result = 'Extremely obese';
    }

    updateUserDetails(userName, userAccountName, calculatedBmi, userHeight);

    setBmiResult([...bmiResult, { currentDate, height, weight, bmi: calculatedBmi, result }].reverse());
    setHeight('');
    setWeight('');
  };

  const deleteItem = (index) => {
    const newBmiResult = [...bmiResult];
    newBmiResult.splice(index, 1);
    setBmiResult(newBmiResult);
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setShowHistory(!showHistory)}>
        <Text style={styles.buttonText2}>{showHistory ? 'Hide History' : 'Show History'}</Text>
      </TouchableOpacity>
      {showHistory && (
        <ScrollView style={styles.scrollView}>
          {bmiResult.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>Date: {item.currentDate}</Text>
              <Text style={styles.listItemText}>Height: {item.height} cm</Text>
              <Text style={styles.listItemText}>Weight: {item.weight} kg</Text>
              <Text style={styles.listItemText}>BMI: {item.bmi}</Text>
              <Text style={styles.listItemText}>Result: {item.result}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
