// let ArrayOfObject =[]
// data = {
//     kode, namaBarang, Harga 
// }

function penjumlahan(){
    const kode = parseInt(document.getElementById).value;
    const namaBarang = document.getElementById.value;
    const Harga = parseInt(document.getElementById).value;
    const total = parseInt(document.getElementById).value;
    const jumlahBarang = parseInt(document.getElementById).value;

    const newObjc = {kode, namaBarang,Harga, total, jumlahBarang}

    ArrayOfObject.push(newObjc);

    
    alert(`kode ${kode } dengan nama barang ${namaBarang} seharga ${Harga} total pembelian ${total} 
            jumlah barangnya sebanyak ${jumlahBarang}`)

    document.getElementById('inputNumber').value ='';
    document.getElementById('inpuNamaBarang').value ='';
    document.getElementById('inputHargaBarang').value ='';
    document.getElementById('inputTotal').value ='';
    document.getElementById('inputJumlahBarang').value ='';
    
}


