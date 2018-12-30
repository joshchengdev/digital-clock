function showTime() {
  let d = new Date();

  let h = d.getHours(); //0-23
  let m = d.getMinutes(); //0-59
  let s = d.getSeconds(); //0-59
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let currentTime = h + ":" + m + ":" + s + " " + session;
  document.querySelector(".current-time").innerText = currentTime;

  setTimeout(showTime, 1000);
}

showTime();
