function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("time").textContent = time;
    setTimeout(updateTime, 1000);
  }
  document.getElementById("year").textContent = new Date().getFullYear();
  updateTime();
  