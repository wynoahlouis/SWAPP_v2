// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Edit Your Name');
  const [userEmail, setUserEmail] = useState('wynoahtabasan@gmail.com');

  const updateUserDetails = (name, email) => {
    setUserName(name);
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userName, userEmail, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
