function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.top = Math.random() * 300 + "px";
  btn.style.left = Math.random() * 300 + "px";
}

function yesClick() {
  document.body.innerHTML = "<h1>Yay! 💖🥰</h1>";
}
