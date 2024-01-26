import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      flex: 1,
      backgroundColor: "#fff",
      // justifyContent: "center",
      // alignItems: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#365486',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      // marginBottom: 2.5,
    },
    input: {
      height: 40,
      borderColor: '#365486',
      borderWidth: 1,
      borderRadius: 7,
      marginBottom: 10,
      padding: 10,
      width: '80%',
      justifyContent: 'center',
      backgroundColor: '#EBF3FF',
      color: '#0F1035',
      
    },
    inputText: {
      fontSize: 16,
      color: '#6479B9',
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
      borderWidth: 2.5,
      borderStyle: 'solid',
      borderColor: '#365486',
      marginTop: 20,
    },
    button2: {
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderWidth: 2.5,
      borderStyle: 'solid',
      borderColor: '#365486',
      marginTop: 10,
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonText2: {
      color: '#365486',
      fontSize: 18,
      fontWeight: 'bold',
    },
    scrollView: {
      borderWidth: 1,
      borderColor: '#365486',
      borderRadius: 5,
      width: '90%',
      padding: 5,
      marginBottom: 15,
    },
    listItem: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#365486',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    listItemText: {
      fontSize: 16,
      marginBottom: 5,
    },
    deleteButton: {
      backgroundColor: '#ff6666',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      width: '100',
      alignItems: 'center',
      justifyContent: 'center',
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },

    // Home Page
    

    // BMI Calculator

  

    //Profile Page
    profileContainer: {
      flex: 1,
      // marginTop: 50,
      paddingTop: StatusBar.currentHeight,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    username: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#365486',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
      color: '#777777',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileWrapper: {
      marginTop: 10,
    },
    profileItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    profileItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
  
  export default styles;