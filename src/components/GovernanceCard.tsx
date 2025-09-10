import React from "react";
import { ChevronRight, TrendingUp, Target, BarChart3 } from "lucide-react";

interface GovernanceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  weight: number;
  score: number;
  achievement: number;
  color: string;
  onClick: () => void;
}

const GovernanceCard: React.FC<GovernanceCardProps> = ({
  title,
  description,
  icon,
  weight,
  score,
  achievement,
  color,
  onClick,
}) => {
  // Fungsi untuk mendapatkan warna berdasarkan skor
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100";
    if (score >= 80) return "text-blue-600 bg-blue-100";
    if (score >= 70) return "text-yellow-600 bg-yellow-100";
    if (score >= 60) return "text-orange-600 bg-orange-100";
    return "text-red-600 bg-red-100";
  };

  // Fungsi untuk mendapatkan warna progress bar
  const getProgressColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    if (score >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-blue-300 group overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* Left side - Icon, Title, Description */}
          <div className="flex items-start space-x-4 flex-1">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right side - Metrics and Progress */}
          <div className="flex items-center space-x-8 ml-6">
            {/* Metrics */}
            <div className="flex items-center space-x-6">
              {/* Bobot */}
              <div className="text-center">
                <div className="flex items-center space-x-1 mb-1">
                  <BarChart3 size={16} className="text-slate-500" />
                  <span className="text-xs text-slate-600 font-medium">
                    Bobot
                  </span>
                </div>
                <span className="text-lg font-bold text-slate-800">
                  {weight}%
                </span>
              </div>

              {/* Skor */}
              <div className="text-center">
                <div className="flex items-center space-x-1 mb-1">
                  <Target size={16} className="text-slate-500" />
                  <span className="text-xs text-slate-600 font-medium">
                    Skor
                  </span>
                </div>
                <span
                  className={`text-lg font-bold px-3 py-1 rounded-full ${getScoreColor(
                    score
                  )}`}
                >
                  {score}
                </span>
              </div>

              {/* Capaian */}
              <div className="text-center">
                <div className="flex items-center space-x-1 mb-1">
                  <TrendingUp size={16} className="text-slate-500" />
                  <span className="text-xs text-slate-600 font-medium">
                    Capaian
                  </span>
                </div>
                <span className="text-lg font-bold text-slate-800">
                  {achievement}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-32">
              <div className="w-full bg-slate-200 rounded-full h-3 mb-1">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ease-out ${getProgressColor(
                    achievement
                  )}`}
                  style={{ width: `${achievement}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Arrow */}
            <ChevronRight
              className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Bottom border dengan warna dinamis */}
      <div
        className={`h-1 bg-gradient-to-r from-${color}-500 to-${color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      ></div>
    </div>
  );
};

export default GovernanceCard;
