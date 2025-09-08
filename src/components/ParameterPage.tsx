import React from "react";
import { Settings, Database, Users, Shield } from "lucide-react";

const ParameterPage: React.FC = () => {
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
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki kebijakan Tata Kelola Perusahaan yang Baik (Good Corporate Governance).",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "3.",
          description:
            "Perusahaan memiliki pedoman perilaku (code of conduct) yang berlaku bagi seluruh insan Perusahaan.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "4.",
          description:
            "Perusahaan memiliki kebijakan anti-fraud dan/atau anti-korupsi.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "5.",
          description: "Perusahaan memiliki kebijakan whistleblowing system.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "6.",
          description:
            "Perusahaan memiliki kebijakan benturan kepentingan (conflict of interest).",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "7.",
          description: "Perusahaan memiliki kebijakan gratifikasi.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
      ],
      totalWeight: 21,
      totalScore: 14.0,
      totalValue: 14.0,
    },

    // RUPS/PEMILIK MODAL
    {
      section: "II. RUPS/PEMILIK MODAL",
      items: [
        {
          no: "1.",
          description:
            "Perusahaan memiliki mekanisme yang jelas untuk pelaksanaan RUPS/Pemilik Modal.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki mekanisme yang jelas untuk pengambilan keputusan RUPS/Pemilik Modal.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "3.",
          description:
            "Perusahaan memiliki mekanisme yang jelas untuk penyampaian informasi kepada RUPS/Pemilik Modal.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "4.",
          description:
            "Perusahaan memiliki mekanisme yang jelas untuk perlindungan hak-hak pemegang saham minoritas.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "5.",
          description:
            "Perusahaan memiliki mekanisme yang jelas untuk penyelesaian sengketa antara pemegang saham.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
      ],
      totalWeight: 15,
      totalScore: 10.0,
      totalValue: 10.0,
    },

    // DEWAN KOMISARIS/DEWAN PENGAWAS
    {
      section: "III. DEWAN KOMISARIS/DEWAN PENGAWAS",
      items: [
        {
          no: "1.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang independen.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki kompetensi dan pengalaman yang memadai.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "3.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki jumlah anggota yang proporsional.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "4.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme kerja yang jelas.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "5.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme evaluasi kinerja.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "6.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pelaporan kepada RUPS/Pemilik Modal.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "7.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pengawasan terhadap Direksi.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "8.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pengawasan terhadap komite-komite di bawahnya.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "9.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pengawasan terhadap kepatuhan terhadap peraturan perundang-undangan.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "10.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pengawasan terhadap sistem pengendalian internal.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "11.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pengawasan terhadap manajemen risiko.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "12.",
          description:
            "Perusahaan memiliki Dewan Komisaris/Dewan Pengawas yang memiliki mekanisme pengawasan terhadap keberlanjutan usaha.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
      ],
      totalWeight: 36,
      totalScore: 24.0,
      totalValue: 24.0,
    },

    // DIREKSI
    {
      section: "IV. DIREKSI",
      items: [
        {
          no: "1.",
          description:
            "Perusahaan memiliki Direksi yang memiliki kompetensi dan pengalaman yang memadai.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki Direksi yang memiliki jumlah anggota yang proporsional.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "3.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme kerja yang jelas.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "4.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme evaluasi kinerja.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "5.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pelaporan kepada Dewan Komisaris/Dewan Pengawas.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "6.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap manajemen.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "7.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap kepatuhan terhadap peraturan perundang-undangan.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "8.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap sistem pengendalian internal.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "9.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap manajemen risiko.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "10.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap keberlanjutan usaha.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "11.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap etika bisnis.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "12.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap tanggung jawab sosial perusahaan.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "13.",
          description:
            "Perusahaan memiliki Direksi yang memiliki mekanisme pengawasan terhadap inovasi dan pengembangan.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
      ],
      totalWeight: 39,
      totalScore: 26.0,
      totalValue: 26.0,
    },

    // PENGUNGKAPAN INFORMASI DAN TRANSPARANSI
    {
      section: "V. PENGUNGKAPAN INFORMASI DAN TRANSPARANSI",
      items: [
        {
          no: "1.",
          description:
            "Perusahaan memiliki kebijakan pengungkapan informasi yang transparan dan akuntabel.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki mekanisme pengungkapan informasi yang mudah diakses oleh publik.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "3.",
          description:
            "Perusahaan memiliki mekanisme pengungkapan informasi yang relevan dan material.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "4.",
          description:
            "Perusahaan memiliki mekanisme pengungkapan informasi yang tepat waktu.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
      ],
      totalWeight: 12,
      totalScore: 8.0,
      totalValue: 8.0,
    },

    // ASPEK LAINNYA
    {
      section: "VI. ASPEK LAINNYA",
      items: [
        {
          no: "1.",
          description:
            "Perusahaan memiliki kebijakan terkait keberlanjutan lingkungan.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
        {
          no: "2.",
          description:
            "Perusahaan memiliki kebijakan terkait tanggung jawab sosial dan komunitas.",
          weight: 3,
          score: 2.0,
          value: 2.0,
          ref: "ref jir",
        },
      ],
      totalWeight: 6,
      totalScore: 4.0,
      totalValue: 4.0,
    },
  ];

  // Hitung total keseluruhan
  const overallTotal = data.reduce(
    (acc, section) => {
      acc.weight += section.totalWeight;
      acc.score += section.totalScore;
      acc.value += section.totalValue;
      return acc;
    },
    { weight: 0, score: 0, value: 0 }
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          PARAMETER PENILAIAN ATAS PENERAPAN GOOD CORPORATE GOVERNANCE
        </h1>
        <p className="text-slate-600 text-lg">
          Detail parameter dan kriteria penilaian setiap aspek tata kelola
          perusahaan
        </p>
      </div>

      {/* Overall Summary */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              TOTAL PARAMETER KESELURUHAN
            </h2>
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
                    Ref
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
                      {item.description}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      {item.weight}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      {item.score}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      {item.value}
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center font-semibold text-red-600">
                      {item.ref}
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
                    {section.totalValue}
                  </td>
                  <td className="border border-slate-300 px-3 py-2 text-center">
                    -
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
            <h2 className="text-2xl font-bold mb-2">TOTAL PARAMETER</h2>
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

export default ParameterPage;
