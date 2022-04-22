const account = [
    {id:'admin', pw:'admin'},
    {id:'admin1', pw:'123456'},
    {id:'admin12', pw:'qwerty'},
]

document.getElementById("loginButton").addEventListener("click", verifLogin);   
function verifLogin() { 
    const id = document.getElementById('id').value
    const pw = document.getElementById('pasword').value
    const index = account.findIndex(acc => acc.id === id);
    if(index>=0){
        if(account[index].pw === pw){
            // login
            location.replace("indexPembuatanObat.html")
        } 
    }
    alert('username atau password salah')
    resetInputField()
}

function resetInputField() {
    document.getElementById('password').value = ''
}