import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  showSuccessAnimation: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  setShowSuccessAnimation: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const login = async (username: string, password: string) => {
    // Simulasi API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin123") {
          const userData = { username, role: "admin" };
          setUser(userData);
          setShowSuccessAnimation(true);
          // Setelah animasi selesai, user akan diarahkan ke dashboard
          setTimeout(() => {
            setIsAuthenticated(true);
            setShowSuccessAnimation(false);
          }, 1800);
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setShowSuccessAnimation(false);
  };

  const value = {
    isAuthenticated,
    user,
    showSuccessAnimation,
    login,
    logout,
    setShowSuccessAnimation,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
