let time = document.querySelector('.time');

function showTime(){
  time.innerHTML = new Date();
}

setInterval(showTime, 1000)
