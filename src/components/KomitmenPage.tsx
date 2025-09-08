import React, { useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";

interface KomitmenPageProps {
  onBack: () => void;
}

const KomitmenPage: React.FC<KomitmenPageProps> = ({ onBack }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [dropdownValues, setDropdownValues] = useState<Record<string, string>>(
    {}
  );
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({});

  const toggleRow = (rowId: string) => {
    const newExpanded = new Set(expandedRows);

    // Helper to find a node by id and collect all descendant ids
    const collectDescendantIds = (items: any[], targetId: string): string[] => {
      for (const item of items) {
        if (item.id === targetId) {
          const ids: string[] = [];
          const dfs = (node: any) => {
            if (node.children && node.children.length > 0) {
              for (const child of node.children) {
                ids.push(child.id);
                dfs(child);
              }
            }
          };
          dfs(item);
          return ids;
        }
        if (item.children && item.children.length > 0) {
          const res = collectDescendantIds(item.children, targetId);
          if (res.length > 0) return res;
        }
      }
      return [];
    };

    if (newExpanded.has(rowId)) {
      // Collapsing: also collapse all descendants of this row
      const descendants = collectDescendantIds(tableData as any[], rowId);
      for (const id of descendants) {
        newExpanded.delete(id);
      }
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }

    setExpandedRows(newExpanded);
  };

  const handleDropdownChange = (rowId: string, value: string) => {
    setDropdownValues((prev) => ({ ...prev, [rowId]: value }));
  };

  const handleFileUpload = (itemId: string, file: File | null) => {
    setUploadedFiles(prev => ({
      ...prev,
      [itemId]: file
    }));
  };

  const tableData = [
    {
      id: "1",
      no: "I",
      penjelasanKriteria:
        "KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN",
      bobot: "7",
      skor: "36.01",
      children: [
        {
          id: "2",
          no: "1",
          penjelasanKriteria:
            "Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) dan pedoman perilaku (code of conduct).",
          bobot: "1.218",
          unsurPemenuhan: { sub: "", total: "" },
          children: [
            {
              id: "3",
              no: "1.1",
              penjelasanKriteria:
                "Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) yang ditinjau dan dimutakhirkan secara berkala.",
              bobot: "0.609",
              unsurPemenuhan: { sub: "", total: "" },
              children: [
                {
                  id: "4",
                  no: "",
                  penjelasanKriteria: "Faktor-faktor yang Diuji Kesesuaian Penerapannya:",
                  isInfo: true,
                },
                {
                  id: "5",
                  no: "1.2.1",
                  penjelasanKriteria:
                    "Terdapat Pedoman Tata Kelola Perusahaan yang Baik (GCG Code).",
                  unsurPemenuhanText: "Ada Pedomen GCG",
                  bobot: "",
                  unsurPemenuhan: { sub: "1", total: "" },
                  parameter: "",
                  indikator: "",
                  aspek: "",
                  capai: "100",
                  sumberDokumen: "",
                  sumDok: "Pedoman GCGt",
                  pemenuhanDok: "Ada",
                  pemDok: "Lengkap",
                  rekomendasi: "Pertahankan",
                  pemenuhanDok2022: "Ada",
                },
                {
                  id: "6",
                  no: "1.3.2",
                  penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) ditandatangani oleh Organ BUMN atau dikukuhkan RUPS.",
                  unsurPemenuhanText: "Perusahaan memiliki Pedoman Perilaku yang ditinjau dan dimutakhirkan secara berkala.",
                  bobot: "",
                  unsurPemenuhan: { sub: "1", total: "" },
                  parameter: "",
                  indikator: "",
                  aspek: "",
                  capai: "100",
                  sumberDokumen: "",
                  sumDok: "Pedoman GCGt",
                  pemenuhanDok: "Ada",
                  pemDok: "Lengkap",
                  rekomendasi: "Pertahankan",
                  pemenuhanDok2022: "Ada",
                },
                {
                  id: "7",
                  no: "1.4.3",
                  penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) paling sedikit mengacu kepada Pedoman Penerapan Tata Kelola Perusahaan yang Baik (Good Corporate Governance) bagi Badan Usaha Milik Negara, Pedoman Sektoral (jika ada) dan/atau peraturan sektoral.",
                  unsurPemenuhanText:
                    "Muatan Pedoman GCG mencakup ketentuan penerapan GCG sesuai PER-01/MBU/2011 (pasal 2 ayat 2) dan hal-hal lain mengikuti peraturan sektoral yang sekurangnya mengatur tentang organ utama perusahaan dan governance policy perusahaan",
                  bobot: "",
                  unsurPemenuhan: { sub: "1", total: "" },
                  parameter: "",
                  indikator: "",
                  aspek: "",
                  capai: "100",
                  sumberDokumen: "",
                  sumDok: "Pedoman GCGt",
                  pemenuhanDok: "Ada",
                  pemDok: "Lengkap",
                  rekomendasi: "Pertahankan",
                  pemenuhanDok2022: "Ada",
                },
                {
                  id: "8",
                  no: "1.5.4",
                  penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) ditinjau dan dimutakhirkan secara berkala.",
                  unsurPemenuhanText:
                    "1. Adanya pembahasan/kajian atas kebutuhan pemutakhiran Pedoman GCG (yang dilakukan minimal 3 (tiga) tahun sekali atau sesuai kebutuhan perubahan peraturan/kondisi yang signifikan).",
                  bobot: "",
                  unsurPemenuhan: { sub: "1", total: "" },
                  parameter: "",
                  indikator: "",
                  aspek: "",
                  capai: "100",
                  sumberDokumen: "",
                  sumDok: "Pedoman GCGt",
                  pemenuhanDok: "Ada",
                  pemDok: "Lengkap",
                  rekomendasi: "Pertahankan",
                  pemenuhanDok2022: "Ada",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const dropdownOptions = [
    "Ada",
    "Tidak Ada",
    "Parsial",
    "Lengkap",
    "Perlu Update",
  ];

  const isNumericString = (value: any): boolean => {
    if (value === null || value === undefined || value === "") return false;
    const num = parseFloat(value as string);
    return Number.isFinite(num) && !Number.isNaN(num);
  };

  const computeAverageUnsurTotal = (node: any): number | null => {
    if (!node || !node.children || node.children.length === 0) {
      return isNumericString(node?.unsurPemenuhan?.total)
        ? parseFloat(node.unsurPemenuhan.total)
        : null;
    }

    const values: number[] = [];

    for (const child of node.children) {
      if (child.isInfo) continue;

      if (isNumericString(child?.unsurPemenuhan?.total)) {
        values.push(parseFloat(child.unsurPemenuhan.total));
        continue;
      }

      const nestedAverage = computeAverageUnsurTotal(child);
      if (nestedAverage !== null) values.push(nestedAverage);
    }

    if (values.length === 0) return null;

    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return sum / values.length;
  };

  const formatNumber = (value: number): string => {
    const isInt = Math.abs(value - Math.round(value)) < 1e-9;
    if (isInt) return `${Math.round(value)}`;
    
    // Preserve up to 3 decimal places, remove trailing zeros
    const formatted = value.toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
    return formatted;
  };

  const renderRow = (item: any, level: number = 0) => {
    const isExpanded = expandedRows.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const paddingLeft = level * 20;

    const explicitTotalRaw = item?.unsurPemenuhan?.total;
    const derivedTotalNumber: number | null =
      explicitTotalRaw !== undefined && explicitTotalRaw !== "" && isNumericString(explicitTotalRaw)
        ? parseFloat(explicitTotalRaw)
        : computeAverageUnsurTotal(item);
    const derivedTotalDisplay =
      derivedTotalNumber !== null ? formatNumber(derivedTotalNumber) : "-";

    const numericBobot: number | null = isNumericString(item.bobot)
      ? parseFloat(item.bobot)
      : null;
    const computedParameterScore =
      numericBobot !== null && derivedTotalNumber !== null
        ? formatNumber(numericBobot * derivedTotalNumber)
        : "-";

    const computedCapaianScore =
      numericBobot !== null && numericBobot !== 0 && derivedTotalNumber !== null
        ? formatNumber((numericBobot * derivedTotalNumber / numericBobot) * 100)
        : "-";

    const getChildParameterValue = (parentNode: any, childId: string): string => {
      if (!parentNode || !parentNode.children) return "-";
      
      const targetChild = parentNode.children.find((child: any) => child.id === childId);
      if (!targetChild) return "-";
      
      if (targetChild.parameter !== undefined && targetChild.parameter !== "") {
        return targetChild.parameter;
      }
      
      // Compute parameter if not explicitly set
      const childBobot = isNumericString(targetChild.bobot) ? parseFloat(targetChild.bobot) : null;
      const childTotal = targetChild?.unsurPemenuhan?.total;
      const childTotalNumber = childTotal !== undefined && childTotal !== "" && isNumericString(childTotal)
        ? parseFloat(childTotal)
        : computeAverageUnsurTotal(targetChild);
      
      if (childBobot !== null && childTotalNumber !== null) {
        return formatNumber(childBobot * childTotalNumber);
      }
      
      return "-";
    };

    return (
      <React.Fragment key={item.id}>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td
            className="px-2 py-3 text-sm border-r border-gray-200"
            style={{ paddingLeft: `${paddingLeft + 8}px` }}
          >
            <div
              className="flex items-center cursor-pointer select-none"
              onClick={() => hasChildren && toggleRow(item.id)}
            >
              {hasChildren && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRow(item.id);
                  }}
                  className="mr-2 p-1 hover:bg-gray-200 rounded"
                >
                  {isExpanded ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              )}
              {item.no}
            </div>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200 max-w-xs">
            <div className="break-words">{item.penjelasanKriteria}</div>
          </td>
          <td className="px-3 py-3 text-sm text-left border-r border-gray-200 align-top max-w-[420px]">
            <div className="whitespace-normal break-words">
              {item.unsurPemenuhanText
                ? item.unsurPemenuhanText
                : item.unsurPemenuhan
                ? `${item.unsurPemenuhan.sub}/${item.unsurPemenuhan.total}`
                : "-"}
            </div>
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.bobot || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.unsurPemenuhan?.sub !== undefined && item.unsurPemenuhan?.sub !== ""
              ? item.unsurPemenuhan.sub
              : "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {derivedTotalDisplay}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.parameter !== undefined && item.parameter !== ""
              ? item.parameter
              : computedParameterScore}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.indikator !== undefined && item.indikator !== ""
              ? item.indikator
              : getChildParameterValue(item, "3")}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.aspek || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.capai !== undefined ? (
              <span
                className={`px-2 py-1 rounded text-xs ${
                  (() => {
                    const capaiValue = item.capai !== undefined && item.capai !== ""
                      ? parseFloat(item.capai)
                      : parseFloat(computedCapaianScore === "-" ? "0" : computedCapaianScore);
                    return capaiValue >= 80
                      ? "bg-green-100 text-green-800"
                      : capaiValue >= 60
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800";
                  })()
                }`}
              >
                {item.capai !== undefined && item.capai !== ""
                  ? `${item.capai}%`
                  : `${computedCapaianScore}%`}
              </span>
            ) : (
              computedCapaianScore !== "-" ? (
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    parseFloat(computedCapaianScore) >= 80
                      ? "bg-green-100 text-green-800"
                      : parseFloat(computedCapaianScore) >= 60
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {computedCapaianScore}%
                </span>
              ) : (
                "-"
              )
            )}
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">
            <div className="flex flex-col gap-2">
              <input
                type="file"
                id={`file-${item.id}`}
                onChange={(e) => handleFileUpload(item.id, e.target.files?.[0] || null)}
                className="hidden"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor={`file-${item.id}`}
                className="px-3 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer hover:bg-blue-600 text-center"
              >
                {uploadedFiles[item.id] ? 'Ganti File' : 'Upload File'}
              </label>
              {uploadedFiles[item.id] && (
                <span className="text-xs text-gray-600 truncate" title={uploadedFiles[item.id]?.name}>
                  {uploadedFiles[item.id]?.name}
                </span>
              )}
            </div>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">
            {item.isInfo ? (
              "-"
            ) : (
              <select
                value={
                  dropdownValues[`${item.id}_pemenuhanDok`] ||
                  item.pemenuhanDok ||
                  ""
                }
                onChange={(e) =>
                  handleDropdownChange(`${item.id}_pemenuhanDok`, e.target.value)
                }
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {dropdownOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">
            {item.rekomendasi || "-"}
          </td>
        </tr>
        {hasChildren &&
          isExpanded &&
          item.children.map((child: any) => renderRow(child, level + 1))}
      </React.Fragment>
    );
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke Home</span>
        </button>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Komitmen Terhadap Penerapan Tata Kelola Secara Berkelanjutan
        </h1>
        <p className="text-slate-600 text-lg">
          Detail penilaian dan dokumentasi komitmen tata kelola perusahaan
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-cyan-400 text-white">
              <tr>
                <th className="px-2 py-4 text-left border-r border-cyan-300 font-semibold">
                  No
                </th>
                <th className="px-3 py-4 text-left border-r border-cyan-300 font-semibold min-w-[300px]">
                  Penjelasan Kriteria
                </th>
                <th className="px-3 py-4 text-left border-r border-cyan-300 font-semibold min-w-[380px]">
                  UNSUR PEMENUHAN
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  Bobot
                </th>
                <th
                  className="px-3 py-4 text-center border-r border-cyan-300 font-semibold"
                  colSpan={2}
                >
                  Capaian FUK & Prm
                </th>
                <th
                  className="px-3 py-4 text-center border-r border-cyan-300 font-semibold"
                  colSpan={3}
                >
                  SKOR
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  % Capaian
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  Sumber Dokumen
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  PEMENUHAN DOKUMEN
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  REKOMENDASI
                </th>
                <th className="px-3 py-4 text-center font-semibold min-w-[150px]">
                  KETERANGAN DOKUMEN
                </th>
              </tr>
              <tr className="bg-cyan-300 text-white">
                <th className="px-2 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">
                  Sub
                </th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">
                  Total
                </th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">
                  Parameter
                </th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">
                  Indikator
                </th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">
                  Aspek
                </th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>{tableData.map((item) => renderRow(item))}</tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Keterangan:</h3>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• Klik ikon panah untuk melihat detail sub-kriteria</p>
          <p>• Gunakan dropdown untuk mengubah status pemenuhan dokumen</p>
          <p>• Warna hijau: Capaian ≥ 80%, Kuning: 60-79%, Merah: &lt; 60%</p>
        </div>
      </div>
    </div>
  );
};

export default KomitmenPage;