import React from "react";
import GovernanceCard from "./GovernanceCard";
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

      {/* Overall Score Card */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">SKOR KESELURUHAN</h2>
            <p className="text-blue-100">Total Bobot: {totalWeight}%</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-1">{overallAchievement}%</div>
            <div className="text-blue-100">Capaian</div>
          </div>
        </div>
        <div className="mt-4 w-full bg-blue-500 bg-opacity-30 rounded-full h-3">
          <div
            className="bg-white h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${overallAchievement}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {governanceCards.map((card) => (
          <GovernanceCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            weight={card.weight}
            score={card.score}
            achievement={card.achievement}
            color={card.color}
            onClick={() => onCardClick(card.id)}
          />
        ))}
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
