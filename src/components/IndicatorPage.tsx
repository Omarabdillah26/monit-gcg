import React, { useEffect, useState } from "react";
import { useScore } from "../contexts/ScoreContext";

const IndicatorPage: React.FC = () => {
  const { getScoreWithFormula, getBobotWithFormula, scoreData } = useScore();
  const [dynamicData, setDynamicData] = useState<any[]>([]);

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

  // Effect to update dynamic data based on scores from KomitmenPage
  useEffect(() => {
    const updateDynamicData = () => {
      const updatedData = data.map(section => {
        if (section.section === "I. KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN") {
          return {
            ...section,
            items: section.items.map(item => {
              if (item.description === "Perusahaan memiliki komitmen tertulis untuk menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance).") {
                // Get score from KomitmenPage for GCG Code using the specific formula
                const gcgCodeScore = getScoreWithFormula("=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) dan pedoman perilaku (code of conduct).");
                const scoreValue = typeof gcgCodeScore === 'number' ? gcgCodeScore : parseFloat(gcgCodeScore as string) || 2.0;
                
                // Get bobot from KomitmenPage for GCG Code using the specific formula
                const gcgCodeBobot = getBobotWithFormula("=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) dan pedoman perilaku (code of conduct).");
                const bobotValue = typeof gcgCodeBobot === 'number' ? gcgCodeBobot : parseFloat(gcgCodeBobot as string) || 3;
                
                // Calculate achievement using Excel formula: =skor/bobot*100
                const achievementValue = bobotValue > 0 ? (scoreValue / bobotValue) * 100 : 0;
                const achievementPercentage = `${achievementValue.toFixed(2)}%`;
                
                return {
                  ...item,
                  weight: bobotValue,
                  score: scoreValue,
                  rawValue: scoreValue,
                  achievement: achievementPercentage
                };
              }
              return item;
            })
          };
        }
        return section;
      });
      
      setDynamicData(updatedData);
    };

    updateDynamicData();
  }, [scoreData, data]);

  // Use dynamic data if available, otherwise use static data
  const currentData = dynamicData.length > 0 ? dynamicData : data;

  // Hitung total keseluruhan
  const overallTotal = currentData.reduce(
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
        {Object.keys(scoreData).length > 0 && (
          <div className="mt-4 p-3 bg-white-50 border border-white-200 rounded-lg">
          </div>
        )}
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
      {currentData.map((section, sectionIndex) => (
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
                {section.items.map((item: any, itemIndex: number) => (
                  <tr key={itemIndex} className="bg-white hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-center font-medium">
                      {item.no}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-left">
                      {item.description}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <span>{item.weight}</span>
                        {item.description === "Perusahaan memiliki komitmen tertulis untuk menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance)." && (
                          <span className="text-blue-500" title="Terhubung dengan halaman Komitmen"></span>
                        )}
                      </div>
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <span>{item.score}</span>
                        {item.description === "Perusahaan memiliki komitmen tertulis untuk menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance)." && (
                          <span className="text-blue-500" title="Terhubung dengan halaman Komitmen"></span>
                        )}
                      </div>
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
                      <div className="flex items-center justify-center space-x-1">
                        <span>{item.achievement}</span>
                        {item.description === "Perusahaan memiliki komitmen tertulis untuk menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance)." && (
                          <span className="text-blue-500" title="Terhubung dengan halaman Komitmen (rumus: =skor/bobot*100)"></span>
                        )}
                      </div>
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

      {/* Keterangan */}
      <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Keterangan:</h3>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• 🔗 Skor, Bobot, dan Capaian dengan ikon link terhubung dengan halaman Komitmen secara real-time</p>
          <p>• Perubahan data di halaman Komitmen akan otomatis terupdate di halaman ini</p>
          <p>• Formula referensi seperti Excel: =Komitmen!SKOR Indikator dan =Komitmen!BOBOT</p>
          <p>• Rumus Capaian: =skor/bobot*100 (otomatis terhitung)</p>
          <p>• Data sesuai dengan struktur penilaian Good Corporate Governance</p>
        </div>
      </div>
    </div>
  );
};

export default IndicatorPage;
