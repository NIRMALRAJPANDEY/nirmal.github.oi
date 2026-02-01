function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.top = Math.random() * 300 + "px";
  btn.style.left = Math.random() * 300 + "px";
}

function yesClick() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#ffd6e8;
      font-family:Arial;
      text-align:center;
    ">
      <h1>I love you very much, Darling ❤️🥰</h1>
    </div>
  `;
}

