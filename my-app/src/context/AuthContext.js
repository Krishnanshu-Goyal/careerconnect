import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const login = (email, password) => {
    // Mock user authentication (Replace with API call in real-world apps)
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("user", email);
      setUser(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}