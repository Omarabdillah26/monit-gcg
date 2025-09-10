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

      {/* Card List untuk Setiap Aspek */}
      <div className="mb-8">
        {/* Header Info */}
        <div className="mb-6 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-bold text-center">PENJELASAN KRITERIA</h2>
        </div>

        {/* Card List dengan Jarak */}
        <div className="space-y-4">
          {governanceCards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 p-6"
              onClick={() => onCardClick(card.id)}
            >
              <div className="flex items-start justify-between">
                {/* Left Section - Penjelasan Kriteria */}
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg border-2 border-blue-200">
                    {String.fromCharCode(73 + index)}.
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 mb-2 text-lg">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Right Section - Metrics */}
                <div className="flex items-center space-x-8 ml-6">
                  {/* Bobot Indikator */}
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1 font-medium">
                      BOBOT INDIKATOR
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {card.weight.toFixed(2)}
                    </div>
                  </div>

                  {/* Capaian TH 2022 */}
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1 font-medium">
                      CAPAIAN TH 2022
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-slate-400 mb-1">SKOR</div>
                        <div className="text-lg font-bold text-blue-600">
                          {((card.score * card.weight) / 100).toFixed(3)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1">
                          CAPAIAN %
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {card.achievement.toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Total */}
      <div className="mt-8 group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                TOTAL CAPAIAN
              </h2>
              <p className="text-slate-600 text-lg">
                Rata-rata capaian keseluruhan aspek tata kelola perusahaan
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl mb-3">
                <span className="text-3xl font-bold">
                  {overallAchievement}%
                </span>
              </div>
              <div className="text-sm text-slate-500 font-medium">
                Total Capaian
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabel Divisi */}
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            TABEL DIVISI DAN CAPAIAN
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold">
                    No
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold">
                    Divisi
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-semibold">
                    Bobot
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-semibold">
                    Skor
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-semibold">
                    Capaian %
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-semibold">
                    Status
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-center font-semibold">
                    PIC
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    no: "1",
                    divisi: "BOD-1",
                    bobot: "15.0",
                    skor: "12.75",
                    capaian: "85.0",
                    status: "Baik",
                    pic: "Direktur Utama",
                  },
                  {
                    no: "2",
                    divisi: "KSPI",
                    bobot: "12.0",
                    skor: "10.8",
                    capaian: "90.0",
                    status: "Sangat Baik",
                    pic: "Direktur KSPI",
                  },
                  {
                    no: "3",
                    divisi: "SETPER",
                    bobot: "10.0",
                    skor: "8.5",
                    capaian: "85.0",
                    status: "Baik",
                    pic: "Direktur SETPER",
                  },
                  {
                    no: "4",
                    divisi: "AGA",
                    bobot: "10.0",
                    skor: "7.8",
                    capaian: "78.0",
                    status: "Baik",
                    pic: "Direktur AGA",
                  },
                  {
                    no: "5",
                    divisi: "KEU",
                    bobot: "12.0",
                    skor: "11.04",
                    capaian: "92.0",
                    status: "Sangat Baik",
                    pic: "Direktur Keuangan",
                  },
                  {
                    no: "6",
                    divisi: "OP",
                    bobot: "15.0",
                    skor: "12.0",
                    capaian: "80.0",
                    status: "Baik",
                    pic: "Direktur Operasional",
                  },
                  {
                    no: "7",
                    divisi: "REN",
                    bobot: "8.0",
                    skor: "6.0",
                    capaian: "75.0",
                    status: "Cukup",
                    pic: "Direktur Rencana",
                  },
                  {
                    no: "8",
                    divisi: "MHC",
                    bobot: "8.0",
                    skor: "6.4",
                    capaian: "80.0",
                    status: "Baik",
                    pic: "Direktur MHC",
                  },
                  {
                    no: "9",
                    divisi: "HUKUM",
                    bobot: "5.0",
                    skor: "4.5",
                    capaian: "90.0",
                    status: "Sangat Baik",
                    pic: "Direktur Hukum",
                  },
                  {
                    no: "10",
                    divisi: "MR",
                    bobot: "5.0",
                    skor: "4.25",
                    capaian: "85.0",
                    status: "Baik",
                    pic: "Direktur MR",
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="border border-slate-300 px-4 py-3 text-center font-medium">
                      {item.no}
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-left">
                      <div className="font-medium text-slate-800">
                        {item.divisi}
                      </div>
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="font-semibold text-blue-600">
                        {item.bobot}
                      </span>
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="font-semibold text-green-600">
                        {item.skor}
                      </span>
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="font-semibold text-indigo-600">
                        {item.capaian}%
                      </span>
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Sangat Baik"
                            ? "bg-green-100 text-green-800"
                            : item.status === "Baik"
                            ? "bg-blue-100 text-blue-800"
                            : item.status === "Cukup"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      <span className="text-slate-600 text-sm">{item.pic}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Row */}
          <div className="mt-4 p-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-sm text-slate-600 mb-1">Total Bobot</div>
                <div className="text-xl font-bold text-slate-800">100.0</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Total Skor</div>
                <div className="text-xl font-bold text-slate-800">84.04</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">
                  Rata-rata Capaian
                </div>
                <div className="text-xl font-bold text-slate-800">84.0%</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">
                  Status Overall
                </div>
                <div className="text-xl font-bold text-green-600">Baik</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
