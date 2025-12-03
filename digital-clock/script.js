let time = document.getElementById('time');

function getTime() {
  let now = new Date();

  let hour24 = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let ampm = hour24 >= 12 ? 'PM' : 'AM';

  let hour = hour24 % 12;
  hour = hour === 0 ? 12 : hour;

  // add padding
  hour = String(hour).padStart(2, '0');
  min = String(min).padStart(2, '0');
  sec = String(sec).padStart(2, '0');

  time.textContent = `${hour}:${min}:${sec} ${ampm}`;
}

getTime();
setInterval(getTime, 1000);
