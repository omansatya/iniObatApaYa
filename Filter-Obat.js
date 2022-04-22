let listObat = [
  {
    nama: 'Captopril',
    bentuk: 'round',
    warna: 'white',
    manfaat: [
      'Mengatasi hipertensi dan gagal jantung',
      'Mencegah komplikasi pascaserangan jantung',
      'Mengobati nefropati diabetik',
    ],
    usia: ['anak', 'dewasa', 'lansia'],
    gambar: 'src/captopril.jpg',
    penyakit: ['Hipertensi', 'Gagal jantung', 'Nefropati diabetik'],
    inskripsi: 'N 133',
  },
  {
    nama: 'Amoxicillin',
    bentuk: 'egg-shape',
    warna: 'white',
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
    bentuk: 'round',
    warna: 'yellow',
    manfaat: ['Menurunkan kadar kolesterol dalam darah'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/simvastanin.jpg',
    penyakit: ['Kolesterol'],
    inskripsi: '93',
  },
  {
    nama: 'Tramadol Hydrocloride',
    bentuk: 'egg-shape',
    warna: 'white',
    manfaat: ['Meredakan nyeri'],
    usia: ['dewasa'],
    gambar: 'src/tramadol-hydrocloride.jpg',
    penyakit: ['Nyeri'],
    inskripsi: '377',
  },
  {
    nama: 'Aspirin',
    bentuk: 'round',
    warna: 'yellow',
    manfaat: [
      'Meredakan nyeri,Meredakan demam,Meredakan peradangan,Mencegah terbentuknya gumpalan darah',
    ],
    usia: ['dewasa'],
    gambar: 'src/aspirin.jpg',
    penyakit: ['Nyeri', 'Demam', 'Peradangan', 'Penggumpalan darah'],
    inskripsi: '03 SP',
  },
  {
    nama: 'Levothyroxine',
    bentuk: 'capsule',
    warna: 'blue',
    manfaat: ['Mengobati hipotiroidisme'],
    usia: ['dewasa'],
    gambar: 'src/levothyroxine.jpg',
    penyakit: ['Hipotiroidisme'],
    inskripsi: '137 GG 330',
  },
  {
    nama: 'Metformin',
    bentuk: 'egg-shape',
    warna: 'white',
    manfaat: ['Menurunan kadar gula darah pada penderita diabetes tipe 2'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/metformin.jpg',
    penyakit: ['Diabetes'],
    inskripsi: 'Andrx 676',
  },
  {
    nama: 'Olanzapine',
    bentuk: 'eliptical',
    warna: 'yellow',
    manfaat: ['	Mengobati skizofrenia dan gangguan bipolar'],
    usia: ['dewasa'],
    gambar: 'src/olanzapine.jpg',
    penyakit: ['Skizofernia', 'Bipolar'],
    inskripsi: '15',
  },
  {
    nama: 'Ranitidine Hydrochloride',
    bentuk: 'capsule',
    warna: 'white',
    manfaat: ['	Menurunkan produksi asam lambung berlebih'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/ranitidine-hydrochloride.jpg',
    penyakit: ['Asam lambung'],
    inskripsi: '0031',
  },
  {
    nama: 'Clobazam',
    bentuk: 'capsule',
    warna: 'white',
    manfaat: ['Mengatasi kejang pada epilepsi'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/clobazam.jpg',
    penyakit: ['Epilepsi'],
    inskripsi: '13 25',
  },
]

function filterObatSpesifikasi(obat, database) {
  const penyakit = obat.penyakit
  const warna = obat.warna
  const bentuk = obat.bentuk
  let resultPenyakit = []
  let resultWarna = []
  let resultBentuk = []
  if (penyakit) {
    for (let i = 0; i < database.length; i++) {
      const currentMedicine = database[i]
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

  if (resultPenyakit.length === 0) resultPenyakit = database

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

  if (resultWarna.length === 0) resultWarna = database

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

function filterObat(obat, database) {
  if (obat.inskripsi) {
    for (let i = 0; i < database.length; i++) {
      const currentMedicine = database[i]
      const currentMedicineInskripsi = currentMedicine.inskripsi
      const inskripsi = obat.inskripsi
      if (inskripsi === currentMedicineInskripsi) {
        return currentMedicine
      }
    }
  } else {
    return filterObatSpesifikasi(obat, database)
  }
}

let obat = {}

obat = {
  bentuk: 'round',
  warna: 'white',
  penyakit: 'Hipertensi',
  inskripsi: 'N 133',
}
console.log(filterObat(obat, listObat))

// {
//     nama: 'Captopril',
//     bentuk: 'round',
//     warna: 'white',
//     manfaat: [
//       'Mengatasi hipertensi dan gagal jantung',
//       'Mencegah komplikasi pascaserangan jantung',
//       'Mengobati nefropati diabetik'
//     ],
//     usia: [ 'anak', 'dewasa', 'lansia' ],
//     gambar: 'src/captopril.jpg',
//     penyakit: [ 'Hipertensi', 'Gagal jantung', 'Nefropati diabetik' ],
//     inskripsi: 'N 133'
//   }

obat = {
  bentuk: 'round',
  warna: 'white',
  penyakit: 'Hipertensi',
}
console.log(filterObat(obat, listObat))

// {
//     nama: 'Captopril',
//     bentuk: 'round',
//     warna: 'white',
//     manfaat: [
//       'Mengatasi hipertensi dan gagal jantung',
//       'Mencegah komplikasi pascaserangan jantung',
//       'Mengobati nefropati diabetik'
//     ],
//     usia: [ 'anak', 'dewasa', 'lansia' ],
//     gambar: 'src/captopril.jpg',
//     penyakit: [ 'Hipertensi', 'Gagal jantung', 'Nefropati diabetik' ],
//     inskripsi: 'N 133'
//   }

obat = {
  bentuk: 'round',
  warna: 'white',
}
console.log(filterObat(obat, listObat))

// {
//     nama: 'Captopril',
//     bentuk: 'round',
//     warna: 'white',
//     manfaat: [
//       'Mengatasi hipertensi dan gagal jantung',
//       'Mencegah komplikasi pascaserangan jantung',
//       'Mengobati nefropati diabetik'
//     ],
//     usia: [ 'anak', 'dewasa', 'lansia' ],
//     gambar: 'src/captopril.jpg',
//     penyakit: [ 'Hipertensi', 'Gagal jantung', 'Nefropati diabetik' ],
//     inskripsi: 'N 133'
//   }

obat = {
  warna: 'white',
}
console.log(filterObat(obat, listObat))

// [
//     {
//       nama: 'Captopril',
//       bentuk: 'round',
//       warna: 'white',
//       manfaat: [
//         'Mengatasi hipertensi dan gagal jantung',
//         'Mencegah komplikasi pascaserangan jantung',
//         'Mengobati nefropati diabetik'
//       ],
//       usia: [ 'anak', 'dewasa', 'lansia' ],
//       gambar: 'src/captopril.jpg',
//       penyakit: [ 'Hipertensi', 'Gagal jantung', 'Nefropati diabetik' ],
//       inskripsi: 'N 133'
//     },
//     {
//       nama: 'Amoxicillin',
//       bentuk: 'egg-shape',
//       warna: 'white',
//       manfaat: [
//         'Mengatasi infeksi bakteri',
//         'Mengatasi gonore',
//         'Mengobati pielonefritis'
//       ],
//       usia: [ 'anak', 'dewasa' ],
//       gambar: 'src/amoxicillin.jpg',
//       penyakit: [ 'Infeksi bakteri', 'Gonore', 'Pielonefritis' ],
//       inskripsi: '221'
//     },
//     {
//       nama: 'Tramadol Hydrocloride',
//       bentuk: 'egg-shape',
//       warna: 'white',
//       manfaat: [ 'Meredakan nyeri' ],
//       usia: [ 'dewasa' ],
//       gambar: 'src/tramadol-hydrocloride.jpg',
//       penyakit: [ 'Nyeri' ],
//       inskripsi: '377'
//     },
//     {
//       nama: 'Metformin',
//       bentuk: 'egg-shape',
//       warna: 'white',
//       manfaat: [ 'Menurunan kadar gula darah pada penderita diabetes tipe 2' ],
//       usia: [ 'anak', 'dewasa' ],
//       gambar: 'src/metformin.jpg',
//       penyakit: [ 'Diabetes' ],
//       inskripsi: 'Andrx 676'
//     },
//     {
//       nama: 'Ranitidine Hydrochloride',
//       bentuk: 'capsule',
//       warna: 'white',
//       manfaat: [ '\tMenurunkan produksi asam lambung berlebih' ],
//       usia: [ 'anak', 'dewasa' ],
//       gambar: 'src/ranitidine-hydrochloride.jpg',
//       penyakit: [ 'Asam lambung' ],
//       inskripsi: '0031'
//     },
//     {
//       nama: 'Clobazam',
//       bentuk: 'capsule',
//       warna: 'white',
//       manfaat: [ 'Mengatasi kejang pada epilepsi' ],
//       usia: [ 'anak', 'dewasa' ],
//       gambar: 'src/clobazam.jpg',
//       penyakit: [ 'Epilepsi' ],
//       inskripsi: '13 25'
//     }
//   ]

obat = {
  warna: 'clear',
}
console.log(filterObat(obat, listObat))

// Obat tidak ditemukan

obat = {
  bentuk: 'polygon',
}
console.log(filterObat(obat, listObat))

// Obat tidak ditemukan

obat = {
  penyakit: 'sakit hati',
}
console.log(filterObat(obat, listObat))

// Obat tidak ditemukan
