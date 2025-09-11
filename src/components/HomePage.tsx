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
    jumlah: number;
    proses: number;
    selesai: number;
    belumTindakLanjut: number;
    selesaiBerkelanjutan: number;
    catatan: { ok: number; note: number; reject: number };
    overdue: number;
    progress: number; // 0-100
  };

  const rows: DivisionRow[] = [
    {
      name: "BOD-1",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "KSPI",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "SETPER",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "AGA",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "KEU",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "VOP",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "REN",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "MHC",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "HUKUM",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
    {
      name: "MR",
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
      progress: 0,
    },
  ];

  const totals = rows.reduce(
    (acc, r) => {
      acc.jumlah += r.jumlah;
      acc.proses += r.proses;
      acc.selesai += r.selesai;
      acc.belumTindakLanjut += r.belumTindakLanjut;
      acc.selesaiBerkelanjutan += r.selesaiBerkelanjutan;
      acc.catatan.ok += r.catatan.ok;
      acc.catatan.note += r.catatan.note;
      acc.catatan.reject += r.catatan.reject;
      acc.overdue += r.overdue;
      return acc;
    },
    {
      jumlah: 0,
      proses: 0,
      selesai: 0,
      belumTindakLanjut: 0,
      selesaiBerkelanjutan: 0,
      catatan: { ok: 0, note: 0, reject: 0 },
      overdue: 0,
    }
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
        <h3 className="font-semibold">AOI GCG 2024</h3>
        <div className="flex items-center space-x-2 opacity-80 text-sm">
          <span className="hidden sm:inline">Ringkasan per divisi</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-blue-600 bg-opacity-5 text-blue-900">
              <th className="text-left font-semibold px-4 py-3">NAMA DIVISI</th>
              <th className="font-semibold px-4 py-3">JUMLAH</th>
              <th className="font-semibold px-4 py-3">PROSES</th>
              <th className="font-semibold px-4 py-3">SELESAI</th>
              <th className="font-semibold px-4 py-3">BELUM DITINDAKLANJUTI</th>
              <th className="font-semibold px-4 py-3">SELESAI BERKELANJUTAN</th>
              <th className="font-semibold px-4 py-3">CATATAN DIREKSI</th>
              <th className="font-semibold px-4 py-3">OVERDUE</th>
              <th className="font-semibold px-4 py-3">PROGRESS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => (
              <tr key={r.name} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-blue-700 font-semibold">
                  {r.name}
                </td>
                <td className="px-4 py-3 text-center">{r.jumlah}</td>
                <td className="px-4 py-3 text-center">{r.proses}</td>
                <td className="px-4 py-3 text-center">{r.selesai}</td>
                <td className="px-4 py-3 text-center">{r.belumTindakLanjut}</td>
                <td className="px-4 py-3 text-center">
                  {r.selesaiBerkelanjutan}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Badge color="green" value={r.catatan.ok} label="✓" />
                    <Badge color="yellow" value={r.catatan.note} label="⏱" />
                    <Badge color="red" value={r.catatan.reject} label="✖" />
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  {r.overdue > 0 ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs font-semibold">
                      {r.overdue}
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end">
                    <ProgressBar value={r.progress} />
                  </div>
                </td>
              </tr>
            ))}

            {/* Totals Row */}
            <tr className="bg-blue-50 font-semibold text-blue-900">
              <td className="px-4 py-3">JUMLAH</td>
              <td className="px-4 py-3 text-center">{totals.jumlah}</td>
              <td className="px-4 py-3 text-center">{totals.proses}</td>
              <td className="px-4 py-3 text-center">{totals.selesai}</td>
              <td className="px-4 py-3 text-center">
                {totals.belumTindakLanjut}
              </td>
              <td className="px-4 py-3 text-center">
                {totals.selesaiBerkelanjutan}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Badge color="green" value={totals.catatan.ok} label="✓" />
                  <Badge color="yellow" value={totals.catatan.note} label="⏱" />
                  <Badge color="red" value={totals.catatan.reject} label="✖" />
                </div>
              </td>
              <td className="px-4 py-3 text-center">{totals.overdue}</td>
              <td className="px-4 py-3 text-right">
                <div className="flex justify-end">
                  <ProgressBar value={38} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
