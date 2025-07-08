document.getElementById("giftBoxEmoji").addEventListener("click", function () {
  this.classList.toggle("opened");
  const message = document.getElementById("giftMessage");
  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

document.getElementById("surpriseBtn").addEventListener("click", function () {
  const sparkle = document.getElementById("sparkle");
  sparkle.style.display = "block";
  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 1200);
});
