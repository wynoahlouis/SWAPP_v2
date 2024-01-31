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

