import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    // Mock signup
    if (email && password) {
      setUser({ email });
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const login = async (email, password) => {
    // Mock login
    if (email && password) {
      setUser({ email });
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const loginWithGoogle = async () => {
    // Mock Google login
    setUser({ email: 'google@example.com' });
    return { success: true };
  };

  const loginWithFacebook = async () => {
    // Mock Facebook login
    setUser({ email: 'facebook@example.com' });
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, loginWithGoogle, loginWithFacebook, logout }}>
      {children}
    </AuthContext.Provider>
  );
};