import React, { useState, useEffect, useMemo } from "react";
import { useAuth } from "../contexts/AuthContext";
import { User, Lock, Eye, EyeOff, Zap } from "lucide-react";
import logoImage from "../image/Logo_PLN-removebg-preview.png";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  // Simple lightning animation
  const [lightningActive, setLightningActive] = useState(false);

  // Memoize particles to prevent re-renders
  const particles = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 15}s`,
      size:
        i % 3 === 0
          ? "w-2 h-2 bg-yellow-400"
          : i % 3 === 1
          ? "w-1 h-1 bg-blue-400"
          : "w-1.5 h-1.5 bg-white",
    }));
  }, []);

  // Memoize lightning elements
  const lightningElements = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      fontSize: `${2 + Math.random() * 2}rem`,
      rotation: `${Math.random() * 360}deg`,
      animationDuration: `${8 + Math.random() * 8}s`,
      animationDelay: `${i * 1.5}s`,
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLightningActive(true);
      setTimeout(() => setLightningActive(false), 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(username, password);
    } catch (err) {
      setError("Login gagal. Periksa username dan password Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 font-inter">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute rounded-full pointer-events-none ${particle.size} opacity-30`}
              style={{
                left: particle.left,
                top: particle.top,
                animation: `float ${particle.animationDuration} ease-in-out infinite`,
                animationDelay: particle.animationDelay,
                filter: "blur(0.5px)",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>

        {/* Background Lightning */}
        <div className="absolute inset-0 pointer-events-none">
          {lightningElements.map((lightning) => (
            <div
              key={lightning.id}
              className={`absolute text-yellow-400 opacity-10 transition-all duration-2000 pointer-events-none ${
                lightningActive
                  ? "opacity-25 scale-110"
                  : "opacity-10 scale-100"
              }`}
              style={{
                left: lightning.left,
                top: lightning.top,
                fontSize: lightning.fontSize,
                transform: `rotate(${lightning.rotation})`,
                animation: `pulse ${lightning.animationDuration} ease-in-out infinite`,
                animationDelay: lightning.animationDelay,
                filter: "blur(1px)",
                pointerEvents: "none",
              }}
            >
              <Zap />
            </div>
          ))}
        </div>

        {/* Energy Waves */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute inset-0 border-2 border-blue-400/20 rounded-full pointer-events-none"
              style={{
                animation: `energyWave ${12 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
                transform: "scale(0)",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img
                src={logoImage}
                alt="PLN Logo"
                className="h-12 w-auto mr-3 drop-shadow-lg"
              />
              <div className="absolute -top-1 -right-1">
                <Zap
                  className="w-4 h-4 text-yellow-400 animate-pulse"
                  style={{ animationDuration: "4s" }}
                />
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-white mb-1 drop-shadow-lg text-elegant">
                GOOD CORPORATE GOVERNANCE
              </h1>
              <p className="text-xs text-blue-200 leading-tight text-clean">
                Pengelolaan Layanan & Informasi
                <br />
                Tindak Lanjut Arahan Strategis
              </p>
            </div>
          </div>
          <p className="text-blue-200 text-sm text-clean">
            PT PLN Electricity Services (Persero)
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white mb-1 drop-shadow-lg text-elegant">
              Welcome Back
            </h2>
            <p className="text-blue-200 text-sm text-modern">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-blue-300" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full pl-10 pr-4 py-3 border border-blue-300/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 transition-all duration-200 text-sm text-modern"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-blue-300" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 border border-blue-300/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 transition-all duration-200 text-sm text-modern"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-blue-300 hover:text-blue-200" />
                ) : (
                  <Eye className="h-4 w-4 text-blue-300 hover:text-blue-200" />
                )}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded bg-white/20"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-blue-200 text-clean"
              >
                Remember me
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-300 text-sm text-center bg-red-500/20 p-3 rounded-lg border border-red-400/30 text-clean">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg text-modern"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <>
                  <Zap className="h-4 w-4 text-yellow-300" />
                  <span className="text-sm">Sign in to System</span>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-blue-300 text-clean">
              © 2025 PT PLN Electricity Services (Persero). All rights reserved.
              <br />
              Powered by Advanced Technology
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg text-elegant">
            Smart Energy Management
          </h3>
          <p className="text-blue-200 text-lg text-modern">
            Empowering Indonesia's electricity future
          </p>
        </div>
      </div>

      {/* Central Lightning - Responsive */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`transition-all duration-1500 ${
            lightningActive ? "opacity-100 scale-110" : "opacity-30 scale-100"
          }`}
          style={{ fontSize: "min(20vw, 15rem)" }}
        >
          <Zap className="text-yellow-400 drop-shadow-2xl" />
        </div>

        {/* Lightning Glow */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ${
            lightningActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <div style={{ fontSize: "min(20vw, 15rem)", filter: "blur(20px)" }}>
            <Zap className="text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
