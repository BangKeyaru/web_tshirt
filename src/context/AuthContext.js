import React, { createContext, useContext, useState } from "react";

// Membuat AuthContext
const AuthContext = createContext();

// AuthProvider yang menyediakan data autentikasi
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: !!localStorage.getItem("authToken"),
    user: JSON.parse(localStorage.getItem("userData")) || null,
  });

  // Fungsi login yang menerima detail pengguna
  const login = (user) => {
    setAuthState({ isLoggedIn: true, user });
    localStorage.setItem("authToken", "authToken");
    localStorage.setItem("userData", JSON.stringify(user));
  };

  // Fungsi logout untuk menghapus status login
  const logout = () => {
    setAuthState({ isLoggedIn: false, user: null });
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk mengakses data autentikasi
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
