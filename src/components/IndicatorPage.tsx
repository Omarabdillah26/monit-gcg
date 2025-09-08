import React from "react";

interface IndicatorPageProps {
  onNavigate?: (page: string) => void;
}

const IndicatorPage: React.FC<IndicatorPageProps> = ({ onNavigate }) => {
  // Mapping untuk navigasi ke halaman yang sesuai
  const getNavigationTarget = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      "I. KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN":
        "komitmen",
      "II. RUPS/PEMILIK MODAL": "pemegang-saham",
      "III. DEWAN KOMISARIS/DEWAN PENGAWAS": "dewan-komisaris",
      "IV. DIREKSI": "direksi",
      "V. PENGUNGKAPAN INFORMASI DAN TRANSPARANSI": "pengungkapan",
      "VI. ASPEK LAINNYA": "aspek-lain",
    };
    return sectionMap[section] || "";
  };

  const handleDescriptionClick = (section: string) => {
    const targetPage = getNavigationTarget(section);
    if (targetPage && onNavigate) {
      onNavigate(targetPage);
    }
  };

  const data = [
    // KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN
    {
      section:
        "I. KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN",
      items: [
        {
          no: "1.",
          description:
            "Perusahaan memiliki komitmen tertulis untuk menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance).",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki kebijakan Tata Kelola Perusahaan yang Baik (Good Corporate Governance).",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "3.",
          description:
            "Perusahaan memiliki struktur organisasi yang mendukung penerapan Tata Kelola Perusahaan yang Baik.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "4.",
          description:
            "Perusahaan memiliki sistem pengendalian internal yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "5.",
          description:
            "Perusahaan memiliki sistem manajemen risiko yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "6.",
          description:
            "Perusahaan memiliki sistem audit internal yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "7.",
          description: "Perusahaan memiliki sistem pelaporan yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
      ],
      totalWeight: 21,
      totalScore: 14.0,
      totalAchievement: "100.00%",
    },

    // RUPS/PEMILIK MODAL
    {
      section: "II. RUPS/PEMILIK MODAL",
      items: [
        {
          no: "8.",
          description:
            "RUPS/Pemilik Modal melakukan pengangkatan dan pemberhentian Dewan Komisaris/Dewan Pengawas.",
          weight: 5,
          score: 1.73,
          rawValue: 1.73,
          achievement: "ref jir",
        },
        {
          no: "9.",
          description:
            "RUPS/Pemilik Modal melakukan pengangkatan dan pemberhentian Direksi.",
          weight: 5,
          score: 1.73,
          rawValue: 1.73,
          achievement: "ref jir",
        },
        {
          no: "10.",
          description:
            "RUPS/Pemilik Modal membuat keputusan untuk kepentingan perusahaan.",
          weight: 5,
          score: 1.73,
          rawValue: 1.73,
          achievement: "ref jir",
        },
        {
          no: "11.",
          description:
            "RUPS/Pemilik Modal menyetujui laporan tahunan perusahaan.",
          weight: 5,
          score: 1.73,
          rawValue: 1.73,
          achievement: "ref jir",
        },
        {
          no: "12.",
          description:
            "RUPS/Pemilik Modal menerapkan Tata Kelola Perusahaan yang Baik.",
          weight: 5,
          score: 2.08,
          rawValue: 2.08,
          achievement: "ref jir",
        },
      ],
      totalWeight: 25,
      totalScore: 9.0,
      totalAchievement: "ref jir",
    },

    // DEWAN KOMISARIS/DEWAN PENGAWAS
    {
      section: "III. DEWAN KOMISARIS/DEWAN PENGAWAS",
      items: [
        {
          no: "13.",
          description:
            "Dewan Komisaris/Dewan Pengawas melaksanakan program pelatihan/pembelajaran secara berkelanjutan.",
          weight: 2,
          score: 1.35,
          rawValue: 1.35,
          achievement: "ref jir",
        },
        {
          no: "14.",
          description:
            "Dewan Komisaris/Dewan Pengawas melakukan pembagian tugas/fungsi, wewenang dan tanggung jawab secara jelas.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "15.",
          description:
            "Dewan Komisaris/Dewan Pengawas menyetujui Rencana Jangka Panjang Perusahaan (RJPP).",
          weight: 5,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "16.",
          description:
            "Dewan Komisaris/Dewan Pengawas menyetujui Rencana Kerja dan Anggaran Perusahaan (RKAP).",
          weight: 5,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "17.",
          description:
            "Dewan Komisaris/Dewan Pengawas memberikan arahan kepada Direksi.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "18.",
          description:
            "Dewan Komisaris/Dewan Pengawas melakukan pengawasan terhadap kebijakan Direksi.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "19.",
          description:
            "Dewan Komisaris/Dewan Pengawas mengelola konflik kepentingan.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "20.",
          description:
            "Dewan Komisaris/Dewan Pengawas memantau praktik Tata Kelola Perusahaan yang Baik.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "21.",
          description:
            "Dewan Komisaris/Dewan Pengawas mengadakan rapat yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "22.",
          description:
            "Dewan Komisaris/Dewan Pengawas memiliki sekretariat yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "23.",
          description:
            "Dewan Komisaris/Dewan Pengawas memiliki komite-komite yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "24.",
          description:
            "Dewan Komisaris/Dewan Pengawas melakukan evaluasi kinerja Direksi.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
      ],
      totalWeight: 43,
      totalScore: 35.0,
      totalAchievement: "ref jir",
    },

    // DIREKSI
    {
      section: "IV. DIREKSI",
      items: [
        {
          no: "25.",
          description:
            "Direksi melaksanakan program pelatihan/pembelajaran secara berkelanjutan.",
          weight: 2,
          score: 1.09,
          rawValue: 1.09,
          achievement: "80.96%",
        },
        {
          no: "26.",
          description:
            "Direksi melakukan pembagian tugas/fungsi, wewenang dan tanggung jawab secara jelas.",
          weight: 3,
          score: 1.87,
          rawValue: 1.87,
          achievement: "100.00%",
        },
        {
          no: "27.",
          description: "Direksi melakukan perencanaan perusahaan.",
          weight: 5,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "28.",
          description: "Direksi mencapai target kinerja perusahaan.",
          weight: 5,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "29.",
          description:
            "Direksi melakukan pengendalian operasional dan keuangan.",
          weight: 5,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "30.",
          description:
            "Direksi mengelola perusahaan sesuai dengan peraturan perundang-undangan.",
          weight: 5,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "31.",
          description:
            "Direksi membina hubungan yang bernilai tambah dengan stakeholder.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "32.",
          description: "Direksi memantau konflik kepentingan.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "33.",
          description: "Direksi melakukan pengungkapan informasi.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "34.",
          description: "Direksi mengadakan rapat Direksi.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "35.",
          description: "Direksi melakukan pengawasan internal.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "36.",
          description: "Direksi memiliki Sekretaris Perusahaan yang efektif.",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "37.",
          description:
            "Direksi menyelenggarakan Rapat Umum Pemegang Saham (RUPS).",
          weight: 3,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
      ],
      totalWeight: 52,
      totalScore: 35.0,
      totalAchievement: "91.83%",
    },

    // PENGUNGKAPAN INFORMASI DAN TRANSPARANSI
    {
      section: "V. PENGUNGKAPAN INFORMASI DAN TRANSPARANSI",
      items: [
        {
          no: "38.",
          description:
            "Perusahaan menyediakan informasi perusahaan kepada stakeholder.",
          weight: 2,
          score: 0.44,
          rawValue: 0.44,
          achievement: "100.00%",
        },
        {
          no: "39.",
          description:
            "Perusahaan memastikan akses stakeholder terhadap informasi yang relevan.",
          weight: 2,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "40.",
          description:
            "Perusahaan mengungkapkan informasi penting dalam laporan tahunan dan laporan keuangan.",
          weight: 2,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
        {
          no: "41.",
          description:
            "Perusahaan menerima penghargaan di bidang GCG dan bidang lainnya.",
          weight: 2,
          score: 2.0,
          rawValue: 2.0,
          achievement: "100.00%",
        },
      ],
      totalWeight: 16,
      totalScore: 9.0,
      totalAchievement: "90.26%",
    },

    // ASPEK LAINNYA
    {
      section: "VI. ASPEK LAINNYA",
      items: [
        {
          no: "42.",
          description:
            "Praktik Tata Kelola Perusahaan menjadi contoh atau benchmark bagi perusahaan perusahaan lainnya di Indonesia.",
          weight: 1,
          score: 5.0,
          rawValue: 5.0,
          achievement: "75.00%",
        },
        {
          no: "43.",
          description:
            "Praktik Tata Kelola Perusahaan menyimpang dari prinsip-prinsip Tata Kelola Perusahaan yang Baik sesuai Pedoman Penerapan Tata Kelola Perusahaan yang Baik (Good Corporate Governance) pada Badan Usaha Milik Negara, Pedoman Umum Good Corporate Governance Indonesia, dan standar-standar praktik dan ketentuan.",
          weight: 1,
          score: -5.0,
          rawValue: -5.0,
          achievement: "0.00%",
        },
      ],
      totalWeight: 2,
      totalScore: "-",
      totalAchievement: "0.00%",
    },
  ];

  // Hitung total keseluruhan
  const overallTotal = data.reduce(
    (acc, section) => {
      acc.weight += section.totalWeight;
      if (typeof section.totalScore === "number") {
        acc.score += section.totalScore;
      }
      return acc;
    },
    { weight: 0, score: 0 }
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          INDIKATOR PENILAIAN ATAS PENERAPAN GOOD CORPORATE GOVERNANCE
        </h1>
        <p className="text-slate-600 text-lg">
          Detail penilaian setiap aspek tata kelola perusahaan dengan bobot,
          skor, dan capaian
        </p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm">
            💡 <strong>Tips:</strong> Klik pada penjelasan kriteria untuk
            melihat detail lengkap di halaman yang sesuai di Dashboard.
          </p>
        </div>
      </div>

      {/* Overall Summary */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">TOTAL SKOR KESELURUHAN</h2>
            <p className="text-blue-100">Total Bobot: {overallTotal.weight}%</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-1">
              {overallTotal.score.toFixed(2)}
            </div>
            <div className="text-blue-100">Total Skor</div>
          </div>
        </div>
      </div>

      {/* Detailed Tables for Each Section */}
      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 bg-slate-100 p-3 rounded-lg">
            {section.section}
          </h3>

          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full border border-slate-300 text-sm">
              {/* Header */}
              <thead className="bg-green-200 text-slate-800 font-semibold">
                <tr>
                  <th className="border border-slate-300 px-3 py-2 w-16">
                    No.
                  </th>
                  <th className="border border-slate-300 px-3 py-2 text-left">
                    Penjelasan Kriteria
                  </th>
                  <th className="border border-slate-300 px-3 py-2 w-24">
                    Bobot
                  </th>
                  <th className="border border-slate-300 px-3 py-2 w-24">
                    Skor
                  </th>
                  <th className="border border-slate-300 px-3 py-2 w-24">
                    Nilai
                  </th>
                  <th className="border border-slate-300 px-3 py-2 w-32">
                    Capaian %
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {section.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="bg-white hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-center font-medium">
                      {item.no}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-left">
                      <button
                        onClick={() => handleDescriptionClick(section.section)}
                        className="text-left text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-all duration-200 hover:bg-blue-50 p-2 rounded-md w-full text-left"
                        title={`Klik untuk melihat detail di halaman ${section.section}`}
                      >
                        <span className="flex items-start">
                          <span className="mr-2 text-blue-400">🔗</span>
                          {item.description}
                        </span>
                      </button>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      {item.weight}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      {item.score}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      {item.rawValue}
                    </td>
                    <td
                      className={`border border-slate-300 px-3 py-2 text-center font-semibold ${
                        item.achievement === "ref jir"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {item.achievement}
                    </td>
                  </tr>
                ))}

                {/* Section Total */}
                <tr className="bg-blue-50 font-semibold">
                  <td
                    colSpan={2}
                    className="border border-slate-300 px-3 py-2 text-right"
                  >
                    JUMLAH {String.fromCharCode(65 + sectionIndex + 1)}:
                  </td>
                  <td className="border border-slate-300 px-3 py-2 text-center">
                    {section.totalWeight}
                  </td>
                  <td className="border border-slate-300 px-3 py-2 text-center">
                    {section.totalScore}
                  </td>
                  <td className="border border-slate-300 px-3 py-2 text-center">
                    -
                  </td>
                  <td
                    className={`border border-slate-300 px-3 py-2 text-center font-semibold ${
                      section.totalAchievement === "ref jir"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {section.totalAchievement}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Overall Total */}
      <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">TOTAL SKOR</h2>
            <p className="text-green-100">
              Total Bobot: {overallTotal.weight}%
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-1">
              {overallTotal.score.toFixed(2)}
            </div>
            <div className="text-green-100">Total Skor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorPage;
