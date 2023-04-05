//player1
var chance = 3;
alert("tebak angka 1-10" + "\n kamu punya " + chance + " kesempatan");
chance--;
while (chance >= 0) {
  var player1 = prompt("player 1, Silakan masukan angka tebakan");
  var compt = Math.floor(Math.random() * 11);

  if (player1 == compt) {
    alert("TEBAKAN ANDA BENAR" + "\n ANGKA YANG DICARI" + compt);
    break;
  } else if (chance == 0) {
    alert("kesempatan anda telah habis giliran player dua");
    break;
  } else if (player1 > compt) {
    alert(
      "TEBAKAN ANDA TERLALU TINGGI" +
        "\n Player 1 kamu punya" +
        chance +
        " kesempatan"
    );
  } else if (player1 < compt) {
    alert(
      "TEBAKAN ANDA TERLALU RENDAH" +
        "\n Player 1 kamu punya" +
        chance +
        " kesempatan"
    );
    chance--;
  }
}
//player2
var chance = 3;
alert("tebak angka 1-10" + "\n kamu punya " + chance + " kesempatan");
chance--;
while (chance >= 0) {
  var player2 = prompt("player 2,Silakan masukan angka tebakan");
  var compt = Math.floor(Math.random() * 11);

  if (player2 == compt) {
    alert("TEBAKAN ANDA BENAR" + "\n ANGKA YANG DICARI" + compt);
    break;
  } else if (chance == 0) {
    alert("kesempatan anda telah habis");
    break;
  } else if (player2 > compt) {
    alert(
      "TEBAKAN ANDA TERLALU TINGGI" +
        "\n Player 2 kamu punya" +
        chance +
        " kesempatan"
    );
  } else if (player2 < compt) {
    alert(
      "TEBAKAN ANDA TERLALU RENDAH" +
        "\n Player 2 kamu punya" +
        chance +
        " kesempatan"
    );
    chance--;
  }
}
