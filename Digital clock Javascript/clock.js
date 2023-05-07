function padZero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(() => {
  var hr = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  if (hr > 12) {
    document.getElementById("ampm").textContent = "PM";
    hr = hr - 12;
  }
  document.getElementById("hr").textContent = padZero(hr);
  document.getElementById("min").textContent = padZero(min);
  document.getElementById("sec").textContent = padZero(sec);
}, 500);
