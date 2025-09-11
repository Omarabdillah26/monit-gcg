import React from "react";
import {
  Home,
  BarChart3,
  Settings,
  Zap,
  TrendingUp,
  Building2,
} from "lucide-react";

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    {
      id: "home",
      label: "Dashboard",
      icon: Home,
      description: "Overview & Summary",
      color: "blue",
    },
    {
      id: "indikator",
      label: "Indikator",
      icon: BarChart3,
      description: "Performance Metrics",
      color: "green",
    },
    {
      id: "parameter",
      label: "Parameter",
      icon: Settings,
      description: "System Settings",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colorMap: { [key: string]: string } = {
      blue: isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
        : "text-blue-400 hover:bg-blue-600/10 hover:text-blue-300",
      green: isActive
        ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
        : "text-green-400 hover:bg-green-600/10 hover:text-green-300",
      purple: isActive
        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
        : "text-purple-400 hover:bg-purple-600/10 hover:text-purple-300",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white w-72 min-h-screen shadow-2xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-slate-700/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              GovAss
            </h1>
            <p className="text-xs text-slate-400 leading-tight">
              (Governance Assessment)
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">Score</span>
            </div>
            <span className="font-bold text-green-400">84%</span>
          </div>
          <div className="mt-2 w-full bg-slate-700 rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-green-400 to-green-500 h-1.5 rounded-full"
              style={{ width: "84%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4">
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Main Menu
          </h3>
        </div>

        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${getColorClasses(
                    item.color,
                    isActive
                  )}`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-white/20"
                        : "bg-slate-700/50 group-hover:bg-slate-600/50"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="font-medium">{item.label}</span>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Building2 className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-400">
              PT PLN Electricity Services
            </span>
          </div>
          <p className="text-xs text-slate-500">© 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
