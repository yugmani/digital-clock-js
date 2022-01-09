const clockEl = document.getElementById("digital");

const displayTime = () => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const amOrPm = formatAmPm(hours);

  hours = twelveOr24(hours);

  hours = doubleDigit(hours);
  minutes = doubleDigit(minutes);
  seconds = doubleDigit(seconds);

  clockEl.innerHTML = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
};

const formatAmPm = (time) => {
  let format = "AM";
  if (time >= 12) {
    format = "PM";
  }

  return format;
};

const twelveOr24 = (time) => {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }

  return time;
};

const doubleDigit = (time) => {
  if (time < 10) {
    time = "0" + time;
  }

  return time;
};

displayTime();
setInterval(displayTime, 1000);
