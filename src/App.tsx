import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useAuth } from "./contexts/AuthContext";

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <Dashboard onLogout={() => {}} username={user?.username || ""} />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
