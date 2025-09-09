import React, { useEffect, useState } from "react";
import { CheckCircle, Shield } from "lucide-react";
import logoImage from "../image/Logo_PLN-removebg-preview.png";

interface LoginSuccessAnimationProps {
  username: string;
  userRole: string;
  onComplete: () => void;
}

const LoginSuccessAnimation: React.FC<LoginSuccessAnimationProps> = ({
  username,
  userRole,
  onComplete,
}) => {
  const [phase, setPhase] = useState<0 | 1 | 2>(0); // 0: blue overlay, 1: fading, 2: white
  const [showBadge, setShowBadge] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 200); // start fade
    const t1 = setTimeout(() => setShowBadge(true), 300);
    const t2 = setTimeout(() => setPhase(2), 700); // finish to white
    const t3 = setTimeout(() => setShowText(true), 700);
    const t4 = setTimeout(() => setShowBar(true), 900);
    const t5 = setTimeout(() => onComplete(), 1800);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-inter relative overflow-hidden">
      {/* Blue overlay that fades to white */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          phase === 2 ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(1200px 600px at 50% 45%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.10) 40%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Brand */}
        <div className="flex items-center justify-center mb-6">
          <img src={logoImage} alt="PLN Logo" className="h-12 w-auto mr-3" />
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900">PELITA</h1>
            <p className="text-xs text-gray-600 leading-snug">
              Pengelolaan Layanan & Informasi
              <br />
              Tindak Lanjut Arahan Strategis
            </p>
          </div>
        </div>

        {/* Success badge */}
        <div className="mb-6">
          <div
            className={`inline-flex items-center justify-center w-28 h-28 rounded-full bg-green-500 border-4 border-white shadow-2xl transform transition-all duration-500 ${
              showBadge ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Welcome text */}
        <div
          className={`transition-all duration-500 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome back!
          </h2>
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {username}
              </p>
              <p className="text-xs text-gray-600 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> {userRole.replace("_", " ")}
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className={`transition-opacity duration-400 ${
            showBar ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-48 h-1.5 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-[stepProgress_1.2s_ease-out]" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Redirecting to dashboard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessAnimation;
