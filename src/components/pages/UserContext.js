// // UserContext.js
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userName, setUserName] = useState('Your Name');
//   const [userAccountName, setUserAccountName] = useState('Username');

//   const updateUserDetails = (name, userAccountName) => {
//     setUserName(name);
//     setUserAccountName(userAccountName);
//   };

//   return (
//     <UserContext.Provider value={{ userName, userAccountName, updateUserDetails }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };

// //PARA SA PAGPASA SA BMI Previously working without height chuhcu
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userName, setUserName] = useState('Your Name');
//   const [userAccountName, setUserAccountName] = useState('Username');
//   const [bmi, setBMI] = useState('No Data');
//   const [height, setHeight] = useState('0'); // New state for height


//   const updateUserDetails = (name, userAccountName, bmi, height) => {
//     setUserName(name);
//     setUserAccountName(userAccountName);
//     setBMI(bmi);
//     setHeight(height);
//   };

//   return (
//     <UserContext.Provider value={{ userName, userAccountName, bmi, updateUserDetails, height }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };


// BEFORE GIHILABTAN -WYN
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Your Name');
  const [userAccountName, setUserAccountName] = useState('Username');
  const [bmi, setBMI] = useState('No Data');

  const updateUserDetails = (name, userAccountName, bmi) => {
    setUserName(name);
    setUserAccountName(userAccountName);
    setBMI(bmi);
  };

  return (
    <UserContext.Provider value={{ userName, userAccountName, bmi, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
