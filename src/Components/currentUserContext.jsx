import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext(null);

// Custom hook for consuming context
export function useUser() {
    const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

// Provider component
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  const loginUser = (user) => setCurrentUser(user);
  const logoutUser = () => setCurrentUser(null);

  return (
    <UserContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}
