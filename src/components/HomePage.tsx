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
        "Detail penilaian dan dokumentasi komitmen tata kelola perusahaan",
      icon: <Shield size={24} />,
      weight: 7.0,
      score: 7.0,
      achievement: 100,
      color: "blue",
    },
    {
      id: "pemegang-saham",
      title: "PEMEGANG SAHAM DAN RUPS/PEMILIK MODAL",
      description:
        "Detail penilaian dan dokumentasi hubungan dengan pemegang saham",
      icon: <Users size={24} />,
      weight: 7.0,
      score: 7.0,
      achievement: 100,
      color: "green",
    },
    {
      id: "dewan-komisaris",
      title: "DEWAN KOMISARIS/DEWAN PENGAWAS",
      description:
        "Detail penilaian dan dokumentasi fungsi pengawasan dewan komisaris",
      icon: <UserCheck size={24} />,
      weight: 7.0,
      score: 7.0,
      achievement: 100,
      color: "yellow",
    },
    {
      id: "direksi",
      title: "DIREKSI",
      description:
        "Detail penilaian dan dokumentasi kinerja direksi perusahaan",
      icon: <Crown size={24} />,
      weight: 7.0,
      score: 7.0,
      achievement: 100,
      color: "purple",
    },
    {
      id: "pengungkapan",
      title: "PENGUNGKAPAN INFORMASI DAN TRANSPARANSI",
      description:
        "Detail penilaian dan dokumentasi transparansi informasi perusahaan",
      icon: <FileText size={24} />,
      weight: 7.0,
      score: 7.0,
      achievement: 100,
      color: "orange",
    },
    {
      id: "aspek-lain",
      title: "ASPEK LAINNYA",
      description:
        "Detail penilaian dan dokumentasi aspek-aspek tambahan tata kelola",
      icon: <MoreHorizontal size={24} />,
      weight: 7.0,
      score: 7.0,
      achievement: 100,
      color: "indigo",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 border-b border-gray-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-left font-bold text-sm uppercase">
              PENJELASAN KRITERIA
            </div>
            <div className="text-center font-bold text-sm uppercase">
              BOBOT INDIKATOR
            </div>
            <div className="text-center font-bold text-sm uppercase">
              CAPAIAN TH 2022
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="text-xs font-bold">SKOR</div>
                <div className="text-xs font-bold">CAPAIAN %</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Rows */}
        <div className="space-y-4 p-4">
          {governanceCards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
              onClick={() => onCardClick(card.id)}
            >
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Left Column - Penjelasan Kriteria */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                    {String.fromCharCode(73 + index)}.
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Middle Column - Bobot Indikator */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {card.weight.toFixed(2)}
                  </div>
                </div>

                {/* Right Column - Capaian TH 2022 */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {((card.score * card.weight) / 100).toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {card.achievement.toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
