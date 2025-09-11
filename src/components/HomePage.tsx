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
  // Fungsi untuk mengkonversi angka menjadi angka Romawi
  const toRoman = (num: number): string => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let result = "";

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      }
    }
    return result;
  };

  const divisions = [
    "BOD-1",
    "KSPI",
    "SETPER",
    "AGA",
    "KEU",
    "VOP",
    "REN",
    "MHC",
    "HUKUM",
    "MR",
  ];

  // Sementara: sumber data progress dokumen per divisi (akan dihubungkan ke aspek nanti)
  const divisionProgress: Record<string, { uploaded: number; total: number }> =
    {
      "BOD-1": { uploaded: 0, total: 0 },
      KSPI: { uploaded: 0, total: 0 },
      SETPER: { uploaded: 0, total: 0 },
      AGA: { uploaded: 0, total: 0 },
      KEU: { uploaded: 0, total: 0 },
      VOP: { uploaded: 0, total: 0 },
      REN: { uploaded: 0, total: 0 },
      MHC: { uploaded: 0, total: 0 },
      HUKUM: { uploaded: 0, total: 0 },
      MR: { uploaded: 0, total: 0 },
    };

  const getDivisionPercent = (name: string): number => {
    const d = divisionProgress[name];
    if (!d || d.total === 0) return 0;
    return Math.round((d.uploaded / d.total) * 100);
  };

  const getPercentColor = (percent: number): string => {
    if (percent === 100) return "bg-green-100 text-green-700";
    if (percent === 50) return "bg-yellow-100 text-yellow-700";
    if (percent < 50) return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700"; // < 100
  };

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
      {/* Ringkasan Hasil Penilaian Governance Assessment 2025 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h2 className="font-semibold">
            Hasil Penilaian Atas Penerapan Good Corporate Governance Tahun 2025
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-sm text-gray-500">Total score</div>
            <div className="text-3xl font-bold text-blue-600">0.00</div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-sm text-gray-500">Capaian</div>
            <div className="text-3xl font-bold text-blue-600">0%</div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-sm text-gray-500">Predikat</div>
            <div className="text-3xl font-bold text-blue-600">-</div>
          </div>
        </div>
      </div>
      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-4">
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
            <div className="text-center font-bold text-sm uppercase">
              DOKUMEN
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
              <div className="grid grid-cols-4 gap-4 items-center">
                {/* Left Column - Penjelasan Kriteria */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                    {toRoman(index + 1)}.
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

                {/* New Rightmost Column - Dokumen (cards per division) */}
                <div className="text-center">
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {divisions.map((d) => {
                      const percent = getDivisionPercent(d);
                      const data = divisionProgress[d] || {
                        uploaded: 0,
                        total: 0,
                      };
                      return (
                        <div
                          key={d}
                          className="rounded-md border border-gray-200 p-2.5 text-xs bg-white hover:bg-gray-50 text-left"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span
                              className="font-semibold text-gray-700 pr-2 break-words leading-tight flex-1"
                              title={d}
                            >
                              {d}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 rounded ${getPercentColor(
                                percent
                              )} shrink-0`}
                            >
                              {data.uploaded}/{data.total}
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div
                              className={`h-full ${
                                percent === 100
                                  ? "bg-green-500"
                                  : percent === 50
                                  ? "bg-yellow-400"
                                  : percent < 50
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                              }`}
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabel Divisi dan Capaian */}
      <DivisiSection />
    </div>
  );
};

export default HomePage;

// Komponen terpisah untuk Tabel Divisi agar rapi
const DivisiSection: React.FC = () => {
  type DivisionRow = {
    name: string;
    totalRequirements: number; // Jumlah Persyaratan Dokumen
    uploaded: number; // Dokumen Terupload
    pending: number; // Dokumen Pending
    progress: number; // Progress (%)
  };

  const rows: DivisionRow[] = [
    {
      name: "BOD-1",
      totalRequirements: 0,
      uploaded: 0,
      pending: 0,
      progress: 0,
    },
    {
      name: "KSPI",
      totalRequirements: 0,
      uploaded: 0,
      pending: 0,
      progress: 0,
    },
    {
      name: "SETPER",
      totalRequirements: 0,
      uploaded: 0,
      pending: 0,
      progress: 0,
    },
    { name: "AGA", totalRequirements: 0, uploaded: 0, pending: 0, progress: 0 },
    { name: "KEU", totalRequirements: 0, uploaded: 0, pending: 0, progress: 0 },
    { name: "VOP", totalRequirements: 0, uploaded: 0, pending: 0, progress: 0 },
    { name: "REN", totalRequirements: 0, uploaded: 0, pending: 0, progress: 0 },
    { name: "MHC", totalRequirements: 0, uploaded: 0, pending: 0, progress: 0 },
    {
      name: "HUKUM",
      totalRequirements: 0,
      uploaded: 0,
      pending: 0,
      progress: 0,
    },
    { name: "MR", totalRequirements: 0, uploaded: 0, pending: 0, progress: 0 },
  ];

  const totals = rows.reduce(
    (acc, r) => {
      acc.totalRequirements += r.totalRequirements;
      acc.uploaded += r.uploaded;
      acc.pending += r.pending;
      return acc;
    },
    { totalRequirements: 0, uploaded: 0, pending: 0 }
  );

  const ProgressBar: React.FC<{ value: number }> = ({ value }) => (
    <div className="flex items-center space-x-2">
      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            value >= 80
              ? "bg-green-500"
              : value >= 40
              ? "bg-yellow-400"
              : "bg-gray-400"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-semibold">{value}%</span>
    </div>
  );

  const Badge: React.FC<{
    color: "green" | "yellow" | "red";
    value: number;
    label: string;
  }> = ({ color, value, label }) => {
    const colorClass =
      color === "green"
        ? "bg-green-100 text-green-700"
        : color === "yellow"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}
      >
        {label} {value}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <h3 className="font-semibold">Status Pemenuhan Dokumen Persyaratan</h3>
        <div className="flex items-center space-x-2 opacity-80 text-sm">
          <button className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/20 hover:bg-white/25 text-white text-xs font-medium transition">
            Divisi • Pemenuhan Dokumen
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-blue-600 bg-opacity-5 text-blue-900">
              <th className="font-semibold px-4 py-3 w-16 text-center">No</th>
              <th className="text-left font-semibold px-4 py-3">
                PIC/Nama Divisi
              </th>
              <th className="font-semibold px-4 py-3 text-center">
                Jumlah Persyaratan Dokumen
              </th>
              <th className="font-semibold px-4 py-3 text-center">
                Dokumen Terupload
              </th>
              <th className="font-semibold px-4 py-3 text-center">
                Dokumen Pending
              </th>
              <th className="font-semibold px-4 py-3 text-center">
                Progress (%)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r, idx) => (
              <tr key={r.name} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-center">{idx + 1}</td>
                <td className="px-4 py-3 text-blue-700 font-semibold">
                  {r.name}
                </td>
                <td className="px-4 py-3 text-center">{r.totalRequirements}</td>
                <td className="px-4 py-3 text-center">{r.uploaded}</td>
                <td className="px-4 py-3 text-center">{r.pending}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <ProgressBar value={r.progress} />
                  </div>
                </td>
              </tr>
            ))}

            {/* Totals Row */}
            <tr className="bg-blue-50 font-semibold text-blue-900">
              <td className="px-4 py-3 text-center" colSpan={2}>
                JUMLAH
              </td>
              <td className="px-4 py-3 text-center">
                {totals.totalRequirements}
              </td>
              <td className="px-4 py-3 text-center">{totals.uploaded}</td>
              <td className="px-4 py-3 text-center">{totals.pending}</td>
              <td className="px-4 py-3">
                <div className="flex justify-center">
                  <ProgressBar value={0} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
