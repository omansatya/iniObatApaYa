
let listObat = [
  {
    nama: 'Captopril',
    bentuk: 'Bundar',
    warna: 'Putih',
    manfaat: [
      'Mengatasi hipertensi dan gagal jantung',
      'Mencegah komplikasi pascaserangan jantung',
      'Mengobati nefropati diabetik',
    ],
    usia: ['anak', 'dewasa'],
    gambar: 'src/captopril.jpg',
    penyakit: ['Hipertensi', 'Gagal jantung', 'Nefropati diabetik'],
    inskripsi: 'N 133',
  },
  {
    nama: 'Amoxicillin',
    bentuk: 'Kapsul',
    warna: 'Putih',
    manfaat: [
      'Mengatasi infeksi bakteri',
      'Mengatasi gonore',
      'Mengobati pielonefritis',
    ],
    usia: ['anak', 'dewasa'],
    gambar: 'src/amoxicillin.jpg',
    penyakit: ['Infeksi bakteri', 'Gonore', 'Pielonefritis'],
    inskripsi: '221',
  },
  {
    nama: 'Simvastanin',
    bentuk: 'Bundar',
    warna: 'Kuning',
    manfaat: ['Menurunkan kadar kolesterol dalam darah'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/simvastanin.jpg',
    penyakit: ['Kolesterol'],
    inskripsi: '93',
  },
  {
    nama: 'Tramadol Hydrocloride',
    bentuk: 'Kapsul',
    warna: 'Putih',
    manfaat: ['Meredakan nyeri'],
    usia: ['dewasa'],
    gambar: 'src/tramadol-hydrocloride.jpg',
    penyakit: ['Nyeri'],
    inskripsi: '377',
  },
  {
    nama: 'Aspirin',
    bentuk: 'Bundar',
    warna: 'Kuning',
    manfaat: [
      'Meredakan nyeri',
      'Meredakan demam',
      'Meredakan peradangan',
      'Mencegah terbentuknya gumpalan darah',
    ],
    usia: ['dewasa'],
    gambar: 'src/aspirin.jpg',
    penyakit: ['Nyeri', 'Demam', 'Peradangan', 'Penggumpalan darah'],
    inskripsi: '03 SP',
  },
  {
    nama: 'Levothyroxine',
    bentuk: 'Kapsul',
    warna: 'Biru',
    manfaat: ['Mengobati hipotiroidisme'],
    usia: ['dewasa'],
    gambar: 'src/levothyroxine.jpg',
    penyakit: ['Hipotiroidisme'],
    inskripsi: '137 GG 330',
  },
  {
    nama: 'Metformin',
    bentuk: 'Elips',
    warna: 'Putih',
    manfaat: ['Menurunan kadar gula darah pada penderita diabetes tipe 2'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/metformin.jpg',
    penyakit: ['Diabetes'],
    inskripsi: 'Andrx 676',
  },
  {
    nama: 'Olanzapine',
    bentuk: 'Elips',
    warna: 'Kuning',
    manfaat: ['	Mengobati skizofrenia dan gangguan bipolar'],
    usia: ['dewasa'],
    gambar: 'src/olanzapine.jpg',
    penyakit: ['Mental', 'Skizofernia', 'Bipolar'],
    inskripsi: '15',
  },
  {
    nama: 'Ranitidine Hydrochloride',
    bentuk: 'Kapsul',
    warna: 'Putih',
    manfaat: ['	Menurunkan produksi asam lambung berlebih'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/ranitidine-hydrochloride.jpg',
    penyakit: ['Asam lambung'],
    inskripsi: '0031',
  },
  {
    nama: 'Clobazam',
    bentuk: 'Kapsul',
    warna: 'Putih',
    manfaat: ['Mengatasi kejang pada epilepsi'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/clobazam.jpg',
    penyakit: ['Epilepsi'],
    inskripsi: '1325',
  },
  {
    nama: 'Alprazolam',
    bentuk: 'Bundar',
    warna: 'Biru',
    manfaat: ['Mengatasi gangguan kecemasan dan panik'],
    usia: ['dewasa'],
    gambar: 'src/alprazolam.jpg',
    penyakit: ['Mental'],
    inskripsi: 'R 031',
  },
  {
    nama: 'Allopurinol',
    bentuk: 'Bundar',
    warna: 'Merah',
    manfaat: ['Menurunkan kadar asam urat'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/amoxicillin.jpg',
    penyakit: ['Asam urat'],
    inskripsi: '05240410',
  },
  {
    nama: 'Chloroquine',
    bentuk: 'Bundar',
    warna: 'Merah',
    manfaat: ['Mencegah dan mengobati malaria'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/chloroquine.jpg',
    penyakit: ['Malaria'],
    inskripsi: 'WW 125',
  },
  {
    nama: 'Carbamazepin',
    bentuk: 'Bundar',
    warna: 'Merah',
    manfaat: ['Mengatasi kejang pada epilepsi'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/carbamazepin.jpg',
    penyakit: ['Epilepsi'],
    inskripsi: '342',
  },
  {
    nama: 'Isoniazid',
    bentuk: 'Elips',
    warna: 'Putih',
    manfaat: ['Mengobati dan mencegah tuberkulosis'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/Isoniazid.jpg',
    penyakit: ['tuberkulosis'],
    inskripsi: 'b 071300',
  },
  {
    nama: 'Mebendazole',
    bentuk: 'Bundar',
    warna: 'Merah',
    manfaat: ['Mengobati infeksi cacing di saluran pencernaan'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/mebendazole.jpg',
    penyakit: ['Infeksi cacing'],
    inskripsi: '73107',
  },
  {
    nama: 'Sofosbuvir',
    bentuk: 'Elips',
    warna: 'Merah',
    manfaat: ['Mengobati hepatitis C'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/sofosbuvir.jpg',
    penyakit: ['Hepatitis'],
    inskripsi: 'ASE 9761',
  },
  {
    nama: 'Metronidazole',
    bentuk: 'Bundar',
    warna: 'Putih',
    manfaat: ['Mengobati infeksi akibat bakteri atau parasit'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/metronidazole.jpg',
    penyakit: ['Infeksi', 'Tetanus'],
    inskripsi: 'DAN 5540',
  },
  {
    nama: 'Ibuprofen',
    bentuk: 'Elips',
    warna: 'Putih',
    manfaat: [
      'Meredakan nyeri',
      'meredakan demam',
      'dan meredakan radang sendi',
    ],
    usia: ['anak', 'dewasa'],
    gambar: 'src/ibuprofen.jpg',
    penyakit: ['Nyeri', 'Demam'],
    inskripsi: '800 PAR 216',
  },
  {
    nama: 'diazepam',
    bentuk: 'Bundar',
    warna: 'Kuning',
    manfaat: [
      'Mengatasi gangguan kecemasan',
      'meredakan kejang',
      'kaku otot',
      'obat penenang',
    ],
    usia: ['anak', 'dewasa'],
    gambar: 'src/diazepam.jpg',
    penyakit: ['Mental'],
    inskripsi: 'R 052',
  },
]

function filterObatSpesifikasi(obat) {
  const penyakit = obat.penyakit
  const warna = obat.warna
  const bentuk = obat.bentuk
  let resultPenyakit = []
  let resultWarna = []
  let resultBentuk = []
  if (penyakit) {
    
    for (let i = 0; i < listObat.length; i++) {
      const currentMedicine = listObat[i]

      const currentMedicinePenyakit = currentMedicine.penyakit
      for (let j = 0; j < currentMedicinePenyakit.length; j++) {
        if (penyakit === currentMedicinePenyakit[j]) {
          resultPenyakit.push(currentMedicine)
        }
      }
    }
  }

  if (resultPenyakit.length === 0 && !warna && !bentuk) {
    return 'Obat tidak ditemukan'
  } else if (!warna && !bentuk) return resultPenyakit


  if (resultPenyakit.length === 0) resultPenyakit = listObat


  if (warna) {
    for (let i = 0; i < resultPenyakit.length; i++) {
      const currentMedicine = resultPenyakit[i]
      const currentMedicineWarna = currentMedicine.warna
      if (warna === currentMedicineWarna) {
        resultWarna.push(currentMedicine)
      }
    }
  }

  if (resultWarna.length === 0 && !bentuk) {
    return 'Obat tidak ditemukan'
  } else if (!bentuk) {
    return resultWarna
  }


  if (resultWarna.length === 0) resultWarna = listObat

  if (bentuk) {
    for (let i = 0; i < resultWarna.length; i++) {
      const currentMedicine = resultWarna[i]
      const currentMedicineBentuk = currentMedicine.bentuk
      if (bentuk === currentMedicineBentuk) {
        resultBentuk.push(currentMedicine)
      }
    }
  }

  if (resultBentuk.length === 0) return 'Obat tidak ditemukan'

  return resultBentuk
}


function filterObat(obat) {
  if (obat.inskripsi) {
    for (let i = 0; i < listObat.length; i++) {
      const currentMedicine = listObat[i]
      const currentMedicineInskripsi = currentMedicine.inskripsi
      const inskripsi = obat.inskripsi
      if (inskripsi === currentMedicineInskripsi) {
        return currentMedicine
      }
    }
  } else {
    return filterObatSpesifikasi(obat)
  }
}
