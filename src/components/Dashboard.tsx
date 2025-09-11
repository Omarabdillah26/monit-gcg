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
        return <IndicatorPage onNavigate={setCurrentPage} />;
      case "parameter":
        return <ParameterPage onNavigate={setCurrentPage} />;
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
        <div className="p-6">
          {/* Total Aspek Widget - hanya tampil di halaman home */}
          {currentPage === "home" && (
            <div className="mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Total Aspek Tata Kelola
                    </h2>
                    <p className="text-blue-100">
                      Ringkasan keseluruhan capaian GCG
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">7</div>
                    <div className="text-blue-100 text-sm">Aspek Utama</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-2xl font-bold">49.00</div>
                    <div className="text-blue-100 text-sm">Total Bobot</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-2xl font-bold">49.00</div>
                    <div className="text-blue-100 text-sm">Total Skor</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-blue-100 text-sm">Capaian %</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-2xl font-bold">A</div>
                    <div className="text-blue-100 text-sm">Grade</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderCurrentPage()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
