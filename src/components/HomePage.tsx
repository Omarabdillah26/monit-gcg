import React from "react";
import {
  Shield,
  Users,
  UserCheck,
  Crown,
  FileText,
  MoreHorizontal,
} from "lucide-react";

interface HomePageProps {
  onCardClick: (cardId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onCardClick }) => {
  const governanceCards = [
    {
      id: "komitmen",
      title: "KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN",
      description:
        "Komitmen organisasi dalam menerapkan prinsip-prinsip tata kelola yang berkelanjutan dan bertanggung jawab.",
      icon: <Shield size={24} />,
      weight: 25,
      score: 85,
      achievement: 85,
      color: "blue",
    },
    {
      id: "pemegang-saham",
      title: "PEMEGANG SAHAM DAN RUPS/PEMILIK MODAL",
      description:
        "Pengelolaan hubungan dengan pemegang saham dan pelaksanaan RUPS yang efektif dan transparan.                ",
      icon: <Users size={24} />,
      weight: 20,
      score: 92,
      achievement: 92,
      color: "green",
    },
    {
      id: "dewan-komisaris",
      title: "DEWAN KOMISARIS/DEWAN PENGAWAS",
      description:
        "Fungsi pengawasan dan pemberian arahan strategis oleh dewan komisaris untuk kepentingan organisasi.",
      icon: <UserCheck size={24} />,
      weight: 20,
      score: 78,
      achievement: 78,
      color: "yellow",
    },
    {
      id: "direksi",
      title: "DIREKSI",
      description:
        "Kepemimpinan eksekutif dan pengelolaan operasional perusahaan yang profesional dan akuntabel.",
      icon: <Crown size={24} />,
      weight: 15,
      score: 88,
      achievement: 88,
      color: "purple",
    },
    {
      id: "pengungkapan",
      title: "PENGUNGKAPAN INFORMASI DAN TRANSPARANSI",
      description:
        "Keterbukaan informasi dan transparansi dalam pelaporan untuk stakeholder dan publik.",
      icon: <FileText size={24} />,
      weight: 15,
      score: 75,
      achievement: 75,
      color: "orange",
    },
    {
      id: "aspek-lain",
      title: "ASPEK LAINNYA",
      description:
        "Aspek-aspek tambahan dalam tata kelola perusahaan yang mendukung praktik governance yang baik.",
      icon: <MoreHorizontal size={24} />,
      weight: 5,
      score: 90,
      achievement: 90,
      color: "indigo",
    },
  ];

  // Hitung total skor dan capaian
  const totalWeight = governanceCards.reduce(
    (sum, card) => sum + card.weight,
    0
  );
  const totalScore = governanceCards.reduce(
    (sum, card) => sum + (card.score * card.weight) / 100,
    0
  );
  const overallAchievement = Math.round((totalScore / totalWeight) * 100);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          HASIL PENILAIAN ATAS PENERAPAN GOOD CORPORATE GOVERNANCE
        </h1>
        <p className="text-slate-600 text-lg">
          Kelola dan pantau aspek-aspek penting dalam tata kelola perusahaan
          yang berkelanjutan
        </p>
      </div>

      {/* Card Summary Penjelasan Kriteria */}
      <div className="mb-8 bg-white rounded-xl shadow-lg border border-slate-200">
        <div className="bg-cyan-400 text-white px-6 py-4 rounded-t-xl">
          <h2 className="text-xl font-bold">PENJELASAN KRITERIA</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Bobot Indikator */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-blue-600 mb-1">
                    Bobot Indikator
                  </h3>
                  <p className="text-2xl font-bold text-blue-800">
                    {totalWeight.toFixed(2)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Capaian Th.2022 */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-green-600 mb-1">
                    Capaian Th.2022
                  </h3>
                  <p className="text-2xl font-bold text-green-800">
                    {overallAchievement.toFixed(3)}%
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Skor */}
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-purple-600 mb-1">
                    Skor
                  </h3>
                  <p className="text-2xl font-bold text-purple-800">
                    {totalScore.toFixed(3)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Capaian % */}
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-orange-600 mb-1">
                    Capaian %
                  </h3>
                  <p className="text-2xl font-bold text-orange-800">
                    {overallAchievement}%
                  </p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Layout untuk Setiap Aspek */}
      <div className="space-y-6">
        {governanceCards.map((card, index) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            onClick={() => onCardClick(card.id)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {String.fromCharCode(73 + index)}. {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <div className="flex space-x-6 text-sm">
                      <div>
                        <span className="text-slate-500">Bobot:</span>
                        <span className="ml-1 font-semibold text-slate-800">
                          {card.weight.toFixed(2)}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">Skor:</span>
                        <span className="ml-1 font-semibold text-slate-800">
                          {((card.score * card.weight) / 100).toFixed(3)}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">Capaian:</span>
                        <span className="ml-1 font-semibold text-slate-800">
                          {card.achievement.toFixed(3)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-800">
                      {card.achievement}%
                    </div>
                    <div className="text-sm text-slate-500">Capaian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card Total */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              TOTAL CAPAIAN
            </h2>
            <p className="text-slate-600">
              Rata-rata capaian keseluruhan aspek tata kelola perusahaan
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">
              {overallAchievement}%
            </div>
            <div className="text-sm text-slate-500">Total Capaian</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Tentang Sistem Tata Kelola
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Platform ini dirancang untuk membantu organisasi dalam menerapkan dan
          memantau praktik tata kelola perusahaan yang baik. Setiap aspek
          governance dapat dikelola dengan mudah melalui interface yang intuitif
          dan komprehensif.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
