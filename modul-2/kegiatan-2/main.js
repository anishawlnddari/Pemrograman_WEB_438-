var form = document.querySelector("form");
var nama = document.getElementById("nama");
var email = document.getElementById("email");
var alamat = document.getElementById("alamat");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (submit()) {
    alert("Berhasil dimasukkan datanya");
  }
});

function submit() {
  if (nama.value === "") {
    alert("Nama tidak boleh kosong");
    return false;
  }

  if (email.value === "") {
    alert("Email tidak boleh kosong");
    return false;
  }

  if (alamat.value === "") {
    alert("Alamat tidak boleh kosong");
    return false;
  }

  return true;
}