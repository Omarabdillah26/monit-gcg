import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';

interface PemegangSahamPageProps {
  onBack: () => void;
}

const PemegangSahamPage: React.FC<PemegangSahamPageProps> = ({ onBack }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [dropdownValues, setDropdownValues] = useState<Record<string, string>>({});

  const toggleRow = (rowId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setExpandedRows(newExpanded);
  };

  const handleDropdownChange = (rowId: string, value: string) => {
    setDropdownValues(prev => ({ ...prev, [rowId]: value }));
  };

  const tableData = [
    {
      id: '2',
      no: '2',
      penjelasanKriteria: 'PEMEGANG SAHAM DAN RUPS/PEMILIK MODAL',
      bobot: '8',
      skor: '42.50',
      children: [
        {
          id: '2.1',
          no: '2.1',
          penjelasanKriteria: 'Perusahaan memiliki struktur kepemilikan yang jelas dan transparan',
          bobot: '2.0',
          unsurPemenuhan: { sub: '3', total: '3' },
          parameter: '2.0',
          indikator: '2.0',
          aspek: '2.0',
          capai: '100',
          sumberDokumen: 'Struktur Kepemilikan',
          sumDok: 'Akta Pendirian',
          pemenuhanDok: 'Ada',
          pemDok: 'Lengkap',
          rekomendasi: 'Pertahankan',
          pemenuhanDok2022: 'Ada',
          keterangan: 'Sesuai regulasi'
        },
        {
          id: '2.2',
          no: '2.2',
          penjelasanKriteria: 'Pelaksanaan RUPS sesuai dengan ketentuan yang berlaku',
          bobot: '2.5',
          unsurPemenuhan: { sub: '2', total: '3' },
          parameter: '1.67',
          indikator: '1.67',
          aspek: '1.67',
          capai: '66.67',
          sumberDokumen: 'Notulen RUPS',
          sumDok: 'Berita Acara',
          pemenuhanDok: 'Ada',
          pemDok: 'Perlu Update',
          rekomendasi: 'Perbaiki dokumentasi',
          pemenuhanDok2022: 'Ada',
          keterangan: 'Perlu penyempurnaan'
        },
        {
          id: '2.3',
          no: '2.3',
          penjelasanKriteria: 'Perlindungan hak-hak pemegang saham minoritas',
          bobot: '1.5',
          unsurPemenuhan: { sub: '1', total: '3' },
          parameter: '0.5',
          indikator: '0.5',
          aspek: '0.5',
          capai: '33.33',
          sumberDokumen: 'Kebijakan Perlindungan',
          sumDok: 'SOP Perlindungan',
          pemenuhanDok: 'Tidak Ada',
          pemDok: 'Tidak Ada',
          rekomendasi: 'Buat kebijakan perlindungan',
          pemenuhanDok2022: 'Tidak Ada',
          keterangan: 'Belum tersedia'
        },
        {
          id: '2.4',
          no: '2.4',
          penjelasanKriteria: 'Transparansi informasi kepada pemegang saham',
          bobot: '2.0',
          unsurPemenuhan: { sub: '2', total: '3' },
          parameter: '1.33',
          indikator: '1.33',
          aspek: '1.33',
          capai: '66.67',
          sumberDokumen: 'Laporan Berkala',
          sumDok: 'Website Perusahaan',
          pemenuhanDok: 'Ada',
          pemDok: 'Parsial',
          rekomendasi: 'Tingkatkan transparansi',
          pemenuhanDok2022: 'Ada',
          keterangan: 'Perlu peningkatan'
        }
      ]
    }
  ];

  const dropdownOptions = ['Ada', 'Tidak Ada', 'Parsial', 'Lengkap', 'Perlu Update'];

  const renderRow = (item: any, level: number = 0) => {
    const isExpanded = expandedRows.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const paddingLeft = level * 20;

    return (
      <React.Fragment key={item.id}>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="px-2 py-3 text-sm border-r border-gray-200" style={{ paddingLeft: `${paddingLeft + 8}px` }}>
            <div className="flex items-center">
              {hasChildren && (
                <button
                  onClick={() => toggleRow(item.id)}
                  className="mr-2 p-1 hover:bg-gray-200 rounded"
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              )}
              {item.no}
            </div>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200 max-w-xs">
            <div className="break-words">{item.penjelasanKriteria}</div>
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">{item.bobot}</td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.unsurPemenuhan?.sub || '-'}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.unsurPemenuhan?.total || '-'}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">{item.parameter || '-'}</td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">{item.indikator || '-'}</td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">{item.aspek || '-'}</td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            <span className={`px-2 py-1 rounded text-xs ${
              parseFloat(item.capai || '0') >= 80 ? 'bg-green-100 text-green-800' :
              parseFloat(item.capai || '0') >= 60 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {item.capai}%
            </span>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">{item.sumberDokumen || '-'}</td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">{item.sumDok || '-'}</td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">
            <select
              value={dropdownValues[`${item.id}_pemenuhanDok`] || item.pemenuhanDok || ''}
              onChange={(e) => handleDropdownChange(`${item.id}_pemenuhanDok`, e.target.value)}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dropdownOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">
            <select
              value={dropdownValues[`${item.id}_pemDok`] || item.pemDok || ''}
              onChange={(e) => handleDropdownChange(`${item.id}_pemDok`, e.target.value)}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dropdownOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">{item.rekomendasi || '-'}</td>
          <td className="px-3 py-3 text-sm border-r border-gray-200">
            <select
              value={dropdownValues[`${item.id}_pemenuhanDok2022`] || item.pemenuhanDok2022 || ''}
              onChange={(e) => handleDropdownChange(`${item.id}_pemenuhanDok2022`, e.target.value)}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dropdownOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </td>
          <td className="px-3 py-3 text-sm">{item.keterangan || '-'}</td>
        </tr>
        {hasChildren && isExpanded && item.children.map((child: any) => renderRow(child, level + 1))}
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
          Pemegang Saham dan RUPS/Pemilik Modal
        </h1>
        <p className="text-slate-600 text-lg">
          Detail penilaian dan dokumentasi hubungan dengan pemegang saham
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-cyan-400 text-white">
              <tr>
                <th className="px-2 py-4 text-left border-r border-cyan-300 font-semibold">No</th>
                <th className="px-3 py-4 text-left border-r border-cyan-300 font-semibold min-w-[300px]">Penjelasan Kriteria</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">Bobot</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold" colSpan={2}>
                  UNSUR PEMENUHAN
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold" colSpan={3}>
                  SKOR
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">% Capaian</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">Sumber Dokumen</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">SUMBER DOKUMEN</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">PEMENUHAN DOKUMEN</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">PEMENUHAN DOKUMEN</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">REKOMENDASI</th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">Pemenuhan Dokumen 2022</th>
                <th className="px-3 py-4 text-center font-semibold">KETERANGAN DOKUMEN</th>
              </tr>
              <tr className="bg-cyan-300 text-white">
                <th className="px-2 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">Sub</th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">Total</th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">Parameter</th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">Indikator</th>
                <th className="px-3 py-2 text-center border-r border-cyan-200 text-xs">Aspek</th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2 border-r border-cyan-200"></th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(item => renderRow(item))}
            </tbody>
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

export default PemegangSahamPage;