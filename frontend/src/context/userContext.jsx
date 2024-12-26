import React, { createContext, useState } from "react";

// Create a Context for the user
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, selectedCourse, setSelectedCourse }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
