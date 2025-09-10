import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ScoreProvider } from "./contexts/ScoreContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LoginSuccessAnimation from "./components/LoginSuccessAnimation";
import { useAuth } from "./contexts/AuthContext";

const AppContent: React.FC = () => {
  const { isAuthenticated, user, showSuccessAnimation } = useAuth();

  if (showSuccessAnimation && user) {
    return (
      <LoginSuccessAnimation
        username={user.username}
        userRole={user.role}
        onComplete={() => {}}
      />
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return <Dashboard username={user?.username || ""} />;
};

function App() {
  return (
    <AuthProvider>
      <ScoreProvider>
        <AppContent />
      </ScoreProvider>
    </AuthProvider>
  );
}

export default App;
