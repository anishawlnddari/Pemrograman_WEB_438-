function Jumlahkan() {
  var angka1 = parseInt(document.getElementById("angka1").value);
  var angka2 = parseInt(document.getElementById("angka2").value);
  var hasil = angka1 + angka2;

  document.getElementById("hasil").textContent = hasil;

  alert("Hasil Penjumlahan: " + hasil);

  return false;
}

function Ulang() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").textContent = "";

  alert("Telah Dihapus");
}
