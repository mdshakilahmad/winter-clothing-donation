import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const authInfo = { name: "shakil", email: "ahmadshakil22255@gmail.com" };
  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
