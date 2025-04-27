
const openModal = document.getElementById("openSimulasiModal");
const closeModal = document.getElementById("closeSimulasi");
const modal = document.getElementById("simulasiModal");

openModal.onclick = () => modal.style.display = "flex";
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Kalkulasi
const jumlah = document.getElementById("jumlah");
const jangka = document.getElementById("jangka");
const bunga = document.getElementById("bunga");

const totalEl = document.getElementById("totalPinjaman");
const bungaEl = document.getElementById("bungaDibayar");

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(angka);
}

function updateSimulasi() {
  const pinjaman = parseInt(jumlah.value);
  const tahun = parseInt(jangka.value);
  const persen = parseFloat(bunga.value);

  const bungaBayar = pinjaman * (persen / 100) * tahun;
  const totalBayar = pinjaman + bungaBayar;

  totalEl.innerText = formatRupiah(totalBayar);
  bungaEl.innerText = formatRupiah(bungaBayar);
}

[jumlah, jangka, bunga].forEach(input => {
  input.addEventListener("input", updateSimulasi);
});

updateSimulasi(); // Initial

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