//variabel

let player1 = prompt("Player 1: Masukkan nama Anda!");
let player2 = prompt("Player 2: Masukkan nama Anda!");
let round = 5;
let score1 = 0;
let score2 = 0;

// aturan main

alert(
  "Selamat datang di game tebak angka milik " +
    player1 +
    " dan " +
    player2 +
    "! \nAturan mainnya adalah: \n1. Anda akan bertaruh angka dari 1-3. \n2. Jika tebakan anda benar, anda akan mendapatkan 1 poin. \n3. Jumlah ronde adalah 5. \n4. Siapa yang memiliki poin terbanyak pada akhir ronde akan menjadi pemenangnya. \n\nSelamat bermain!"
);

// looping

for (let i = 1; i <= round; i++) {
  alert("Ronde " + i);
  let angka1 = prompt(player1 + ": Masukkan angka antara 1-3!");
  let angka2 = prompt(player2 + ": Masukkan angka antara 1-3!");

  // angka random

  let random = Math.floor(Math.random() * 3) + 1;
  alert("Angka yang dicari " + random);

  // validasi angka

  if (angka1 < 1 || angka1 > 3 || angka2 < 1 || angka2 > 3) {
    alert("Anda salah memasukkan angka! \nGame dimulai dari awal!");
    i--;
    continue;
  }

  // scoring

  if (angka1 == random) {
    alert(player1 + " berhasil menebak angka!");
    score1++;
  }

  if (angka2 == random) {
    alert(player2 + " berhasil menebak angka!");
    score2++;
  }
}

// hasil

alert(
  "Pertandingan telah selesai! \n" +
    player1 +
    " memiliki skor " +
    score1 +
    " dan " +
    player2 +
    " memiliki skor " +
    score2
);

if (score1 > score2) {
  alert(player1 + " menjadi pemenangnya!");
} else if (score2 > score1) {
  alert(player2 + " menjadi pemenangnya!");
} else {
  alert("Permainan berakhir dengan hasil seri!");
}
import "./styles.css";

document.getElementById("app").innerHTML = `

`;
