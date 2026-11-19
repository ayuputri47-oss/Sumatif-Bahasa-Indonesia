import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas IV) Mata Pelajaran Bahasa Indonesia
 * Diselaraskan 100% dengan Dokumen Kisi-Kisi Soal (No. 1 - 20, 35 Butir Soal)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 35 butir soal Kurikulum Merdeka Bahasa Indonesia Kelas IV
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami sifat tokoh dalam cerita',
    indikatorSoal:
      'Disajikan narasi cerita pendek, siswa dapat mengidentifikasi karakter/sifat tokoh utama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami sifat tokoh dalam cerita',
    indikatorSoal:
      'Disajikan narasi cerita pendek, siswa dapat mengidentifikasi karakter/sifat tokoh utama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Menjelaskan kalimat transitif dan intransitif',
    indikatorSoal:
      'Siswa dapat membedakan kalimat transitif (memerlukan objek) dan intransitif (tidak memerlukan objek).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Menjelaskan kalimat transitif dan intransitif',
    indikatorSoal:
      'Siswa dapat membedakan kalimat transitif (memerlukan objek) dan intransitif (tidak memerlukan objek).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Memahami cara menulis surat dengan kalimat yang baik',
    indikatorSoal:
      'Siswa dapat menentukan unsur-unsur dan tata bahasa surat pribadi atau resmi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Memahami cara menulis surat dengan kalimat yang baik',
    indikatorSoal:
      'Siswa dapat menentukan unsur-unsur dan tata bahasa surat pribadi atau resmi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Menemukan arti kata dalam KBBI',
    indikatorSoal:
      'Siswa dapat menentukan arti kata sulit atau urutan pencarian kata dalam KBBI.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Menemukan arti kata dalam KBBI',
    indikatorSoal:
      'Siswa dapat menentukan arti kata sulit atau urutan pencarian kata dalam KBBI.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami kata bermakna ganda dalam bacaan',
    indikatorSoal:
      'Siswa dapat mengidentifikasi homonim/kata bermakna ganda sesuai konteks kalimat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami kata bermakna ganda dalam bacaan',
    indikatorSoal:
      'Siswa dapat mengidentifikasi homonim/kata bermakna ganda sesuai konteks kalimat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Mengetahui penggunaan awalan me-',
    indikatorSoal:
      'Siswa dapat menentukan pembentukan kata berawalan me- yang tepat sesuai kaidah peluruhan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Mengetahui penggunaan awalan me-',
    indikatorSoal:
      'Siswa dapat menentukan pembentukan kata berawalan me- yang tepat sesuai kaidah peluruhan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran: 'Menjelaskan teks diskusi & menyampaikan pendapat',
    indikatorSoal:
      'Siswa dapat mengidentifikasi ciri teks diskusi dan etika menyampaikan pendapat dengan santun.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran: 'Menjelaskan teks diskusi & menyampaikan pendapat',
    indikatorSoal:
      'Siswa dapat mengidentifikasi ciri teks diskusi dan etika menyampaikan pendapat dengan santun.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Mengetahui petunjuk arah dalam denah',
    indikatorSoal:
      'Siswa membaca denah lokasi dan menentukan arah mata angin/petunjuk jalan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Mengetahui petunjuk arah dalam denah',
    indikatorSoal:
      'Siswa membaca denah lokasi dan menentukan arah mata angin/petunjuk jalan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Membuat kalimat dengan kata yang diawali ber-',
    indikatorSoal:
      'Siswa dapat mengidentifikasi makna dan penggunaan kata berawalan ber-.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Menjelaskan paragraf argumentasi & deskripsi',
    indikatorSoal:
      'Siswa dapat membedakan karakteristik paragraf deskripsi dan argumentasi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Menjelaskan paragraf argumentasi & deskripsi',
    indikatorSoal:
      'Siswa dapat membedakan karakteristik paragraf deskripsi dan argumentasi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami ide pokok dan unsur ADiKSiMBa',
    indikatorSoal:
      'Siswa dapat menemukan ide pokok dan unsur informasi (apa, di mana, siapa, dll).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami sifat tokoh & kalimat transitif/intransitif',
    indikatorSoal: 'Siswa dapat menyebutkan istilah sifat tokoh dan jenis kalimat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Memahami sifat tokoh & kalimat transitif/intransitif',
    indikatorSoal: 'Siswa dapat menyebutkan istilah sifat tokoh dan jenis kalimat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'KBBI & Kata bermakna ganda',
    indikatorSoal: 'Siswa dapat melengkapi istilah arti kata dan rujukan kamus.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'KBBI & Kata bermakna ganda',
    indikatorSoal: 'Siswa dapat melengkapi istilah arti kata dan rujukan kamus.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Awalan me- dan ber-',
    indikatorSoal:
      'Siswa dapat mengubah kata dasar menjadi kata berimbuhan me- atau ber-.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Awalan me- dan ber-',
    indikatorSoal:
      'Siswa dapat mengubah kata dasar menjadi kata berimbuhan me- atau ber-.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Denah & Teks Deskripsi/Argumentasi',
    indikatorSoal: 'Siswa dapat menyebutkan unsur denah dan jenis paragraf.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Denah & Teks Deskripsi/Argumentasi',
    indikatorSoal: 'Siswa dapat menyebutkan unsur denah dan jenis paragraf.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Ide Pokok & Wawancara',
    indikatorSoal: 'Siswa dapat menyebutkan tujuan wawancara dan gagasan utama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran: 'Ide Pokok & Wawancara',
    indikatorSoal: 'Siswa dapat menyebutkan tujuan wawancara dan gagasan utama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Sifat Tokoh & Kalimat Transitif/Intransitif',
    indikatorSoal:
      'Siswa dapat menganalisis sifat tokoh dan membuat contoh kalimat transitif/intransitif.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  32: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Sifat Tokoh & Kalimat Transitif/Intransitif',
    indikatorSoal:
      'Siswa dapat menganalisis sifat tokoh dan membuat contoh kalimat transitif/intransitif.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    elemen: 'Berbicara dan Mempresentasikan',
    tujuanPembelajaran: 'Teks Diskusi & Penyampaian Pendapat',
    indikatorSoal:
      'Siswa dapat menjelaskan tata cara menyampaikan pendapat dalam diskusi dengan santun.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  34: {
    elemen: 'Membaca dan Memirsa',
    tujuanPembelajaran: 'Paragraf Deskripsi & Argumentasi',
    indikatorSoal:
      'Siswa dapat menjelaskan perbedaan paragraf deskripsi dan argumentasi.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  35: {
    elemen: 'Menulis',
    tujuanPembelajaran: 'Wawancara & ADiKSiMBa',
    indikatorSoal:
      'Siswa dapat menyusun pertanyaan wawancara menggunakan unsur ADiKSiMBa.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    case 'isian_singkat':
      return 'Jawaban Singkat';
    case 'uraian':
      return 'Essay / Uraian';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  if (q.type === 'isian_singkat') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : '-';
  }
  if (q.type === 'uraian') {
    return 'Rubrik Uraian';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami materi ${q.topic} pada pembelajaran Bahasa Indonesia.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan teks atau stimulus tentang ${q.topic}, peserta didik dapat menjawab pertanyaan dengan tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : q.type === 'uraian' ? 2 : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('surat') || t.includes('awalan') || t.includes('kalimat') || t.includes('imbuhan') || t.includes('menyusun')) {
    return 'Menulis';
  }
  if (t.includes('diskusi') || t.includes('pendapat') || t.includes('wawancara')) {
    return 'Berbicara dan Mempresentasikan';
  }
  if (t.includes('menyimak')) {
    return 'Menyimak';
  }
  return 'Membaca dan Memirsa';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = {
    pg: 0,
    isian_singkat: 0,
    uraian: 0,
    pgk: 0,
    pgk_kategori: 0,
  };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'isian_singkat',
      label: 'Jawaban Singkat',
      count: typeCountMap.isian_singkat,
      percentage: total > 0 ? Math.round((typeCountMap.isian_singkat / total) * 100) : 0,
    },
    {
      type: 'uraian',
      label: 'Essay / Uraian',
      count: typeCountMap.uraian,
      percentage: total > 0 ? Math.round((typeCountMap.uraian / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
