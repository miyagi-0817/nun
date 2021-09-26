import React, { useState, useEffect } from "react";
import firebase from "./config/firebase";

const AuthContext = React.createContext();

// childrenを引数に持つ事によってAuthProviderで囲まれているすべてのコンポーネントでuserが使える
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
