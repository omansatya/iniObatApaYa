document.getElementById("cariObatButton").addEventListener("click", cariObat);   
function cariObat() {        
    indexObat = document.getElementById('obatInskripsi').value 
    bentukObat = document.getElementById('obatBentuk').value
    warnaObat = document.getElementById('obatWarna').value 
    penyakit = document.getElementById('penyakitObat').value

    // creat obj obat to search
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
    const obatDitemukan = filterObat(obat)

    if (typeof obatDitemukan === 'string') {        
        // tidak ditemukan
        // go to notfound html or something
        // show tidak ditemukan
        alert('obat tidak ditemukan')
        resetField()
    }
    else if(Array.isArray(obatDitemukan)){
        // show obat recommendation
        // go to show list obat
        // set value based on this
        
        render(obatDitemukan)
    }
    else{
        // go to show obat html
        // set value based on obatDitemukan
        renderSpecific(obatDitemukan)
    }
}

function render(obatList) {
    // get todo list
    let menu = document.getElementById("obatCardList")
    let template = ''
    // put all obat to html
    for (const obat of obatList) {
        template += `
        <div class="card" style="width: 18rem;">
            <img src="${obat.gambar}" class="card-img-top" alt="${obat.nama}">
            <div class="card-body">
                <p class="card-text">${obat.nama}\n${obat.manfaat}\n${obat.penyakit}</p>
            </div>
        </div>
        `
    }
    // loop end
    menu.innerHTML = template
}


function renderSpecific(obat) {
    let menu = document.getElementById("obatCardList")
    const template = `
    <div class="card" style="width: 18rem;">
        <img src="${obat.gambar}" class="card-img-top" alt="${obat.nama}">
        <div class="card-body">
            <p class="card-text">${obat.nama}\n${obat.manfaat}\n${obat.penyakit}</p>
        </div>
    </div>
    `      
    menu.innerHTML = template
}

// function gantiCard(){
//     document.getElementById("obatCardList").innerHtml = ""
//     render()
// }

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