document.getElementById("tambahObatButton").addEventListener("click", tambahObat);   
function tambahObat() {        
    namaObat = document.getElementById('addNamaObat').value
    jenisObat = document.getElementById('addJenisObat').value
    indexObat = document.getElementById('addIndexObat').value 
    bentukObat = document.getElementById('addBentukObat').value
    warnaObat = document.getElementById('addWarnaObat').value 
    manfaatObat = document.getElementById('addManfaatObat').value
    gambar = document.getElementById('addGambar').value

    // check if req is empty
    if(!namaObat || !jenisObat || !indexObat || !bentukObat || !warnaObat || !manfaatObat){
        alert('input kurang')
    }
    else{
        // check if dupe or fail
        if(false){
            alert('data sudah ada')
        }
        else{
            alert('berhasil ditambahkan')
            // call func add to db
            
            resetField()            
        }
    }
}

function resetField() {
    // clear field
    document.getElementById('addNamaObat').value = ''
    document.getElementById('addJenisObat').value = ''
    document.getElementById('addIndexObat').value = ''
    document.getElementById('addBentukObat').value = ''
    document.getElementById('addWarnaObat').value = ''
    document.getElementById('addManfaatObat').value = ''
    document.getElementById('addGambar').value = ''
}