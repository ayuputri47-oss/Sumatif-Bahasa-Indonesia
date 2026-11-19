import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN A: PILIHAN GANDA (NO. 1 - 20)
  // =========================================================================

  // TP 1: Memahami sifat tokoh dalam cerita (No. 1, 2)
  {
    id: 1,
    type: 'pg',
    topic: 'Sifat Tokoh dalam Cerita',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Bacalah penggalan cerita berikut!\n\n"Setiap pagi sebelum berangkat ke sekolah, Rina selalu membantu ibunya menyapu halaman dan merapikan tempat tidur. Saat di kelas, ia tidak pernah ragu meminjamkan alat tulis kepada teman yang lupa membawa. Jika ada teman yang kesulitan memahami pelajaran, Rina dengan sabar menjelaskannya kembali."\n\nBerdasarkan cerita di atas, sifat tokoh utama Rina adalah...',
    options: [
      { id: 'A', text: 'Pemalas dan pemalu' },
      { id: 'B', text: 'Rajin dan suka menolong' },
      { id: 'C', text: 'Sombong dan keras kepala' },
      { id: 'D', text: 'Ceroboh dan tergesa-gesa' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dalam penggalan cerita dijelaskan bahwa Rina rutin membantu ibu menyapu halaman (rajin) serta suka meminjamkan alat tulis dan mengajari teman yang kesulitan (suka menolong).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Sifat Tokoh dalam Cerita',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Bacalah penggalan cerita berikut!\n\n"Saat jam istirahat, Doni menemukan dompet terjatuh di dekat kantin sekolah. Di dalamnya terdapat uang jajan yang cukup banyak dan kartu pelajar milik Adi, siswa kelas lain. Tanpa berpikir panjang, Doni segera mencari Adi dan mengembalikan dompet tersebut utuh tanpa berkurang sedikit pun."\n\nWatak atau karakter yang dimiliki Doni dalam cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Jujur dan dapat dipercaya' },
      { id: 'B', text: 'Kikir dan penakut' },
      { id: 'C', text: 'Iri hati dan pendiam' },
      { id: 'D', text: 'Pemaaf dan cerdik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tindakan Doni yang langsung mengembalikan dompet temuan beserta isinya secara utuh menunjukkan bahwa Doni memiliki watak jujur dan dapat dipercaya.',
  },

  // TP 2: Menjelaskan kalimat transitif dan intransitif (No. 3, 4)
  {
    id: 3,
    type: 'pg',
    topic: 'Kalimat Transitif dan Intransitif',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Kalimat transitif adalah kalimat aktif yang memerlukan objek (O) agar maknanya lengkap. Manakah di antara kalimat berikut yang merupakan kalimat transitif?',
    options: [
      { id: 'A', text: 'Adik menangis dengan sangat keras.' },
      { id: 'B', text: 'Ibu menyiram bunga mawar di taman.' },
      { id: 'C', text: 'Burung-burung berkicau di pagi hari.' },
      { id: 'D', text: 'Kakak tidur di kamar depan.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada kalimat "Ibu (S) menyiram (P) bunga mawar (O) di taman (K)", kata kerja "menyiram" membutuhkan objek yaitu "bunga mawar". Pilihan A, C, dan D tidak memerlukan objek (intransitif).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Kalimat Transitif dan Intransitif',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Perhatikan keempat kalimat berikut!\n1) Ayah membaca surat kabar di teras.\n2) Bayi itu tertidur pulas di ayunan.\n3) Ani membeli buku cerita baru.\n4) Air sungai mengalir sangat deras.\n\nPasangan kalimat yang termasuk kalimat intransitif (tidak memerlukan objek) ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '1 dan 3' },
      { id: 'B', text: '1 dan 4' },
      { id: 'C', text: '2 dan 3' },
      { id: 'D', text: '2 dan 4' },
    ],
    correctAnswer: 'D',
    explanation:
      'Kalimat 2 ("tertidur" tidak butuh objek) dan kalimat 4 ("mengalir" tidak butuh objek) adalah kalimat intransitif. Kalimat 1 (objek: surat kabar) dan 3 (objek: buku cerita baru) adalah kalimat transitif.',
  },

  // TP 3: Memahami cara menulis surat dengan kalimat yang baik (No. 5, 6)
  {
    id: 5,
    type: 'pg',
    topic: 'Menulis Surat Pribadi dan Resmi',
    elemen: 'Menulis',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Perhatikan penggalan surat pribadi berikut!\n\n"Jembrana, 15 Oktober 2026\nUntuk sahabatku, Sari\ndi Denpasar\n\nHalo Sari, apa kabar? Semoga kamu dan keluargamu selalu sehat di sana..."\n\nBagian yang bertuliskan "Jembrana, 15 Oktober 2026" dalam struktur surat pribadi disebut...',
    options: [
      { id: 'A', text: 'Salam pembuka surat' },
      { id: 'B', text: 'Tempat dan tanggal penulisan surat' },
      { id: 'C', text: 'Alamat tujuan surat' },
      { id: 'D', text: 'Kalimat penutup surat' },
    ],
    correctAnswer: 'B',
    explanation:
      '"Jembrana, 15 Oktober 2026" menunjukkan nama kota tempat menulis surat dan tanggal surat dibuat, yang disebut bagian tempat dan tanggal penulisan surat.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Menulis Surat Pribadi dan Resmi',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Manakah kalimat penutup surat resmi kepada Kepala Sekolah yang paling santun, baku, dan sesuai tata bahasa Indonesia yang baik?',
    options: [
      { id: 'A', text: 'Sekian dulu ya suratnya, makasih banget atas perhatiannya.' },
      { id: 'B', text: 'Atas perhatian Bapak/Ibu Kepala Sekolah, kami mengucapkan terima kasih.' },
      { id: 'C', text: 'Pokoknya kami harap Bapak bisa datang besok pagi ya.' },
      { id: 'D', text: 'Sudah dulu surat dari kami, sampai ketemu lagi di sekolah.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Surat resmi harus menggunakan bahasa baku, jelas, dan santun. Kalimat "Atas perhatian Bapak/Ibu Kepala Sekolah, kami mengucapkan terima kasih." menggunakan kata baku dan bentuk hormat yang tepat.',
  },

  // TP 4: Menemukan arti kata dalam KBBI (No. 7, 8)
  {
    id: 7,
    type: 'pg',
    topic: 'Menemukan Arti Kata dalam KBBI',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Siswa kelas IV ingin mencari arti kata "memasak", "berlari", "penulis", dan "kehutanan" di dalam Kamus Besar Bahasa Indonesia (KBBI) cetak. Kata dasar yang tepat untuk dicari di kamus secara berurutan adalah...',
    options: [
      { id: 'A', text: 'masak, lari, tulis, hutan' },
      { id: 'B', text: 'memasak, berlari, penulis, kehutanan' },
      { id: 'C', text: 'masak, berlari, tulis, hutan' },
      { id: 'D', text: 'pasak, lari, nulis, hutan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pencarian kata dalam KBBI selalu menggunakan bentuk kata dasar (tanpa imbuhan). Kata dasarnya secara berurutan adalah: masak (memasak), lari (berlari), tulis (penulis), dan hutan (kehutanan).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Menemukan Arti Kata dalam KBBI',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Bacalah kalimat berikut!\n\n"Para sukarelawan segera melakukan evakuasi terhadap warga yang terdampak banjir ke tempat yang lebih aman."\n\nMenurut KBBI, arti kata "evakuasi" pada kalimat tersebut adalah...',
    options: [
      { id: 'A', text: 'Pemberian bantuan makanan dan minuman secara gratis' },
      { id: 'B', text: 'Pengungsian atau pemindahan penduduk dari daerah berbahaya ke tempat aman' },
      { id: 'C', text: 'Pembangunan kembali rumah yang rusak akibat bencana' },
      { id: 'D', text: 'Pencatatan jumlah kerugian harta benda setelah bencana' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menurut KBBI, kata "evakuasi" berarti pengungsian atau pemindahan penduduk dari daerah-daerah yang berbahaya (misalnya akibat bencana alam atau perang) ke tempat yang lebih aman.',
  },

  // TP 5: Memahami kata bermakna ganda dalam bacaan (No. 9, 10)
  {
    id: 9,
    type: 'pg',
    topic: 'Kata Bermakna Ganda (Homonim)',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Perhatikan dua kalimat berikut!\n1) Kakak mengupas buah apel dengan pisau tajam.\n2) Setiap Senin pagi, seluruh siswa mengikuti apel bendera di halaman sekolah.\n\nKata "apel" pada kedua kalimat tersebut merupakan contoh kata bermakna ganda (homonim). Makna kata "apel" pada kalimat ke-2 adalah...',
    options: [
      { id: 'A', text: 'Nama buah berwarna merah atau hijau yang manis rasanya' },
      { id: 'B', text: 'Upacara atau berkumpul bersama secara resmi untuk mendengarkan amanat' },
      { id: 'C', text: 'Kegiatan berolahraga bersama di lapangan sekolah' },
      { id: 'D', text: 'Peralatan tulis yang digunakan saat belajar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata "apel" termasuk homonim (sama ejaan dan lafalnya, tetapi berbeda makna). Pada kalimat pertama berarti buah, sedangkan pada kalimat kedua berarti upacara wajib di lapangan.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kata Bermakna Ganda (Homonim)',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Manakah pasangan kalimat berikut yang menggunakan kata berhomonim "bisa" dengan dua arti yang berbeda secara tepat?',
    options: [
      {
        id: 'A',
        text: 'Adik bisa berenang di kolam, dan kakak juga bisa bermain gitar.',
      },
      {
        id: 'B',
        text: 'Ular kobra memiliki bisa yang mematikan, tetapi dokter bisa mengobatinya.',
      },
      {
        id: 'C',
        text: 'Rina bisa menjawab soal ujian karena ia belajar dengan rajin.',
      },
      {
        id: 'D',
        text: 'Bisa ular itu sangat berbahaya bagi keselamatan manusia.',
      },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada pilihan B, kata "bisa" pertama bermakna racun yang dihasilkan hewan (ular), sedangkan kata "bisa" kedua bermakna mampu atau dapat.',
  },

  // TP 6: Mengetahui penggunaan awalan me- (No. 11, 12)
  {
    id: 11,
    type: 'pg',
    topic: 'Penggunaan Awalan me- (Kaidah Peluruhan)',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Sesuai kaidah bahasa Indonesia, huruf awal kata dasar K, T, S, dan P akan luluh jika mendapat awalan me- dan diikuti huruf vokal. Bentuk kata berimbuhan me- yang tepat dari kata dasar "sapu" dan "tulis" adalah...',
    options: [
      { id: 'A', text: 'mensapu dan menulis' },
      { id: 'B', text: 'menyapu dan mentulis' },
      { id: 'C', text: 'menyapu dan menulis' },
      { id: 'D', text: 'mesapu dan metulis' },
    ],
    correctAnswer: 'C',
    explanation:
      'Menurut kaidah peluruhan (K-T-S-P): me- + sapu (huruf awal s diikuti vokal a) luluh menjadi "menyapu". me- + tulis (huruf awal t diikuti vokal u) luluh menjadi "menulis".',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Penggunaan Awalan me- (Kaidah Peluruhan)',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sukar',
    text: 'Perhatikan kalimat berikut!\n\n"Ibu guru sedang (...) hasil tugas gambar siswa, sedangkan Pak Budi (...) pagar kayu di depan kelas."\n\nKata berawalan me- yang tepat dari kata dasar "koreksi" dan "cat" untuk melengkapi kalimat tersebut adalah...',
    options: [
      { id: 'A', text: 'mengoreksi dan mengecat' },
      { id: 'B', text: 'mengkoreksi dan mencat' },
      { id: 'C', text: 'mengoreksi dan mencat' },
      { id: 'D', text: 'mengkoreksi dan mengecat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata "koreksi" diawali huruf k diikuti vokal o sehingga luluh menjadi "mengoreksi". Kata "cat" hanya memiliki satu suku kata, sehingga mendapat awalan menge- menjadi "mengecat".',
  },

  // TP 7: Menjelaskan teks diskusi & menyampaikan pendapat (No. 13, 14)
  {
    id: 13,
    type: 'pg',
    topic: 'Teks Diskusi & Etika Menyampaikan Pendapat',
    elemen: 'Berbicara dan Mempresentasikan',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Salah satu ciri utama teks diskusi atau kegiatan berdiskusi di kelas adalah...',
    options: [
      { id: 'A', text: 'Hanya berisi cerita khayalan tentang binatang yang bisa berbicara' },
      { id: 'B', text: 'Membahas suatu topik permasalahan dengan menampilkan pendapat yang setuju (pro) dan tidak setuju (kontra)' },
      { id: 'C', text: 'Ditulis hanya untuk memaksakan pendapat pribadi kepada seluruh teman' },
      { id: 'D', text: 'Tidak memerlukan kesimpulan atau kesepakatan bersama di akhir pembicaraan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teks diskusi atau forum diskusi menyajikan pembahasan mengenai suatu isu dari berbagai sudut pandang, baik pihak yang mendukung (pro) maupun yang menentang (kontra), untuk mencari jalan tengah.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Teks Diskusi & Etika Menyampaikan Pendapat',
    elemen: 'Berbicara dan Mempresentasikan',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Ketika kamu tidak setuju dengan usulan teman saat diskusi kelompok pemilihan lomba kebersihan kelas, cara menyampaikan pendapat yang paling santun adalah...',
    options: [
      { id: 'A', text: '"Usulanmu itu tidak masuk akal dan pasti merepotkan kita semua!"' },
      { id: 'B', text: '"Saya tidak setuju, pokoknya harus ikut usulan saya saja yang paling bagus."' },
      { id: 'C', text: '"Maaf, saya kurang sependapat dengan usulan tersebut karena waktunya kurang cukup. Bagaimana jika kita pilih cara yang lebih praktis?"' },
      { id: 'D', text: 'Diam saja sambil cemberut lalu meninggalkan kelompok diskusi.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pendapat dalam diskusi harus disampaikan dengan bahasa yang santun, tidak menyinggung perasaan teman, disertai alasan yang logis, dan menawarkan solusi alternatif.',
  },

  // TP 8: Mengetahui petunjuk arah dalam denah (No. 15, 16)
  {
    id: 15,
    type: 'pg',
    topic: 'Petunjuk Arah dalam Denah',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Pada sebuah denah lokasi sekolah, bagian atas peta selalu menunjukkan arah Utara (U). Jika Edo berjalan dari lapangan upacara menuju ruang perpustakaan yang berada di sebelah kanan denah, maka Edo berjalan ke arah...',
    options: [
      { id: 'A', text: 'Barat' },
      { id: 'B', text: 'Selatan' },
      { id: 'C', text: 'Timur' },
      { id: 'D', text: 'Barat Laut' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada arah mata angin standar dalam denah: Atas = Utara, Bawah = Selatan, Kanan = Timur, dan Kiri = Barat. Jadi menuju sebelah kanan berarti ke arah Timur.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Petunjuk Arah dalam Denah',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Cermati keterangan denah berikut!\n\n- Rumah Siti menghadap ke Jalan Merpati (membentang dari Barat ke Timur).\n- Di sebelah Timur rumah Siti berdiri SDN 1 Harapan.\n- Di sebelah Barat SDN 1 Harapan, tepat di seberang jalan rumah Siti, terdapat Puskesmas.\n\nJika Siti keluar dari rumah menuju Jalan Merpati lalu berjalan ke arah Timur, bangunan yang pertama kali ia lewati di sisi jalannya adalah...',
    options: [
      { id: 'A', text: 'SDN 1 Harapan' },
      { id: 'B', text: 'Puskesmas' },
      { id: 'C', text: 'Kantor Pos' },
      { id: 'D', text: 'Rumah Sakit' },
    ],
    correctAnswer: 'A',
    explanation:
      'Karena SDN 1 Harapan berada tepat di sebelah Timur rumah Siti pada sisi jalan yang sama, maka saat Siti berjalan ke arah Timur ia akan melewati SDN 1 Harapan.',
  },

  // TP 9: Membuat kalimat dengan kata yang diawali ber- (No. 17)
  {
    id: 17,
    type: 'pg',
    topic: 'Penggunaan Kata Berawalan ber-',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat berikut!\n\n"Setiap hari Minggu pagi, warga desa bergotong royong membersihkan saluran air di sekitar jalan utama."\n\nPenggunaan dan bentuk kata berawalan ber- yang tepat sesuai kaidah peluluhan/pengecualian terdapat pada kalimat...',
    options: [
      { id: 'A', text: 'Ibu sedang bercermin di ruang tamu sebelum berangkat kerja.' },
      { id: 'B', text: 'Siswa kelas IV sedang berajar matematika bersama wali kelas.' },
      { id: 'C', text: 'Pak Tani sedang berkerja di sawah sejak pukul enam pagi.' },
      { id: 'D', text: 'Adik sangat berterbangan melihat kupu-kupu di kebun.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata "bercermin" (ber- + cermin) merupakan bentuk baku dan bermakna melakukan kegiatan melihat bayangan di cermin. Pada pilihan B seharusnya "belajar", pilihan C seharusnya "bekerja", dan pilihan D tidak tepat secara makna.',
  },

  // TP 10: Menjelaskan paragraf argumentasi & deskripsi (No. 18, 19)
  {
    id: 18,
    type: 'pg',
    topic: 'Paragraf Deskripsi dan Argumentasi',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut dengan saksama!\n\n"Kebun sekolah kami tampak sangat asri. Di bagian depan berjajar pot bunga kertas berwarna merah muda dan kuning cerah. Udara di sekitar taman terasa sejuk karena dinaungi pohon mangga yang berdaun rimbun. Suara gemericik air dari kolam ikan kecil menambah ketenangan suasana."\n\nBerdasarkan ciri-cirinya, paragraf tersebut termasuk jenis paragraf...',
    options: [
      { id: 'A', text: 'Argumentasi' },
      { id: 'B', text: 'Deskripsi' },
      { id: 'C', text: 'Persuasi' },
      { id: 'D', text: 'Eksposisi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Paragraf deskripsi menggambarkan suatu objek, tempat, atau suasana secara rinci menggunakan pancaindra (warna bunga yang terlihat, sejuk yang dirasa, gemericik air yang terdengar) seolah-olah pembaca melihat dan merasakannya langsung.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Paragraf Deskripsi dan Argumentasi',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\n"Sarapan pagi sebelum berangkat ke sekolah sangat penting bagi kesehatan siswa. Menurut penelitian gizi, anak yang rutin sarapan memiliki daya konsentrasi lebih tinggi saat mengikuti pelajaran di kelas. Sebaliknya, siswa yang melewatkan sarapan lebih mudah merasa lemas dan mengantuk. Oleh karena itu, membiasakan sarapan bergizi setiap pagi sangat dianjurkan."\n\nTujuan utama penulisan paragraf argumentasi di atas adalah...',
    options: [
      { id: 'A', text: 'Menggambarkan warna dan rasa menu sarapan di rumah' },
      { id: 'B', text: 'Menceritakan pengalaman lucu saat sarapan bersama keluarga' },
      { id: 'C', text: 'Meyakinkan pembaca tentang pentingnya sarapan disertai alasan dan bukti logis' },
      { id: 'D', text: 'Menjelaskan langkah-langkah cara memasak nasi goreng' },
    ],
    correctAnswer: 'C',
    explanation:
      'Paragraf argumentasi berisi pendapat yang disertai alasan, data, atau fakta pendukung yang logis untuk meyakinkan pembaca akan kebenaran suatu gagasan.',
  },

  // TP 11: Memahami ide pokok dan unsur ADiKSiMBa (No. 20)
  {
    id: 20,
    type: 'pg',
    topic: 'Ide Pokok dan Unsur ADiKSiMBa',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\n"Pada hari Sabtu pagi, siswa kelas IV SD Nusantara melaksanakan kegiatan menanam seribu bibit pohon bakau di Pantai Pesisir. Kegiatan ini dilakukan untuk mencegah terjadinya abrasi air laut di masa depan. Seluruh siswa dan guru bekerja sama dengan penuh semangat."\n\nKalimat tanya dengan unsur ADiKSiMBa yang jawabannya "untuk mencegah terjadinya abrasi air laut di masa depan" adalah...',
    options: [
      { id: 'A', text: 'Siapa yang melaksanakan kegiatan menanam bibit pohon bakau?' },
      { id: 'B', text: 'Di mana kegiatan menanam bibit pohon bakau dilaksanakan?' },
      { id: 'C', text: 'Kapan siswa kelas IV melaksanakan kegiatan menanam pohon?' },
      { id: 'D', text: 'Mengapa siswa kelas IV menanam bibit pohon bakau di Pantai Pesisir?' },
    ],
    correctAnswer: 'D',
    explanation:
      'Unsur "Mengapa" dalam ADiKSiMBa (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana) digunakan untuk menanyakan alasan atau tujuan suatu peristiwa, yaitu "untuk mencegah terjadinya abrasi air laut".',
  },

  // =========================================================================
  // BAGIAN B: JAWABAN SINGKAT (NO. 21 - 30)
  // =========================================================================

  // TP 12: Memahami sifat tokoh & kalimat transitif/intransitif (No. 21, 22)
  {
    id: 21,
    type: 'isian_singkat',
    topic: 'Istilah Sifat Tokoh dalam Cerita',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Dalam sebuah cerita fiksi, tokoh utama yang memiliki sifat baik, jujur, dan sering membantu tokoh lain disebut tokoh...',
    correctAnswer: 'protagonis',
    acceptableAnswers: ['protagonis', 'tokoh protagonis'],
    explanation:
      'Tokoh yang berwatak baik dan menjadi pusat simpati pembaca dalam cerita disebut tokoh protagonis (kebalikan dari antagonis yang berwatak jahat/penentang).',
  },
  {
    id: 22,
    type: 'isian_singkat',
    topic: 'Jenis Kalimat Transitif & Intransitif',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Kalimat "Paman sedang tertawa di ruang tamu" tidak memerlukan kehadiran objek di belakang predikatnya. Jenis kalimat tersebut dinamakan kalimat...',
    correctAnswer: 'intransitif',
    acceptableAnswers: ['intransitif', 'kalimat intransitif'],
    explanation:
      'Kalimat yang predikatnya berupa kata kerja yang tidak membutuhkan objek disebut kalimat intransitif.',
  },

  // TP 13: KBBI & Kata bermakna ganda (No. 23, 24)
  {
    id: 23,
    type: 'isian_singkat',
    topic: 'Rujukan Kamus (KBBI)',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Buku rujukan resmi yang memuat daftar kosakata bahasa Indonesia beserta makna bakunya dikenal dengan singkatan...',
    correctAnswer: 'KBBI',
    acceptableAnswers: ['kbbi', 'kamus besar bahasa indonesia'],
    explanation:
      'KBBI adalah singkatan dari Kamus Besar Bahasa Indonesia, sumber rujukan utama untuk mencari arti dan ejaan kata baku.',
  },
  {
    id: 24,
    type: 'isian_singkat',
    topic: 'Istilah Kata Bermakna Ganda',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Kata yang memiliki ejaan dan cara pengucapan yang sama tetapi mempunyai arti yang berbeda (seperti kata "bulan" atau "rapat") disebut...',
    correctAnswer: 'homonim',
    acceptableAnswers: ['homonim', 'homonym', 'kata homonim'],
    explanation:
      'Homonim adalah kata yang sama lafal dan ejaannya, namun memiliki makna yang berbeda tergantung konteks kalimatnya.',
  },

  // TP 14: Awalan me- dan ber- (No. 25, 26)
  {
    id: 25,
    type: 'isian_singkat',
    topic: 'Pembentukan Kata Berimbuhan me-',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Jika kata dasar "potong" diberi awalan me- sesuai kaidah peluruhan huruf P, maka bentuk kata berimbuhan yang benar adalah...',
    correctAnswer: 'memotong',
    acceptableAnswers: ['memotong'],
    explanation:
      'Huruf awal p yang diikuti huruf vokal o pada kata "potong" akan luluh saat diberi awalan me-, sehingga menjadi "memotong".',
  },
  {
    id: 26,
    type: 'isian_singkat',
    topic: 'Pembentukan Kata Berimbuhan ber-',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 1,
    difficulty: 'Sedang',
    text: 'Ubahlah kata dasar "ajar" menjadi kata berimbuhan dengan awalan ber- yang baku untuk melengkapi kalimat: "Siswa kelas IV sedang ... bahasa Indonesia dengan tertib."',
    correctAnswer: 'belajar',
    acceptableAnswers: ['belajar'],
    explanation:
      'Awalan ber- apabila bertemu dengan kata dasar "ajar" mengalami pengecualian khusus sehingga berubah menjadi "belajar" (bukan berajar).',
  },

  // TP 15: Denah & Teks Deskripsi/Argumentasi (No. 27, 28)
  {
    id: 27,
    type: 'isian_singkat',
    topic: 'Unsur Denah Lokasi',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Pada denah atau peta, gambar panah penunjuk Utara, Timur, Selatan, dan Barat yang memudahkan pembaca mengetahui posisi tempat disebut arah...',
    correctAnswer: 'mata angin',
    acceptableAnswers: ['mata angin', 'arah mata angin'],
    explanation:
      'Arah mata angin (Utara, Timur, Selatan, Barat, dll.) adalah unsur penting pada denah untuk menunjukkan orientasi arah perjalanan.',
  },
  {
    id: 28,
    type: 'isian_singkat',
    topic: 'Jenis Paragraf Deskripsi & Argumentasi',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Paragraf yang berisi pendapat pribadi penulis yang diperkuat dengan alasan, fakta, dan bukti untuk meyakinkan pembaca disebut paragraf...',
    correctAnswer: 'argumentasi',
    acceptableAnswers: ['argumentasi', 'paragraf argumentasi'],
    explanation:
      'Paragraf argumentasi bertujuan menyampaikan pendapat disertai alasan dan bukti logis agar pembaca meyakini gagasan tersebut.',
  },

  // TP 16: Ide Pokok & Wawancara (No. 29, 30)
  {
    id: 29,
    type: 'isian_singkat',
    topic: 'Gagasan Utama / Ide Pokok',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Inti permasalahan atau gagasan utama yang menjadi dasar pengembangan sebuah paragraf disebut...',
    correctAnswer: 'ide pokok',
    acceptableAnswers: ['ide pokok', 'pokok pikiran', 'gagasan pokok', 'gagasan utama'],
    explanation:
      'Ide pokok (atau gagasan utama/pokok pikiran) merupakan inti bahasan utama yang menjiwai seluruh kalimat dalam satu paragraf.',
  },
  {
    id: 30,
    type: 'isian_singkat',
    topic: 'Tujuan dan Unsur Wawancara',
    elemen: 'Berbicara dan Mempresentasikan',
    levelKognitif: 'L1',
    bobot: 1,
    difficulty: 'Mudah',
    text: 'Orang yang ahli atau mengetahui suatu informasi dan menjadi pihak yang dimintai keterangan dalam kegiatan wawancara disebut...',
    correctAnswer: 'narasumber',
    acceptableAnswers: ['narasumber', 'informan'],
    explanation:
      'Dalam wawancara, pihak yang mengajukan pertanyaan disebut pewawancara, sedangkan pihak yang memberi informasi/jawaban disebut narasumber.',
  },

  // =========================================================================
  // BAGIAN C: ESSAY / URAIAN (NO. 31 - 35)
  // =========================================================================

  // TP 17: Sifat Tokoh & Kalimat Transitif/Intransitif (No. 31, 32)
  {
    id: 31,
    type: 'uraian',
    topic: 'Analisis Sifat Tokoh dalam Cerita',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L3',
    bobot: 2,
    difficulty: 'Sukar',
    text: 'Bacalah cerita singkat berikut!\n\n"Tomi selalu datang terlambat ke sekolah karena asyik bermain gim hingga larut malam. Ketika ditegur guru karena tidak mengerjakan tugas, Tomi malah menyalahkan adiknya dan berbohong bahwa bukunya basah kehujanan."\n\nJelaskan dua sifat buruk Tomi dalam cerita tersebut beserta bukti perilakunya dari teks!',
    correctAnswer:
      '1) Tidak disiplin / pemalas: datang terlambat karena bermain gim hingga larut malam dan tidak mengerjakan tugas. 2) Tidak jujur / suka berbohong dan menyalahkan orang lain: berbohong kepada guru dan menuduh adiknya.',
    rubricKeywords: ['disiplin', 'terlambat', 'tugas', 'bohong', 'jujur', 'menyalahkan'],
    explanation:
      'Siswa diharapkan mampu menyebutkan minimal dua karakter/sifat tokoh (misalnya tidak disiplin/pemalas dan tidak jujur/pengecut) beserta bukti peristiwa yang mendukung dari bacaan.',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'Membuat Kalimat Transitif dan Intransitif',
    elemen: 'Menulis',
    levelKognitif: 'L2',
    bobot: 2,
    difficulty: 'Sedang',
    text: 'Buatlah masing-masing 1 (satu) contoh:\na) Kalimat transitif (lengkap dengan Subjek, Predikat, dan Objek)\nb) Kalimat intransitif (Subjek dan Predikat tanpa Objek)',
    correctAnswer:
      'a) Contoh kalimat transitif: Ibu memasak sayur bayam di dapur. (S: Ibu, P: memasak, O: sayur bayam).\nb) Contoh kalimat intransitif: Adik tertidur di kamar. (S: Adik, P: tertidur, K: di kamar).',
    rubricKeywords: ['transitif', 'intransitif', 'objek', 'di', 'sedang'],
    explanation:
      'Kalimat transitif wajib memiliki objek setelah kata kerja aktif (contoh: membaca buku, menulis surat, menyiram bunga), sedangkan kalimat intransitif tidak membutuhkan objek (contoh: berjalan, menangis, tertidur, berlari).',
  },

  // TP 18: Teks Diskusi & Penyampaian Pendapat (No. 33)
  {
    id: 33,
    type: 'uraian',
    topic: 'Tata Cara Menyampaikan Pendapat dalam Diskusi',
    elemen: 'Berbicara dan Mempresentasikan',
    levelKognitif: 'L3',
    bobot: 2,
    difficulty: 'Sedang',
    text: 'Jelaskan 3 (tiga) tata cara atau etika yang harus diperhatikan saat menyampaikan pendapat dalam sebuah kegiatan diskusi di kelas agar berjalan tertib dan santun!',
    correctAnswer:
      '1) Mengangkat tangan terlebih dahulu dan menunggu dipersilakan berbicara sebelum menyampaikan pendapat.\n2) Menggunakan bahasa yang sopan, santun, dan tidak memotong pembicaraan orang lain.\n3) Menyampaikan pendapat disertai alasan yang jelas dan menghargai perbedaan pendapat teman.',
    rubricKeywords: ['tangan', 'sopan', 'santun', 'memotong', 'alasan', 'menghargai'],
    explanation:
      'Etika diskusi yang baik mencakup: meminta izin (mengangkat tangan), berbahasa santun, tidak menyela pembicaraan orang lain, memberikan alasan logis, serta menghargai pendapat yang berbeda.',
  },

  // TP 19: Paragraf Deskripsi & Argumentasi (No. 34)
  {
    id: 34,
    type: 'uraian',
    topic: 'Perbedaan Paragraf Deskripsi dan Argumentasi',
    elemen: 'Membaca dan Memirsa',
    levelKognitif: 'L3',
    bobot: 2,
    difficulty: 'Sukar',
    text: 'Jelaskan perbedaan utama antara paragraf deskripsi dan paragraf argumentasi dilihat dari tujuan dan isinya!',
    correctAnswer:
      'Paragraf deskripsi bertujuan menggambarkan suatu objek, tempat, atau keadaan secara rinci melalui pancaindra sehingga pembaca seolah melihat dan merasakannya langsung. Sedangkan paragraf argumentasi bertujuan menyampaikan pendapat disertai alasan, fakta, atau bukti logis untuk meyakinkan pembaca.',
    rubricKeywords: ['menggambarkan', 'objek', 'pancaindra', 'pendapat', 'alasan', 'meyakinkan'],
    explanation:
      'Deskripsi berfokus pada pelukisan/penggambaran objek secara konkret, sedangkan argumentasi berfokus pada pembuktian pendapat menggunakan alasan dan data yang kuat.',
  },

  // TP 20: Wawancara & ADiKSiMBa (No. 35)
  {
    id: 35,
    type: 'uraian',
    topic: 'Menyusun Pertanyaan Wawancara dengan ADiKSiMBa',
    elemen: 'Menulis',
    levelKognitif: 'L3',
    bobot: 2,
    difficulty: 'Sukar',
    text: 'Kamu ditugaskan mewawancarai seorang petugas kebersihan sekolah tentang cara menjaga lingkungan sekolah tetap bersih. Buatlah 3 (tiga) pertanyaan wawancara yang baik dengan menggunakan minimal 3 unsur kata tanya ADiKSiMBa (misalnya Apa, Siapa, Kapan, Di mana, Mengapa, atau Bagaimana)!',
    correctAnswer:
      '1) Apa saja kegiatan kebersihan yang Bapak/Ibu lakukan setiap pagi di sekolah?\n2) Kapan waktu yang paling ramai sampah menumpuk di area sekolah?\n3) Bagaimana cara agar siswa ikut menjaga kebersihan halaman kelas?',
    rubricKeywords: ['apa', 'siapa', 'kapan', 'di mana', 'mengapa', 'bagaimana'],
    explanation:
      'Pertanyaan wawancara yang baik menggunakan kata tanya baku ADiKSiMBa (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana), diawali sapaan santun, diakhiri tanda tanya (?), dan sesuai topik narasumber.',
  },
];
