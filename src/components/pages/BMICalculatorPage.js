// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';

// export default function App() {
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [gender, setGender] = useState('');
//   const [bmiResult, setBmiResult] = useState([]);
  
//   const validateForm = () => {
//     if (!height || !weight) {
//       alert('All fields are required!');
//     } else {
//       countBmi();
//     }
//   };
  
//   const countBmi = () => {
//     const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
//     let result = '';
//     if (bmi < 18.5) {
//       result = 'Underweight';
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       result = 'Healthy';
//     } else if (bmi >= 25 && bmi <= 29.9) {
//       result = 'Overweight';
//     } else if (bmi >= 30 && bmi <= 34.9) {
//       result = 'Obese';
//     } else if (bmi >= 35) {
//       result = 'Extremely obese';
//     }
//     setBmiResult([...bmiResult, { height, weight, bmi, result }]);
//     setAge('');
//     setHeight('');
//     setWeight('');
//     setGender('');
//   };
  
//   const deleteItem = (index) => {
//     const newBmiResult = [...bmiResult];
//     newBmiResult.splice(index, 1);
//     setBmiResult(newBmiResult);
//   };
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>BMI Calculator</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Height (cm)"
//         value={height}
//         onChangeText={setHeight}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Weight (kg)"
//         value={weight}
//         onChangeText={setWeight}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.button} onPress={validateForm}>
//         <Text style={styles.buttonText}>Calculate BMI</Text>
//       </TouchableOpacity>
//       <Text style={styles.listTitle}>BMI History</Text>
//       <ScrollView style={styles.scrollView}>
//       {bmiResult.map((item, index) => (
//         <View key={index} style={styles.listItem}>
//           <Text style={styles.listItemText}>Height: {item.height} cm</Text>
//           <Text style={styles.listItemText}>Weight: {item.weight} kg</Text>
//           <Text style={styles.listItemText}>BMI: {item.bmi}</Text>
//           <Text style={styles.listItemText}>Result: {item.result}</Text>
//           <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
//             <Text style={styles.deleteButtonText}>Delete</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: StatusBar.currentHeight,
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
//     width: '80%',
//     padding: 5,
//     marginBottom: 15,
//   },
// });


// CURRENT AND WORKING!!

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';

// export default function App() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [bmiResult, setBmiResult] = useState([]);
//   const [showHistory, setShowHistory] = useState(true);
//   const currentDate = new Date().toLocaleString();
  
  
//   const validateForm = () => {
//     if (!height || !weight) {
//       alert('All fields are required!');
//     } else {
//       countBmi();
//     }
//   };
  
//   const countBmi = () => {
//     const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
//     let result = '';
//     if (bmi < 18.5) {
//       result = 'Underweight';
//     } else if (bmi >= 18.5 && bmi <= 24.99) {
//       result = 'Healthy';
//     } else if (bmi >= 25 && bmi <= 29.99) {
//       result = 'Overweight';
//     } else if (bmi >= 30 && bmi <= 34.99) {
//       result = 'Obese';
//     } else if (bmi >= 35) {
//       result = 'Extremely obese';
//     }
//     setBmiResult([...bmiResult, { currentDate, height, weight, bmi, result }].reverse());
//     setHeight('');
//     setWeight('');
//   };
  
//   const deleteItem = (index) => {
//     const newBmiResult = [...bmiResult];
//     newBmiResult.splice(index, 1);
//     setBmiResult(newBmiResult);
//   };
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>BMI Calculator</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Height (cm)"
//         value={height}
//         onChangeText={setHeight}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Weight (kg)"
//         value={weight}
//         onChangeText={setWeight}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.button} onPress={validateForm}>
//         <Text style={styles.buttonText}>Calculate BMI</Text>
//       </TouchableOpacity>
//       <Text style={styles.listTitle}>BMI History</Text>
//       <TouchableOpacity style={styles.toggleButton} onPress={() => setShowHistory(!showHistory)}>
//         <Text style={styles.toggleButtonText}>{showHistory ? 'Hide History' : 'Show History'}</Text>
//       </TouchableOpacity>
//         {showHistory && (
//           <ScrollView style={styles.scrollView}>
//             {bmiResult.map((item, index) => (
//               <View key={index} style={styles.listItem}>
//                 <Text style={styles.listItemText}>Date: {item.currentDate}</Text>
//                 <Text style={styles.listItemText}>Height: {item.height} cm</Text>
//                 <Text style={styles.listItemText}>Weight: {item.weight} kg</Text>
//                 <Text style={styles.listItemText}>BMI: {item.bmi}</Text>
//                 <Text style={styles.listItemText}>Result: {item.result}</Text>
//                 <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
//                   <Text style={styles.deleteButtonText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </ScrollView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: StatusBar.currentHeight,
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

// PERVIOUSLY WORKING WITHOUT THE HEIGHT CHUCHU
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

    // Update BMI and details in the context
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
      {/* <Text style={styles.subtitle}>History</Text> */}
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

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: StatusBar.currentHeight,
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