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
