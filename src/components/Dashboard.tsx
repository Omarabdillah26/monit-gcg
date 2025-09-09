import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";
import IndicatorPage from "./IndicatorPage";
import ParameterPage from "./ParameterPage";
import KomitmenPage from "./KomitmenPage";
import PemegangSahamPage from "./PemegangSahamPage";
import DewanKomisarisPage from "./DewanKomisarisPage";
import DireksiPage from "./DireksiPage";
import PengungkapanPage from "./PengungkapanPage";
import AspekLainPage from "./AspekLainPage";

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const { logout } = useAuth();

  const handleCardClick = (cardId: string) => {
    setCurrentPage(cardId);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  const handleLogout = () => {
    logout();
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onCardClick={handleCardClick} />;
      case "indikator":
        return <IndicatorPage />;
      case "parameter":
        return <ParameterPage />;
      case "komitmen":
        return <KomitmenPage onBack={handleBackToHome} />;
      case "pemegang-saham":
        return <PemegangSahamPage onBack={handleBackToHome} />;
      case "dewan-komisaris":
        return <DewanKomisarisPage onBack={handleBackToHome} />;
      case "direksi":
        return <DireksiPage onBack={handleBackToHome} />;
      case "pengungkapan":
        return <PengungkapanPage onBack={handleBackToHome} />;
      case "aspek-lain":
        return <AspekLainPage onBack={handleBackToHome} />;
      default:
        return <HomePage onCardClick={handleCardClick} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-auto">
        {/* Header dengan tombol logout */}
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Dashboard Good Corporate Governance
              </h1>
              <p className="text-sm text-gray-600">
                Selamat datang, {username}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">{renderCurrentPage()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
