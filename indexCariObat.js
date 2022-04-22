document.getElementById("cariObatButton").addEventListener("click", cariObat);   
function carihObat() {        
    indexObat = document.getElementById('indexObat').value 
    bentukObat = document.getElementById('bentukObat').value
    warnaObat = document.getElementById('warnaObat').value 
    penyakit = document.getElementById('penyakitObat').value

    let obat = {}
    if(indexObat!==''){
        obat['inskripsi'] = indexObat
    }
    if(penyakit!==''){
        obat['penyakit'] = penyakit
    }
    if(warnaObat!==''){
        obat['warna'] = warnaObat
    }
    if(bentukObat!==''){
        obat['bentuk'] = bentukObat
    }    
    
    // call filter obat
    const obatDitemukan = filterObat(obat, '')

    if (obatDitemukan.length === 1) {
        // show obat
        // go to show obat html
        // set value based on this
    }
    else if(obatDitemukan.length>1){
        // show obat recomn
        // go to show list obat
        // set value based on this
    }
    else{
        // go to notfound html or something
        // show tidak ditemukan
    }
}
