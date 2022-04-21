document.getElementById("tambahObatButton").addEventListener("click", tambahObat);   
function tambahObat() {    
    // addObat() ??
    // namaObat = document.getElementById('addNamaObat').value
    // jenisObat = document.getElementById('addJenisObat').value
    // indexObat = document.getElementById('addIndexObat').value 
    // bentukObat = document.getElementById('addBentukObat').value
    // warnaObat = document.getElementById('addWarnaObat').value 
    // manfaatObat = document.getElementById('addManfaatObat').value
    // gambar = document.getElementById('addGambar').value
    alert('tambah')
}


// DATABASE OBAT

let listObat = [{
    nama: 'Captopril',
    bentuk: 'round',
    warna: 'white',
    manfaat: ['Mengatasi hipertensi dan gagal jantung', 'Mencegah komplikasi pascaserangan jantung', 'Mengobati nefropati diabetik'],
    usia: ['anak', 'dewasa', 'lansia'],
    gambar: 'src/captopril.jpg',
    penyakit: ['Hipertensi', 'Gagal jantung', 'Nefropati diabetik'],
    inskripsi: ['N', '133']
}, 
{
    nama: 'Amoxicillin',
    bentuk: 'egg-shape',
    warna: 'white',
    manfaat: ['Mengatasi infeksi bakteri', 'Mengatasi gonore', 'Mengobati pielonefritis'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/amoxicillin.jpg',
    penyakit: ['Infeksi bakteri', 'Gonore', 'Pielonefritis'],
    inskripsi: ['221']
}, 
{
    nama: 'Simvastanin',
    bentuk: 'round',
    warna: 'yellow',
    manfaat: ['Menurunkan kadar kolesterol dalam darah'],
    usia: ['anak', 'dewasa', ],
    gambar: 'src/simvastanin.jpg',
    penyakit: ['Kolesterol'],
    inskripsi: ['93']
}, 
{
    nama: 'Tramadol Hydrocloride',
    bentuk: 'egg-shape',
    warna: 'white',
    manfaat: ['Meredakan nyeri'],
    usia: ['dewasa'],
    gambar: 'src/tramadol-hydrocloride.jpg',
    penyakit: ['Nyeri'],
    inskripsi: ['377']
}, 
{
    nama: 'Aspirin',
    bentuk: 'round',
    warna: 'yellow',
    manfaat: ['Meredakan nyeri,Meredakan demam,Meredakan peradangan,Mencegah terbentuknya gumpalan darah'],
    usia: ['dewasa'],
    gambar: 'src/aspirin.jpg',
    penyakit: ['Nyeri', 'Demam', 'Peradangan', 'Penggumpalan darah'],
    inskripsi: ['03', 'SP']
}, 
{
    nama: 'Levothyroxine',
    bentuk: 'capsule',
    warna: 'blue',
    manfaat: ['Mengobati hipotiroidisme'],
    usia: ['dewasa'],
    gambar: 'src/levothyroxine.jpg',
    penyakit: ['Hipotiroidisme'],
    inskripsi: ['137', 'GG', '330']
}, 
{
    nama: 'Metformin',
    bentuk: 'egg-shape',
    warna: 'white',
    manfaat: ['Menurunan kadar gula darah pada penderita diabetes tipe 2'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/metformin.jpg',
    penyakit: ['Diabetes'],
    inskripsi: ['Andrx', '676']
}, 
{
    nama: 'olanzapine',
    bentuk: 'eliptical',
    warna: 'yellow',
    manfaat: ['	Mengobati skizofrenia dan gangguan bipolar'],
    usia: ['dewasa'],
    gambar: 'src/olanzapine.jpg',
    penyakit: ['Skizofernia', 'Bipolar'],
    inskripsi: ['15']
}, 
{
    nama: 'Ranitidine Hydrochloride',
    bentuk: 'capsule',
    warna: 'white',
    manfaat: ['	Menurunkan produksi asam lambung berlebih'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/ranitidine-hydrochloride.jpg',
    penyakit: ['Asam lambung'],
    inskripsi: ['0031']
}, 
{
    nama: 'Clobazam',
    bentuk: 'capsule',
    warna: 'white',
    manfaat: ['Mengatasi kejang pada epilepsi'],
    usia: ['anak', 'dewasa'],
    gambar: 'src/clobazam.jpg',
    penyakit: ['Epilepsi'],
    inskripsi: ['13', '25']
}]