import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  Upload,
  X,
  Download,
  Eye,
  FileText,
  Image,
  Video,
  Music,
} from "lucide-react";

interface KomitmenPageProps {
  onBack: () => void;
}

interface FileData {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

const KomitmenPage: React.FC<KomitmenPageProps> = ({ onBack }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [isSuperAdmin] = useState(true);
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: "I",
      no: "I",
      penjelasanKriteria:
        "KOMITMEN TERHADAP PENERAPAN TATA KELOLA SECARA BERKELANJUTAN",
      unsurPemenuhan: "",
      bobot: "7.000",
      capaianSub: "",
      capaianTotal: "",
      skorParameter: "",
      skorIndikator: "",
      skorAspek: "1.000",
      capaianPersen: "",
      pemenuhanDokumen: "",
      files: [] as FileData[],
      status: "",
      rekomendasi: "",
      sumberDokumen: "",
      keteranganDokumen: "",
      children: [
        {
          id: "1",
          no: "1",
          penjelasanKriteria:
            "Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) dan pedoman perilaku (code of conduct).",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "",
          skorParameter: "",
          skorIndikator: "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) yang ditinjau dan dimutakhirkan secara berkala.",
          skorAspek: "",
          capaianPersen: "",
          pemenuhanDokumen: "",
          files: [] as FileData[],
          status: "",
          rekomendasi: "",
          sumberDokumen: "",
          keteranganDokumen: "",
          children: [
            {
              id: "1.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) yang ditinjau dan dimutakhirkan secara berkala.",
              unsurPemenuhan: "",
              bobot: "0.609",
              capaianSub: "",
              capaianTotal: "1.000",
              skorParameter: "0.609",
              skorIndikator: "",
              skorAspek: "",
              capaianPersen: "",
              pemenuhanDokumen: "",
              files: [] as FileData[],
              status: "",
              rekomendasi: "",
              sumberDokumen: "",
              keteranganDokumen: "",
              children: [
                {
                  id: "1.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat Pedoman Tata Kelola Perusahaan yang Baik (GCG Code).",
                  unsurPemenuhan: "Ada Pedomen GCG",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [
                    {
                      id: "1",
                      name: "SK_GCG_2024.pdf",
                      size: 1024000,
                      type: "application/pdf",
                      url: "#",
                    },
                  ] as FileData[],
                  status: "Ada",
              rekomendasi: "Pertahankan",
                  sumberDokumen: "SK Dewan Komisaris, Notulen Rapat",
                  keteranganDokumen:
                    "Dokumen GCG sudah lengkap dan sesuai standar",
            },
            {
              id: "1.1.2",
                  no: "(2)",
              penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) ditandatangani oleh Organ BUMN atau dikukuhkan RUPS..",
                  unsurPemenuhan: "1. Disahkan oleh Direksi saja 2. Disahkan oleh Direksi dan Dewan Komisaris atau dikukuhkan RUPS",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
              rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan Sosialisasi, Daftar Hadir",
                  keteranganDokumen:
                    "Sudah ditandatangani oleh Dewan Komisaris",
            },
            {
              id: "1.1.3",
                  no: "(3)",
                  penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) paling sedikit mengacu kepada Pedoman Penerapan Tata Kelola Perusahaan yang Baik (Good Corporate Governance) bagi Badan Usaha Milik Negara, Pedoman Sektoral (jika ada) dan/atau peraturan sektoral.",
                  unsurPemenuhan: "Muatan Pedoman GCG mencakup ketentuan penerapan GCG sesuai PER-01/MBU/2011 (pasal 2 ayat 2) dan hal-hal lain mengikuti peraturan sektoral yang sekurangnya mengatur tentang organ utama perusahaan dan governance policy perusahaan",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Website Perusahaan, Screenshot",
                  keteranganDokumen: "Mengacu pada pedoman BUMN dan sektoral",
                },
                {
                  id: "1.1.4",
                  no: "(4)",
              penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) ditinjau dan dimutakhirkan secara berkala.",
                  unsurPemenuhan: "1. Adanya pembahasan/kajian atas kebutuhan pemutakhiran Pedoman GCG (yang dilakukan minimal 3 (tiga) tahun sekali atau sesuai kebutuhan perubahan peraturan/kondisi yang signifikan). 2. Pedoman telah dimutakhirkan 3. Pedoman yang dimutakhirkan telah disahkan Direksi dan Komisaris atau dikukuhkan RUPS.",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
              rekomendasi: "Pertahankan",
                  sumberDokumen: "Dokumen Review, Laporan Update",
                  keteranganDokumen: "Dokumen direview setiap tahun",
                },
              ],
            },
            {
              id: "1.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan memiliki Pedoman Perilaku yang ditinjau dan dimutakhirkan secara berkala.",
              unsurPemenuhan: "",
              bobot: "0.609",
              capaianSub: "",
              capaianTotal: "1.000",
              skorParameter: "0.609",
              skorIndikator: "",
              skorAspek: "",
              capaianPersen: "",
              pemenuhanDokumen: "",
              files: [] as FileData[],
              status: "",
              rekomendasi: "",
              sumberDokumen: "",
              keteranganDokumen: "",
              children: [
                {
                  id: "1.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat Pedoman Perilaku.",
                  unsurPemenuhan: "Ada Pedoman Perilaku",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [
                    {
                      id: "1",
                      name: "Pedoman_Perilaku_2024.pdf",
                      size: 1024000,
                      type: "application/pdf",
                      url: "#",
                    },
                  ] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "SK Direksi, Notulen Rapat",
                  keteranganDokumen:
                    "Dokumen Pedoman Perilaku sudah lengkap dan sesuai standar",
                },
                {
                  id: "1.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pedoman Perilaku ditandatangani oleh Direksi atau dikukuhkan RUPS.",
                  unsurPemenuhan: "1. Disahkan oleh Direksi saja 2. Disahkan oleh Direksi dan Dewan Komisaris atau dikukuhkan RUPS",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan Sosialisasi, Daftar Hadir",
                  keteranganDokumen:
                    "Sudah ditandatangani oleh Direksi",
                },
                {
                  id: "1.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat Pedoman Perilaku.",
                  unsurPemenuhan: "1. Adanya pernyataan komitmen yang mencakup komitmen Direksi dan Komisaris/Dewan Pengawas untuk mematuhi Code of Conduct.",
                  bobot: "",
                  capaianSub: "1",
                  capaianTotal: "",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [
                    {
                      id: "1",
                      name: "Pedoman_Perilaku_2024.pdf",
                      size: 1024000,
                      type: "application/pdf",
                      url: "#",
                    },
                  ] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "SK Direksi, Notulen Rapat",
                  keteranganDokumen:
                    "Dokumen Pedoman Perilaku sudah lengkap dan sesuai standar",
                },
                
                // {
                //   id: "1.2.4",
                //   no: "(4)",
                //   penjelasanKriteria:
                //     "Pedoman Perilaku ditinjau dan dimutakhirkan secara berkala.",
                //   unsurPemenuhan: "1. Adanya pembahasan/kajian atas kebutuhan pemutakhiran Pedoman Perilaku (yang dilakukan minimal 3 (tiga) tahun sekali atau sesuai kebutuhan perubahan peraturan/kondisi yang signifikan). 2. Pedoman telah dimutakhirkan 3. Pedoman yang dimutakhirkan telah disahkan Direksi dan Komisaris atau dikukuhkan RUPS.",
                //   bobot: "",
                //   capaianSub: "",
                //   capaianTotal: "1",
                //   skorParameter: "",
                //   skorIndikator: "",
                //   skorAspek: "",
                //   capaianPersen: "100%",
                //   pemenuhanDokumen: "Ada",
                //   files: [] as FileData[],
                //   status: "Ada",
                //   rekomendasi: "Pertahankan",
                //   sumberDokumen: "Dokumen Review, Laporan Update",
                //   keteranganDokumen: "Dokumen direview setiap tahun",
                // },
              ],
            },
          ],
        },
        {
          id: "2",
          no: "2",
          penjelasanKriteria:
            "Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik dan Pedoman Perilaku secara konsisten.",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "1.000",
          skorParameter: "",
          skorIndikator: "=Capaian FUK & Prm kategori Total bagian Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik dan Pedoman Perilaku secara konsisten.",
          skorAspek: "",
          capaianPersen: "",
          pemenuhanDokumen: "",
          files: [] as FileData[],
          status: "",
          rekomendasi: "",
          sumberDokumen: "",
          keteranganDokumen: "",
          children: [
            {
              id: "2.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) secara konsisten.",
              unsurPemenuhan: "",
              bobot: "0.609",
              capaianSub: "",
              capaianTotal: "1.000",
              skorParameter: "0.609",
              skorIndikator: "",
              skorAspek: "",
              capaianPersen: "",
              pemenuhanDokumen: "",
              files: [] as FileData[],
              status: "",
              rekomendasi: "",
              sumberDokumen: "",
              keteranganDokumen: "",
              children: [
                {
                  id: "2.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat bukti pelaksanaan Pedoman GCG dalam operasional perusahaan.",
                  unsurPemenuhan: "1. Adanya dokumentasi pelaksanaan GCG dalam rapat-rapat organ perusahaan 2. Adanya laporan kepatuhan GCG 3. Adanya sosialisasi dan training GCG",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [
                    {
                      id: "1",
                      name: "Laporan_Kepatuhan_GCG_2024.pdf",
                      size: 1024000,
                      type: "application/pdf",
                      url: "#",
                    },
                  ] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Notulen Rapat, Laporan Kepatuhan",
                  keteranganDokumen: "Pelaksanaan GCG terdokumentasi dengan baik",
                },
                {
                  id: "2.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pelaksanaan GCG dipantau dan dievaluasi secara berkala.",
                  unsurPemenuhan: "1. Adanya mekanisme monitoring dan evaluasi pelaksanaan GCG 2. Adanya laporan evaluasi berkala 3. Adanya tindak lanjut dari hasil evaluasi",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan Evaluasi, Notulen Rapat",
                  keteranganDokumen: "Monitoring dan evaluasi berjalan rutin",
                },
                {
                  id: "2.1.3",
                  no: "(3)",
                  penjelasanKriteria:
                    "Pelaksanaan GCG dilaporkan kepada organ pengawas secara berkala.",
                  unsurPemenuhan: "1. Adanya laporan berkala pelaksanaan GCG kepada Dewan Komisaris 2. Adanya notulen rapat yang membahas laporan GCG 3. Adanya tindak lanjut dari rekomendasi organ pengawas",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan ke Dewan Komisaris, Notulen Rapat",
                  keteranganDokumen: "Pelaporan rutin kepada organ pengawas",
                },
                {
                  id: "2.1.4",
                  no: "(4)",
                  penjelasanKriteria:
                    "Pelaksanaan GCG dievaluasi dan dimutakhirkan sesuai kebutuhan.",
                  unsurPemenuhan: "1. Adanya evaluasi berkala efektivitas pelaksanaan GCG 2. Adanya pemutakhiran prosedur pelaksanaan GCG 3. Adanya sosialisasi perubahan kepada seluruh karyawan",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan Evaluasi, Prosedur Update",
                  keteranganDokumen: "Evaluasi dan pemutakhiran berjalan rutin",
                },
              ],
            },
            {
              id: "2.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan melaksanakan Pedoman Perilaku secara konsisten.",
              unsurPemenuhan: "",
              bobot: "0.609",
              capaianSub: "",
              capaianTotal: "1.000",
              skorParameter: "0.609",
              skorIndikator: "",
              skorAspek: "",
              capaianPersen: "",
              pemenuhanDokumen: "",
              files: [] as FileData[],
              status: "",
              rekomendasi: "",
              sumberDokumen: "",
              keteranganDokumen: "",
              children: [
                {
                  id: "2.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat bukti pelaksanaan Pedoman Perilaku dalam operasional perusahaan.",
                  unsurPemenuhan: "1. Adanya dokumentasi pelaksanaan Code of Conduct dalam operasional 2. Adanya laporan kepatuhan perilaku 3. Adanya sosialisasi dan training Code of Conduct",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [
                    {
                      id: "1",
                      name: "Laporan_Kepatuhan_Perilaku_2024.pdf",
                      size: 1024000,
                      type: "application/pdf",
                      url: "#",
                    },
                  ] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Notulen Rapat, Laporan Kepatuhan",
                  keteranganDokumen: "Pelaksanaan Code of Conduct terdokumentasi dengan baik",
                },
                {
                  id: "2.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pelaksanaan Code of Conduct dipantau dan dievaluasi secara berkala.",
                  unsurPemenuhan: "1. Adanya mekanisme monitoring dan evaluasi pelaksanaan Code of Conduct 2. Adanya laporan evaluasi berkala 3. Adanya tindak lanjut dari hasil evaluasi",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan Evaluasi, Notulen Rapat",
                  keteranganDokumen: "Monitoring dan evaluasi berjalan rutin",
                },
                {
                  id: "2.2.3",
                  no: "(3)",
                  penjelasanKriteria:
                    "Pelaksanaan Code of Conduct dilaporkan kepada organ pengawas secara berkala.",
                  unsurPemenuhan: "1. Adanya laporan berkala pelaksanaan Code of Conduct kepada Dewan Komisaris 2. Adanya notulen rapat yang membahas laporan perilaku 3. Adanya tindak lanjut dari rekomendasi organ pengawas",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan ke Dewan Komisaris, Notulen Rapat",
                  keteranganDokumen: "Pelaporan rutin kepada organ pengawas",
                },
                {
                  id: "2.2.4",
                  no: "(4)",
                  penjelasanKriteria:
                    "Pelaksanaan Code of Conduct dievaluasi dan dimutakhirkan sesuai kebutuhan.",
                  unsurPemenuhan: "1. Adanya evaluasi berkala efektivitas pelaksanaan Code of Conduct 2. Adanya pemutakhiran prosedur pelaksanaan Code of Conduct 3. Adanya sosialisasi perubahan kepada seluruh karyawan",
                  bobot: "",
                  capaianSub: "",
                  capaianTotal: "1",
                  skorParameter: "",
                  skorIndikator: "",
                  skorAspek: "",
                  capaianPersen: "100%",
                  pemenuhanDokumen: "Ada",
                  files: [] as FileData[],
                  status: "Ada",
                  rekomendasi: "Pertahankan",
                  sumberDokumen: "Laporan Evaluasi, Prosedur Update",
                  keteranganDokumen: "Evaluasi dan pemutakhiran berjalan rutin",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const toggleRow = (rowId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setExpandedRows(newExpanded);
  };

  const updateStatus = (itemId: string, newStatus: string) => {
    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          return { ...item, status: newStatus };
        }
        if (item.children) {
          return { ...item, children: updateItemInArray(item.children) };
        }
        return item;
      });
    };

    setTableData((prevData) => updateItemInArray(prevData));
  };

  const addFile = (itemId: string, file: File) => {
    const newFile: FileData = {
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    };

    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          return { ...item, files: [...item.files, newFile] };
        }
        if (item.children) {
          return { ...item, children: updateItemInArray(item.children) };
        }
        return item;
      });
    };

    setTableData((prevData) => updateItemInArray(prevData));
  };

  const removeFile = (itemId: string, fileId: string) => {
    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            files: item.files.filter((f: FileData) => f.id !== fileId),
          };
        }
        if (item.children) {
          return { ...item, children: updateItemInArray(item.children) };
        }
        return item;
      });
    };

    setTableData((prevData) => updateItemInArray(prevData));
  };

  // Handler untuk mengubah bobot dan menyesuaikan nilai turunan yang terkait
  const handleBobotChange = (itemId: string, value: string) => {
    const formatted = Number(value).toFixed(3);

    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          // Jika item memiliki skorParameter numerik, sinkronkan agar perhitungan turunannya (sum & persen) ikut berubah
          const currentSkorParamIsNumeric = item.skorParameter !== undefined && item.skorParameter !== "" && !isNaN(parseFloat(item.skorParameter));
          return {
            ...item,
            bobot: formatted,
            skorParameter: currentSkorParamIsNumeric ? formatted : item.skorParameter,
          };
        }
        if (item.children) {
          return { ...item, children: updateItemInArray(item.children) };
        }
        return item;
      });
    };

    setTableData((prev) => updateItemInArray(prev));
  };

  // Hitung ulang skorParameter untuk node yang anak-anaknya memiliki capaianTotal
  const recalcSkorParameters = (items: any[]): any[] => {
    const withChildrenUpdated = items.map((item) => {
      if (item.children && item.children.length > 0) {
        const updatedChildren = recalcSkorParameters(item.children);

        // Jika item memiliki bobot dan semua anak adalah leaf dengan capaianTotal, distribusikan bobot secara rata
        const allLeafWithCapaian = updatedChildren.length > 0 && updatedChildren.every((ch: any) => !ch.children || ch.children.length === 0);
        if (item.bobot && allLeafWithCapaian) {
          const bobot = parseFloat(item.bobot);
          const n = updatedChildren.length;
          let sum = 0;
          for (const ch of updatedChildren) {
            const capaian = parseFloat(ch.capaianTotal || "0");
            if (!isNaN(capaian)) {
              sum += (bobot / n) * capaian;
            }
          }
          const newSkorParameter = isNaN(sum) ? item.skorParameter : sum.toFixed(3);
          return { ...item, children: updatedChildren, skorParameter: newSkorParameter };
        }

        return { ...item, children: updatedChildren };
      }
      return item;
    });

    return withChildrenUpdated;
  };

  // Handler untuk ubah capaian total pada leaf (baris terdalam)
  const handleCapaianTotalChange = (itemId: string, value: string) => {
    const updateLeaf = (items: any[]): any[] =>
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, capaianTotal: value };
        }
        if (item.children) {
          return { ...item, children: updateLeaf(item.children) };
        }
        return item;
      });

    setTableData((prev) => recalcSkorParameters(updateLeaf(prev)));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.includes("pdf")) return "📄";
    if (type.includes("image")) return "🖼️";
    if (type.includes("word") || type.includes("document")) return "📝";
    if (type.includes("excel") || type.includes("spreadsheet")) return "📊";
    return "📎";
  };

  const formatText = (text: string): string => {
    if (!text) return "";
    
    // Check if text contains numbered patterns like "1.", "2.", "3." etc. or alphabetical like "a.", "b.", "c." etc.
    const hasNumberedPattern = /\d+\.|[a-z]\./.test(text);
    
    if (!hasNumberedPattern) {
      // If no numbered patterns, return text as is
      return text;
    }
    
    // If has numbered patterns, apply numbered formatting
    const parts = text.split(/(\d+\.|[a-z]\.)/);
    
    if (parts.length <= 1) return text;
    
    let formatted = "";
    for (let i = 1; i < parts.length; i += 2) {
      if (parts[i] && parts[i + 1]) {
        formatted += `${parts[i]}\n${parts[i + 1].trim()}\n\n`;
      }
    }
    
    return formatted.trim();
  };

  const getChildCapaianTotal = (parentNode: any, childId: string): string => {
    if (!parentNode || !parentNode.children) return "-";
    
    const targetChild = parentNode.children.find((child: any) => child.id === childId);
    if (!targetChild) return "-";
    
    return targetChild.capaianTotal || "-";
  };

  const getSumOfChildParameters = (parentNode: any): string => {
    if (!parentNode || !parentNode.children) return "-";
    
    let sum = 0;
    let hasValidValues = false;
    
    for (const child of parentNode.children) {
      if (child.skorParameter && child.skorParameter !== "") {
        const value = parseFloat(child.skorParameter);
        if (!isNaN(value)) {
          sum += value;
          hasValidValues = true;
        }
      }
    }
    
    if (!hasValidValues) return "-";
    
    return sum.toFixed(3);
  };

  const getSumOfChildIndikators = (parentNode: any): string => {
    if (!parentNode || !parentNode.children) return "-";

    let sum = 0;
    let hasValidValues = false;

    for (const child of parentNode.children) {
      // Calculate the Skor Indikator for each child using getSumOfChildParameters
      const childIndikatorValue = getSumOfChildParameters(child);
      if (childIndikatorValue !== "-") {
        const value = parseFloat(childIndikatorValue);
        if (!isNaN(value)) {
          sum += value;
          hasValidValues = true;
        }
      }
    }

    if (!hasValidValues) return "-";

    return sum.toFixed(3);
  };

  const computeCapaianPersen = (item: any): string => {
    if (!item.skorParameter || !item.bobot) return "-";
    
    const parameter = parseFloat(item.skorParameter);
    const bobot = parseFloat(item.bobot);
    
    if (isNaN(parameter) || isNaN(bobot) || bobot === 0) return "-";
    
    const percentage = (parameter / bobot) * 100;
    return `${percentage.toFixed(1)}%`;
  };

  const computeCapaianPersenIndikator = (item: any): string => {
    if (!item.bobot) return "-";
    
    // For the parent row, the Indikator should equal the Bobot to get 100%
    const indikator = parseFloat(item.bobot);
    const bobot = parseFloat(item.bobot);
    
    if (isNaN(indikator) || isNaN(bobot) || bobot === 0) return "-";
    
    const percentage = (indikator / bobot) * 100;
    return `${percentage.toFixed(1)}%`;
  };

  const computeCapaianPersenAspek = (item: any): string => {
    if (!item.skorAspek || !item.bobot) return "-";
    
    const aspek = parseFloat(item.skorAspek);
    const bobot = parseFloat(item.bobot);
    
    if (isNaN(aspek) || isNaN(bobot) || bobot === 0) return "-";
    
    const percentage = (aspek / bobot) * 100;
    return `${percentage.toFixed(1)}%`;
  };

  const computeCapaianPersenMainItem = (item: any): string => {
    if (!item.bobot) return "-";
    
    // For item "I", calculate Aspek from sum of child Indikators
    const aspekValue = getSumOfChildIndikators(item);
    if (aspekValue === "-") return "-";
    
    const aspek = parseFloat(aspekValue);
    const bobot = parseFloat(item.bobot);
    
    if (isNaN(aspek) || isNaN(bobot) || bobot === 0) return "-";
    
    const percentage = (aspek / bobot) * 100;
    return `${percentage.toFixed(1)}%`;
  };

  const canPreviewFile = (type: string): boolean => {
    return (
      type.includes("image") || type.includes("pdf") || type.includes("text")
    );
  };

  const openFileViewer = (file: FileData) => {
    setSelectedFile(file);
    setShowFileViewer(true);
  };

  const closeFileViewer = () => {
    setShowFileViewer(false);
    setSelectedFile(null);
  };

  const FileViewerModal = () => {
    if (!selectedFile || !showFileViewer) return null;

    const renderFileContent = () => {
      if (selectedFile.type.includes("image")) {
        return (
          <div className="flex justify-center">
            <img
              src={selectedFile.url}
              alt={selectedFile.name}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        );
      } else if (selectedFile.type.includes("pdf")) {
        return (
          <div className="w-full h-[70vh]">
            <iframe
              src={selectedFile.url}
              className="w-full h-full border-0 rounded-lg"
              title={selectedFile.name}
            />
          </div>
        );
      } else if (selectedFile.type.includes("text")) {
        return (
          <div className="bg-gray-50 p-4 rounded-lg h-[70vh] overflow-auto">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
              {/* For text files, you would need to read the file content */}
              File content preview not available for this file type. Please
              download the file to view its contents.
            </pre>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
            <FileText size={64} className="mb-4" />
            <p className="text-lg font-medium">Preview not available</p>
            <p className="text-sm">This file type cannot be previewed</p>
            <p className="text-xs mt-2">
              Please download the file to view its contents
            </p>
          </div>
        );
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{getFileIcon(selectedFile.type)}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedFile.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatFileSize(selectedFile.size)} • {selectedFile.type}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open(selectedFile.url, "_blank")}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800 transition-colors"
                title="Download"
              >
                <Download size={20} />
              </button>
              <button
                onClick={closeFileViewer}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800 transition-colors"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">{renderFileContent()}</div>
        </div>
      </div>
    );
  };

  const FileUploadComponent = ({ item }: { item: any }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      setIsUploading(true);

      const files = Array.from(e.dataTransfer.files);
      files.forEach((file: File) => {
        addFile(item.id, file);
      });

      setTimeout(() => setIsUploading(false), 1000);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      files.forEach((file: File) => {
        addFile(item.id, file);
      });
      e.target.value = "";
    };

    return (
      <div className="space-y-2">
        {/* File List */}
        {item.files.length > 0 && (
          <div className="space-y-1">
            {item.files.map((file: FileData) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-gray-50 rounded px-2 py-1 text-xs"
              >
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <span className="text-lg">{getFileIcon(file.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-700 truncate">
                      {file.name}
                    </p>
                    <p className="text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {canPreviewFile(file.type) && (
                    <button
                      onClick={() => openFileViewer(file)}
                      className="p-1 hover:bg-blue-100 rounded text-blue-600"
                      title="View"
                    >
                      <Eye size={12} />
                    </button>
                  )}
                  <button
                    onClick={() => window.open(file.url, "_blank")}
                    className="p-1 hover:bg-green-100 rounded text-green-600"
                    title="Download"
                  >
                    <Download size={12} />
                  </button>
                  <button
                    onClick={() => removeFile(item.id, file.id)}
                    className="p-1 hover:bg-red-100 rounded text-red-600"
                    title="Remove"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-3 text-center transition-colors ${
            isDragOver
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id={`file-upload-${item.id}`}
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt"
          />
          <label
            htmlFor={`file-upload-${item.id}`}
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            {isUploading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            ) : (
              <>
                <Upload size={20} className="text-gray-400" />
                <div className="text-xs text-gray-600">
                  <p className="font-medium">
                    Drop files here or click to upload
                  </p>
                  <p className="text-gray-500">
                    PDF, DOC, XLS, Images, Text (max 10MB)
                  </p>
                </div>
              </>
            )}
          </label>
        </div>
      </div>
    );
  };

  const renderRow = (item: any, level: number = 0) => {
    const isExpanded = expandedRows.has(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const paddingLeft = level * 24;

    return (
      <React.Fragment key={item.id}>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td
            className="px-2 py-3 text-sm border-r border-gray-200"
            style={{ paddingLeft: `${paddingLeft + 8}px` }}
          >
            <div className="flex items-center">
              {hasChildren && (
                <button
                  onClick={() => toggleRow(item.id)}
                  className="mr-2 p-1 hover:bg-gray-200 rounded"
                >
                  {isExpanded ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              )}
              <span
                className={`font-medium ${
                  level === 0
                    ? "text-xl text-blue-600"
                    : level === 1
                    ? "text-lg text-slate-700"
                    : level === 2
                    ? "text-base text-slate-600"
                    : "text-sm text-slate-500"
                }`}
              >
              {item.no}
              </span>
            </div>
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200 max-w-xs">
            <div
              className={`break-words ${
                level === 0
                  ? "font-bold text-slate-800"
                  : level === 1
                  ? "font-semibold text-slate-700"
                  : level === 2
                  ? "font-medium text-slate-600"
                  : "text-slate-600"
              }`}
            >
              {item.penjelasanKriteria}
            </div>
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.unsurPemenuhan ? (
              <div className="text-left whitespace-pre-line text-xs leading-relaxed max-w-[400px] p-2 bg-gray-50 rounded">
                {formatText(item.unsurPemenuhan)}
              </div>
            ) : (
              "-"
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.bobot ? (
              <select
                value={Number(item.bobot).toFixed(3)}
                onChange={(e) => handleBobotChange(item.id, e.target.value)}
                className="px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {/* Opsi nilai saat ini (agar tetap tampil meski tidak ada di daftar) */}
                <option value={Number(item.bobot).toFixed(3)}>{parseFloat(Number(item.bobot).toFixed(3))}</option>
                {/* Opsi standar */}
                <option value={Number(0.5).toFixed(3)}>0.5</option>
                <option value={Number(0.25).toFixed(3)}>0.25</option>
                <option value={Number(0.75).toFixed(3)}>0.75</option>
                <option value={Number(1).toFixed(3)}>1</option>
              </select>
            ) : (
              "-"
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.capaianSub || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {level === 3 ? (
              <input
                type="number"
                step="0.001"
                value={item.capaianTotal || ""}
                onChange={(e) => handleCapaianTotalChange(item.id, e.target.value)}
                className="w-20 px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
              />
            ) : (
              item.capaianTotal || "-"
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.skorParameter || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.skorIndikator && item.skorIndikator.startsWith("=Capaian FUK & Prm kategori Total bagian")
              ? getSumOfChildParameters(item)
              : item.skorIndikator || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.id === "I" 
              ? getSumOfChildIndikators(item)
              : item.skorAspek || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {level < 3 && item.capaianPersen && item.capaianPersen !== "" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {item.capaianPersen}
              </span>
            ) : level < 3 && item.id === "1.1" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersen(item)}
              </span>
            ) : level < 3 && item.id === "1.2" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersen(item)}
              </span>
            ) : level < 3 && item.id === "2.1" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersen(item)}
              </span>
            ) : level < 3 && item.id === "2.2" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersen(item)}
              </span>
            ) : level < 3 && item.id === "1" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersenIndikator(item)}
              </span>
            ) : level < 3 && item.id === "2" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersenIndikator(item)}
              </span>
            ) : level < 3 && item.id === "I" ? (
              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                {computeCapaianPersenMainItem(item)}
              </span>
            ) : (
              "-"
            )}
          </td>
          <td className="px-3 py-3 text-sm border-r border-gray-200 min-w-[200px]">
            {level === 3 ? (
              <FileUploadComponent item={item} />
            ) : (
              <div className="text-center text-gray-500">
                {item.pemenuhanDokumen || "-"}
              </div>
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {isSuperAdmin && level === 3 ? (
              <select
                value={item.status || ""}
                onChange={(e) => updateStatus(item.id, e.target.value)}
                className="px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih Status</option>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
              </select>
            ) : (
              <span
                className={`px-2 py-1 rounded text-xs ${
                  item.status === "Ada"
                    ? "bg-green-100 text-green-800"
                    : item.status === "Tidak Ada"
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.status || "-"}
              </span>
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.rekomendasi ? (
              <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-800">
                {item.rekomendasi}
              </span>
            ) : (
              "-"
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200 max-w-[200px]">
            <div className="break-words">{item.sumberDokumen || "-"}</div>
          </td>
          <td className="px-3 py-3 text-sm text-center max-w-[200px]">
            <div className="break-words">{item.keteranganDokumen || "-"}</div>
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
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
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
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold min-w-[200px]">
                  PEMENUHAN DOKUMEN
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  STATUS
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  REKOMENDASI
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  SUMBER DOKUMEN
                </th>
                <th className="px-3 py-4 text-center font-semibold">
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
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>{tableData.map((item) => renderRow(item))}</tbody>
          </table>
        </div>
      </div>

      {/* File Viewer Modal */}
      <FileViewerModal />

      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Keterangan:</h3>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• Klik ikon panah untuk melihat detail sub-kriteria</p>
          <p>• Warna hijau: Capaian 100% dan Pemenuhan Dokumen</p>
          <p>• Warna kuning: Rekomendasi</p>
          <p>• Status: Dropdown untuk Super Admin (Ada/Tidak Ada)</p>
          <p>• Upload File: Drag & drop atau klik untuk upload dokumen</p>
          <p>
            • View File: Klik ikon mata untuk preview file (PDF, Images, Text)
          </p>
          <p>• Format file: PDF, DOC, XLS, Images, Text (max 10MB)</p>
          <p>• Data sesuai dengan struktur penilaian governance</p>
          <p>• Format nomor: I → 1 → 1 → (1), (2), (3), (4)</p>
        </div>
      </div>
    </div>
  );
};

export default KomitmenPage;
