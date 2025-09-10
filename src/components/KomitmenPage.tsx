import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  Upload,
  X,
  Download,
  Eye,
  FileText,
} from "lucide-react";
import { useScore } from "../contexts/ScoreContext";

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
  const { updateScore, updateBobot } = useScore();
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
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) yang ditinjau dan dimutakhirkan secara berkala.",
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
                  pic: "",
                },
                {
                  id: "1.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) ditandatangani oleh Organ BUMN atau dikukuhkan RUPS..",
                  unsurPemenuhan:
                    "1. Disahkan oleh Direksi saja 2. Disahkan oleh Direksi dan Dewan Komisaris atau dikukuhkan RUPS",
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
                  pic: "",
                },
                {
                  id: "1.1.3",
                  no: "(3)",
                  penjelasanKriteria:
                    "Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) paling sedikit mengacu kepada Pedoman Penerapan Tata Kelola Perusahaan yang Baik (Good Corporate Governance) bagi Badan Usaha Milik Negara, Pedoman Sektoral (jika ada) dan/atau peraturan sektoral.",
                  unsurPemenuhan:
                    "Muatan Pedoman GCG mencakup ketentuan penerapan GCG sesuai PER-01/MBU/2011 (pasal 2 ayat 2) dan hal-hal lain mengikuti peraturan sektoral yang sekurangnya mengatur tentang organ utama perusahaan dan governance policy perusahaan",
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
                  unsurPemenuhan:
                    "1. Adanya pembahasan/kajian atas kebutuhan pemutakhiran Pedoman GCG (yang dilakukan minimal 3 (tiga) tahun sekali atau sesuai kebutuhan perubahan peraturan/kondisi yang signifikan). 2. Pedoman telah dimutakhirkan 3. Pedoman yang dimutakhirkan telah disahkan Direksi dan Komisaris atau dikukuhkan RUPS.",
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
                  penjelasanKriteria: "Terdapat Pedoman Perilaku.",
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
                  unsurPemenuhan:
                    "1. Disahkan oleh Direksi saja 2. Disahkan oleh Direksi dan Dewan Komisaris atau dikukuhkan RUPS",
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
                  keteranganDokumen: "Sudah ditandatangani oleh Direksi",
                },
                {
                  id: "1.2.1",
                  no: "(1)",
                  penjelasanKriteria: "Terdapat Pedoman Perilaku.",
                  unsurPemenuhan:
                    "1. Adanya pernyataan komitmen yang mencakup komitmen Direksi dan Komisaris/Dewan Pengawas untuk mematuhi Code of Conduct.",
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
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik dan Pedoman Perilaku secara konsisten.",
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
                  unsurPemenuhan:
                    "1. Adanya dokumentasi pelaksanaan GCG dalam rapat-rapat organ perusahaan 2. Adanya laporan kepatuhan GCG 3. Adanya sosialisasi dan training GCG",
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
                  keteranganDokumen:
                    "Pelaksanaan GCG terdokumentasi dengan baik",
                },
                {
                  id: "2.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pelaksanaan GCG dipantau dan dievaluasi secara berkala.",
                  unsurPemenuhan:
                    "1. Adanya mekanisme monitoring dan evaluasi pelaksanaan GCG 2. Adanya laporan evaluasi berkala 3. Adanya tindak lanjut dari hasil evaluasi",
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
                  unsurPemenuhan:
                    "1. Adanya laporan berkala pelaksanaan GCG kepada Dewan Komisaris 2. Adanya notulen rapat yang membahas laporan GCG 3. Adanya tindak lanjut dari rekomendasi organ pengawas",
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
                  unsurPemenuhan:
                    "1. Adanya evaluasi berkala efektivitas pelaksanaan GCG 2. Adanya pemutakhiran prosedur pelaksanaan GCG 3. Adanya sosialisasi perubahan kepada seluruh karyawan",
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
                  unsurPemenuhan:
                    "1. Adanya dokumentasi pelaksanaan Code of Conduct dalam operasional 2. Adanya laporan kepatuhan perilaku 3. Adanya sosialisasi dan training Code of Conduct",
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
                  keteranganDokumen:
                    "Pelaksanaan Code of Conduct terdokumentasi dengan baik",
                },
                {
                  id: "2.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pelaksanaan Code of Conduct dipantau dan dievaluasi secara berkala.",
                  unsurPemenuhan:
                    "1. Adanya mekanisme monitoring dan evaluasi pelaksanaan Code of Conduct 2. Adanya laporan evaluasi berkala 3. Adanya tindak lanjut dari hasil evaluasi",
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
                  unsurPemenuhan:
                    "1. Adanya laporan berkala pelaksanaan Code of Conduct kepada Dewan Komisaris 2. Adanya notulen rapat yang membahas laporan perilaku 3. Adanya tindak lanjut dari rekomendasi organ pengawas",
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
                  unsurPemenuhan:
                    "1. Adanya evaluasi berkala efektivitas pelaksanaan Code of Conduct 2. Adanya pemutakhiran prosedur pelaksanaan Code of Conduct 3. Adanya sosialisasi perubahan kepada seluruh karyawan",
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
        {
          id: "3",
          no: "3",
          penjelasanKriteria:
            "Perusahaan memiliki struktur organisasi yang mendukung penerapan Tata Kelola Perusahaan yang Baik.",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "1.000",
          skorParameter: "",
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki struktur organisasi yang mendukung penerapan Tata Kelola Perusahaan yang Baik.",
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
              id: "3.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan memiliki struktur organisasi yang jelas dan terdokumentasi.",
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
                  id: "3.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat struktur organisasi yang terdokumentasi dengan jelas.",
                  unsurPemenuhan: "Ada struktur organisasi yang terdokumentasi",
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
                  sumberDokumen: "SK Direksi, Struktur Organisasi",
                  keteranganDokumen:
                    "Struktur organisasi sudah terdokumentasi dengan baik",
                },
                {
                  id: "3.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Struktur organisasi mendukung penerapan GCG secara efektif.",
                  unsurPemenuhan: "Struktur organisasi mendukung penerapan GCG",
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
                  sumberDokumen: "Analisis Struktur, Laporan GCG",
                  keteranganDokumen: "Struktur organisasi mendukung GCG",
                },
              ],
            },
            {
              id: "3.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan memiliki job description yang jelas untuk setiap posisi.",
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
                  id: "3.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat job description yang jelas untuk setiap posisi.",
                  unsurPemenuhan: "Ada job description untuk setiap posisi",
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
                  sumberDokumen: "Job Description, SK Direksi",
                  keteranganDokumen: "Job description sudah lengkap dan jelas",
                },
                {
                  id: "3.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Job description ditinjau dan dimutakhirkan secara berkala.",
                  unsurPemenuhan:
                    "Job description ditinjau dan dimutakhirkan berkala",
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
                  sumberDokumen: "Laporan Review, Update Job Description",
                  keteranganDokumen: "Job description direview secara berkala",
                },
              ],
            },
          ],
        },
        {
          id: "4",
          no: "4",
          penjelasanKriteria:
            "Perusahaan memiliki sistem pengendalian internal yang efektif.",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "1.000",
          skorParameter: "",
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki sistem pengendalian internal yang efektif.",
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
              id: "4.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan memiliki sistem pengendalian internal yang terdokumentasi.",
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
                  id: "4.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat sistem pengendalian internal yang terdokumentasi.",
                  unsurPemenuhan:
                    "Ada sistem pengendalian internal terdokumentasi",
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
                  sumberDokumen: "Manual SPI, Prosedur Internal",
                  keteranganDokumen:
                    "Sistem pengendalian internal sudah terdokumentasi",
                },
                {
                  id: "4.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Sistem pengendalian internal diimplementasikan secara efektif.",
                  unsurPemenuhan: "SPI diimplementasikan secara efektif",
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
                  sumberDokumen: "Laporan Implementasi, Audit Internal",
                  keteranganDokumen: "SPI diimplementasikan dengan efektif",
                },
              ],
            },
            {
              id: "4.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan melakukan monitoring dan evaluasi sistem pengendalian internal.",
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
                  id: "4.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat monitoring sistem pengendalian internal secara berkala.",
                  unsurPemenuhan: "Ada monitoring SPI secara berkala",
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
                  sumberDokumen: "Laporan Monitoring, Jadwal Review",
                  keteranganDokumen: "Monitoring SPI dilakukan secara berkala",
                },
                {
                  id: "4.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Terdapat evaluasi dan perbaikan sistem pengendalian internal.",
                  unsurPemenuhan: "Ada evaluasi dan perbaikan SPI",
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
                  sumberDokumen: "Laporan Evaluasi, Action Plan",
                  keteranganDokumen:
                    "Evaluasi dan perbaikan SPI berjalan rutin",
                },
              ],
            },
          ],
        },
        {
          id: "5",
          no: "5",
          penjelasanKriteria:
            "Perusahaan memiliki sistem manajemen risiko yang efektif.",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "1.000",
          skorParameter: "",
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki sistem manajemen risiko yang efektif.",
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
              id: "5.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan memiliki sistem manajemen risiko yang terdokumentasi.",
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
                  id: "5.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat sistem manajemen risiko yang terdokumentasi.",
                  unsurPemenuhan: "Ada sistem manajemen risiko terdokumentasi",
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
                  sumberDokumen: "Manual Manajemen Risiko, Prosedur",
                  keteranganDokumen:
                    "Sistem manajemen risiko sudah terdokumentasi",
                },
                {
                  id: "5.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Sistem manajemen risiko diimplementasikan secara efektif.",
                  unsurPemenuhan: "SMR diimplementasikan secara efektif",
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
                  sumberDokumen: "Laporan Implementasi, Risk Register",
                  keteranganDokumen: "SMR diimplementasikan dengan efektif",
                },
              ],
            },
            {
              id: "5.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan melakukan identifikasi, analisis, dan mitigasi risiko.",
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
                  id: "5.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat identifikasi risiko secara berkala.",
                  unsurPemenuhan: "Ada identifikasi risiko secara berkala",
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
                  sumberDokumen: "Risk Register, Laporan Identifikasi",
                  keteranganDokumen:
                    "Identifikasi risiko dilakukan secara berkala",
                },
                {
                  id: "5.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Terdapat analisis dan mitigasi risiko yang efektif.",
                  unsurPemenuhan: "Ada analisis dan mitigasi risiko efektif",
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
                  sumberDokumen: "Risk Assessment, Mitigation Plan",
                  keteranganDokumen:
                    "Analisis dan mitigasi risiko berjalan efektif",
                },
              ],
            },
          ],
        },
        {
          id: "6",
          no: "6",
          penjelasanKriteria:
            "Perusahaan memiliki sistem audit internal yang efektif.",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "1.000",
          skorParameter: "",
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki sistem audit internal yang efektif.",
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
              id: "6.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan memiliki unit audit internal yang independen.",
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
                  id: "6.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat unit audit internal yang independen.",
                  unsurPemenuhan: "Ada unit audit internal independen",
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
                  sumberDokumen: "SK Unit Audit, Struktur Organisasi",
                  keteranganDokumen: "Unit audit internal sudah independen",
                },
                {
                  id: "6.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Unit audit internal memiliki kompetensi yang memadai.",
                  unsurPemenuhan:
                    "Unit audit internal memiliki kompetensi memadai",
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
                  sumberDokumen: "CV Auditor, Sertifikat Kompetensi",
                  keteranganDokumen: "Kompetensi auditor sudah memadai",
                },
              ],
            },
            {
              id: "6.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan melakukan audit internal secara berkala dan efektif.",
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
                  id: "6.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat program audit internal yang terjadwal.",
                  unsurPemenuhan: "Ada program audit internal terjadwal",
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
                  sumberDokumen: "Program Audit, Jadwal Audit",
                  keteranganDokumen: "Program audit internal sudah terjadwal",
                },
                {
                  id: "6.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Audit internal dilaksanakan secara efektif dan independen.",
                  unsurPemenuhan:
                    "Audit internal dilaksanakan efektif dan independen",
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
                  sumberDokumen: "Laporan Audit, Follow-up Action",
                  keteranganDokumen: "Audit internal dilaksanakan efektif",
                },
              ],
            },
          ],
        },
        {
          id: "7",
          no: "7",
          penjelasanKriteria:
            "Perusahaan memiliki sistem pelaporan yang efektif.",
          unsurPemenuhan: "",
          bobot: "1.218",
          capaianSub: "",
          capaianTotal: "1.000",
          skorParameter: "",
          skorIndikator:
            "=Capaian FUK & Prm kategori Total bagian Perusahaan memiliki sistem pelaporan yang efektif.",
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
              id: "7.1",
              no: "1",
              penjelasanKriteria:
                "Perusahaan memiliki sistem pelaporan yang terdokumentasi.",
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
                  id: "7.1.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat sistem pelaporan yang terdokumentasi dengan jelas.",
                  unsurPemenuhan: "Ada sistem pelaporan terdokumentasi",
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
                  sumberDokumen: "Manual Pelaporan, Prosedur",
                  keteranganDokumen: "Sistem pelaporan sudah terdokumentasi",
                },
                {
                  id: "7.1.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Sistem pelaporan mencakup semua aspek yang diperlukan.",
                  unsurPemenuhan: "Sistem pelaporan mencakup semua aspek",
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
                  sumberDokumen: "Template Laporan, Checklist",
                  keteranganDokumen: "Sistem pelaporan sudah komprehensif",
                },
              ],
            },
            {
              id: "7.2",
              no: "2",
              penjelasanKriteria:
                "Perusahaan melakukan pelaporan secara berkala dan tepat waktu.",
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
                  id: "7.2.1",
                  no: "(1)",
                  penjelasanKriteria:
                    "Terdapat jadwal pelaporan yang jelas dan terjadwal.",
                  unsurPemenuhan: "Ada jadwal pelaporan jelas dan terjadwal",
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
                  sumberDokumen: "Jadwal Pelaporan, Kalender",
                  keteranganDokumen: "Jadwal pelaporan sudah jelas",
                },
                {
                  id: "7.2.2",
                  no: "(2)",
                  penjelasanKriteria:
                    "Pelaporan dilakukan tepat waktu dan berkualitas.",
                  unsurPemenuhan: "Pelaporan tepat waktu dan berkualitas",
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
                  sumberDokumen: "Laporan Berkala, Quality Check",
                  keteranganDokumen: "Pelaporan berkualitas dan tepat waktu",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  // Effect to sync score data with context
  useEffect(() => {
    const syncScores = () => {
      // Update score for "Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code) dan pedoman perilaku (code of conduct)."
      const gcgCodeItem = tableData[0]?.children?.[0];
      if (gcgCodeItem) {
        const skorIndikator = getSumOfChildParameters(gcgCodeItem);
        updateScore("komitmen_gcg_code", skorIndikator);

        // Update bobot for the same item
        if (gcgCodeItem.bobot) {
          updateBobot("komitmen_gcg_code", gcgCodeItem.bobot);
        }
      }

      // Update score for "Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik dan Pedoman Perilaku secara konsisten."
      const pelaksanaanItem = tableData[0]?.children?.[1];
      if (pelaksanaanItem) {
        const skorIndikator = getSumOfChildParameters(pelaksanaanItem);
        updateScore("komitmen_pelaksanaan", skorIndikator);

        // Update bobot for the same item
        if (pelaksanaanItem.bobot) {
          updateBobot("komitmen_pelaksanaan", pelaksanaanItem.bobot);
        }
      }

      // Update score for "Perusahaan memiliki struktur organisasi yang mendukung penerapan Tata Kelola Perusahaan yang Baik."
      const strukturItem = tableData[0]?.children?.[2];
      if (strukturItem) {
        const skorIndikator = getSumOfChildParameters(strukturItem);
        updateScore("komitmen_struktur", skorIndikator);

        // Update bobot for the same item
        if (strukturItem.bobot) {
          updateBobot("komitmen_struktur", strukturItem.bobot);
        }
      }

      // Update score for "Perusahaan memiliki sistem pengendalian internal yang efektif."
      const spiItem = tableData[0]?.children?.[3];
      if (spiItem) {
        const skorIndikator = getSumOfChildParameters(spiItem);
        updateScore("komitmen_spi", skorIndikator);

        // Update bobot for the same item
        if (spiItem.bobot) {
          updateBobot("komitmen_spi", spiItem.bobot);
        }
      }

      // Update score for "Perusahaan memiliki sistem manajemen risiko yang efektif."
      const smrItem = tableData[0]?.children?.[4];
      if (smrItem) {
        const skorIndikator = getSumOfChildParameters(smrItem);
        updateScore("komitmen_smr", skorIndikator);

        // Update bobot for the same item
        if (smrItem.bobot) {
          updateBobot("komitmen_smr", smrItem.bobot);
        }
      }

      // Update score for "Perusahaan memiliki sistem audit internal yang efektif."
      const auditItem = tableData[0]?.children?.[5];
      if (auditItem) {
        const skorIndikator = getSumOfChildParameters(auditItem);
        updateScore("komitmen_audit", skorIndikator);

        // Update bobot for the same item
        if (auditItem.bobot) {
          updateBobot("komitmen_audit", auditItem.bobot);
        }
      }

      // Update score for "Perusahaan memiliki sistem pelaporan yang efektif."
      const pelaporanItem = tableData[0]?.children?.[6];
      if (pelaporanItem) {
        const skorIndikator = getSumOfChildParameters(pelaporanItem);
        updateScore("komitmen_pelaporan", skorIndikator);

        // Update bobot for the same item
        if (pelaporanItem.bobot) {
          updateBobot("komitmen_pelaporan", pelaporanItem.bobot);
        }
      }
    };

    syncScores();
  }, [tableData, updateScore, updateBobot]);

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

  const updatePic = (itemId: string, newPic: string) => {
    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          return { ...item, pic: newPic };
        }
        if (item.children) {
          return { ...item, children: updateItemInArray(item.children) };
        }
        return item;
      });
    };

    setTableData((prevData) => updateItemInArray(prevData));
  };

  const updateKeteranganDokumen = (itemId: string, newKeterangan: string) => {
    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          return { ...item, keteranganDokumen: newKeterangan };
        }
        if (item.children) {
          return { ...item, children: updateItemInArray(item.children) };
        }
        return item;
      });
    };

    setTableData((prevData) => updateItemInArray(prevData));
  };

  const updateRekomendasi = (itemId: string, newRekomendasi: string) => {
    const updateItemInArray = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.id === itemId) {
          return { ...item, rekomendasi: newRekomendasi };
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

  // Handler untuk mengubah bobot - DISABLED (bobot sekarang fixed)
  // const handleBobotChange = (itemId: string, value: string) => {
  //   // Function disabled - bobot values are now fixed and cannot be changed
  // };

  // Hitung ulang skorParameter untuk node yang anak-anaknya memiliki capaianTotal
  const recalcSkorParameters = (items: any[]): any[] => {
    const withChildrenUpdated = items.map((item) => {
      if (item.children && item.children.length > 0) {
        const updatedChildren = recalcSkorParameters(item.children);

        // Jika item memiliki bobot dan semua anak adalah leaf dengan capaianTotal, distribusikan bobot secara rata
        const allLeafWithCapaian =
          updatedChildren.length > 0 &&
          updatedChildren.every(
            (ch: any) => !ch.children || ch.children.length === 0
          );
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
          const newSkorParameter = isNaN(sum)
            ? item.skorParameter
            : sum.toFixed(3);
          return {
            ...item,
            children: updatedChildren,
            skorParameter: newSkorParameter,
          };
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
            <div className="flex items-center justify-center space-x-1">
              {item.bobot ? (
                <span className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded text-gray-700 font-medium">
                  {parseFloat(Number(item.bobot).toFixed(3))}
                </span>
              ) : (
                "-"
              )}
              {(item.id === "1" ||
                item.id === "2" ||
                item.id === "3" ||
                item.id === "4" ||
                item.id === "5" ||
                item.id === "6" ||
                item.id === "7") && (
                <span
                  className="text-blue-500"
                  title="Terhubung dengan halaman Indikator"
                >
                  🔗
                </span>
              )}
            </div>
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.capaianSub || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {level === 3 ? (
              <select
                value={item.capaianTotal || ""}
                onChange={(e) =>
                  handleCapaianTotalChange(item.id, e.target.value)
                }
                className="w-20 px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
              >
                <option value="">Pilih</option>
                <option value="0.25">0.25</option>
                <option value="0.5">0.5</option>
                <option value="0.75">0.75</option>
                <option value="1">1</option>
              </select>
            ) : (
              item.capaianTotal || "-"
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {item.skorParameter || "-"}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            <div className="flex items-center justify-center space-x-1">
              <span>
                {item.skorIndikator &&
                item.skorIndikator.startsWith(
                  "=Capaian FUK & Prm kategori Total bagian"
                )
                  ? getSumOfChildParameters(item)
                  : item.skorIndikator || "-"}
              </span>
              {item.skorIndikator &&
                item.skorIndikator.startsWith(
                  "=Capaian FUK & Prm kategori Total bagian"
                ) && (
                  <span
                    className="text-blue-500"
                    title="Terhubung dengan halaman Indikator"
                  >
                    🔗
                  </span>
                )}
            </div>
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
              <select
                value={item.pic || ""}
                onChange={(e) => updatePic(item.id, e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih PIC</option>
                <option value="bod-1">bod-1</option>
                <option value="kspi">kspi</option>
                <option value="setper">setper</option>
                <option value="aga">aga</option>
                <option value="keu">keu</option>
                <option value="op">op</option>
                <option value="ren">ren</option>
                <option value="mhc">mhc</option>
                <option value="hukum">hukum</option>
                <option value="mr">mr</option>
              </select>
            ) : (
              <div className="text-center text-gray-500">{item.pic || "-"}</div>
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
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200 max-w-[200px]">
            {level === 3 ? (
              <input
                type="text"
                value={item.keteranganDokumen || ""}
                onChange={(e) =>
                  updateKeteranganDokumen(item.id, e.target.value)
                }
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan keterangan..."
              />
            ) : (
              <div className="break-words">{item.keteranganDokumen || "-"}</div>
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
                <option value="approve">Approve</option>
                <option value="decline">Decline</option>
                <option value="pending">Pending</option>
              </select>
            ) : (
              <span
                className={`px-2 py-1 rounded text-xs ${
                  item.status === "approve"
                    ? "bg-green-100 text-green-800"
                    : item.status === "decline"
                    ? "bg-red-100 text-red-800"
                    : item.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.status === "approve"
                  ? "Approve"
                  : item.status === "decline"
                  ? "Decline"
                  : item.status === "pending"
                  ? "Pending"
                  : item.status || "-"}
              </span>
            )}
          </td>
          <td className="px-3 py-3 text-sm text-center border-r border-gray-200">
            {isSuperAdmin && level === 3 ? (
              <input
                type="text"
                value={item.rekomendasi || ""}
                onChange={(e) => updateRekomendasi(item.id, e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan rekomendasi..."
              />
            ) : item.rekomendasi ? (
              <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-800">
                {item.rekomendasi}
              </span>
            ) : (
              "-"
            )}
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
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-sm">
            🔗 <strong>Data Terhubung:</strong> Perubahan skor indikator dan
            bobot akan otomatis terupdate di halaman Indikator
          </p>
        </div>
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
                  PIC
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold min-w-[200px]">
                  PEMENUHAN DOKUMEN
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  KETERANGAN DOKUMEN
                </th>
                <th className="px-3 py-4 text-center border-r border-cyan-300 font-semibold">
                  STATUS
                </th>
                <th className="px-3 py-4 text-center font-semibold">
                  REKOMENDASI
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
          <p>
            • 🔗 Skor Indikator dan Bobot terhubung dengan halaman Indikator
            secara real-time
          </p>
          <p>
            • <strong>Bobot:</strong> Nilai bobot sudah fixed dan tidak dapat
            diubah
          </p>
          <p>
            • <strong>Capaian Total:</strong> Dropdown dengan opsi 0.25, 0.5,
            0.75, 1
          </p>
          <p>
            • <strong>PIC:</strong> Dropdown dengan opsi bod-1, kspi, setper,
            aga, keu, op, ren, mhc, hukum, mr
          </p>
          <p>
            • <strong>Keterangan Dokumen:</strong> Input text untuk menambahkan
            keterangan
          </p>
          <p>
            • <strong>Status:</strong> Dropdown dengan opsi Approve, Decline,
            Pending
          </p>
          <p>
            • <strong>Rekomendasi:</strong> Super Admin dapat input text, User
            melihat rekomendasi
          </p>
          <p>• Perubahan data akan otomatis terupdate di halaman terkait</p>
        </div>
      </div>
    </div>
  );
};

export default KomitmenPage;
