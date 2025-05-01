function formatRupiahInput(value) {
  let numberString = value.replace(/[^,\d]/g, '').toString();
  let split = numberString.split(',');
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  let ribuan = split[0].substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return rupiah;
}

function formatInputRupiah(input) {
  let cursorPos = input.selectionStart;
  input.value = formatRupiahInput(input.value);
  input.setSelectionRange(cursorPos, cursorPos);
}

// Fungsi untuk ambil nilai bersih (tanpa titik) untuk perhitungan
function getCleanValue(id) {
  return parseInt(document.getElementById(id).value.replace(/\./g, '')) || 0;
}

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  }

  function hitungCicilan() {
    const pinjaman = getCleanValue('jumlah');
    const tahun = parseInt(document.getElementById('jangka').value);
    const bungaTahunan = parseFloat(document.getElementById('bunga').value);

    const bulan = tahun * 12;
    const bungaBulanan = bungaTahunan / 12 / 100;

    const cicilan = pinjaman * bungaBulanan / (1 - Math.pow(1 + bungaBulanan, -bulan));
    const totalBunga = (cicilan * bulan) - pinjaman;
    const totalBayar = pinjaman + totalBunga;

    document.getElementById('cicilanPerBulan').textContent = formatRupiah(cicilan);
    document.getElementById('bungaDibayar').textContent = formatRupiah(totalBunga);
    document.getElementById('totalPinjaman').textContent = formatRupiah(totalBayar);
  }

  document.getElementById("btnHitung").addEventListener("click", hitungCicilan);
  document.getElementById("closeSimulasi").addEventListener("click", () => {
  document.getElementById("simulasiModal").style.display = "none";
  });

  function openSimulasiModal() {
    document.getElementById("simulasiModal").style.display = "flex";
  }

      // Tutup modal saat klik background
document.getElementById("simulasiModal").addEventListener("click", function(event) {
  // Jika yang diklik adalah elemen luar (bukan isi modal)
  if (event.target === this) {
    this.style.display = "none";
  }
});

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  }

  // Close dropdown on outside click
  document.addEventListener("click", function (e) {
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.getElementById("dropdownMenu");
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });