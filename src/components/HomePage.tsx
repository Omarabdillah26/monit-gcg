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

      {/* Tabel Penjelasan Kriteria */}
      <div className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Penjelasan Kriteria
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold">
                  Bobot Indikator
                </th>
                <th
                  className="border border-gray-300 px-3 py-2 text-center font-semibold"
                  colSpan={2}
                >
                  Capaian Th.2022
                </th>
              </tr>
              <tr className="bg-blue-50">
                <th className="border border-gray-300 px-3 py-1"></th>
                <th className="border border-gray-300 px-3 py-1"></th>
                <th className="border border-gray-300 px-3 py-1 text-center text-xs">
                  Skor
                </th>
                <th className="border border-gray-300 px-3 py-1 text-center text-xs">
                  Capaian %
                </th>
              </tr>
            </thead>
            <tbody>
              {governanceCards.map((card, index) => (
                <tr
                  key={card.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onCardClick(card.id)}
                >
                  <td className="border border-gray-300 px-3 py-2 text-left">
                    {String.fromCharCode(73 + index)}. {card.title}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {card.weight.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {((card.score * card.weight) / 100).toFixed(3)}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {card.achievement.toFixed(3)}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="border border-gray-300 px-3 py-2 text-left">
                  TOTAL
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center">
                  {totalWeight.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center">
                  {totalScore.toFixed(3)}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center">
                  {overallAchievement.toFixed(3)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
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
