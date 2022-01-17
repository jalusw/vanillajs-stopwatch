const text = document.getElementById("text");

let miliseconds_counter = 0,
  seconds,
  minutes;
const miliseconds_el = document.getElementById("miliseconds");
const seconds_el = document.getElementById("seconds");
const minutes_el = document.getElementById("minutes");
const start_pause_button = document.getElementById("start-pause");
const split_button = document.getElementById("split");
const splits_list = document.querySelector("ul.splits-list");
const reset_button = document.getElementById("reset");
this.timer_running = false;

start_pause_button.addEventListener("click", (e) => {
  if (this.timer_running) {
    this.timer_running = false;
    start_pause_button.textContent = "Start";
    clearInterval(this.timer);
  } else {
    start_pause_button.textContent = "Pause";
    this.timer = setInterval(() => {
      miliseconds_counter += 10;
      seconds = Math.floor(miliseconds_counter / 1000) % 60;
      minutes = Math.floor(miliseconds_counter / 1000 / 60) % 60;
      miliseconds_el.textContent = `${
        ((miliseconds_counter % 1000) / 100) * 10
      }`;
      seconds_el.textContent = `${seconds < 10 ? "0" : ""}${seconds}`;
      minutes_el.textContent = `${minutes < 10 ? "0" : ""}${minutes}`;
    }, 10);
    this.timer_running = true;
  }
});

split_button.addEventListener("click", () => {
  if (this.timer_running == false) return;
  const li = document.createElement("li");
  const split_time = document.createElement("span");
  const divider = document.createElement("span");
  const split_text = document.createElement("span");

  let milsec = ((miliseconds_counter % 1000) / 100) * 10;

  split_time.textContent = `${minutes < 10 ? "0" + minutes : minutes} : ${
    seconds < 10 ? "0" + seconds : seconds
  } : ${milsec < 10 ? "0" + milsec : milsec}`;
  split_text.textContent = "Split";

  li.appendChild(split_time);
  li.appendChild(divider);
  li.appendChild(split_text);

  splits_list.appendChild(li);
});

reset_button.addEventListener("click", () => {
  minutes_el.textContent = "00";
  seconds_el.textContent = "00";
  miliseconds_el.textContent = "00";
  minutes = 0;
  seconds = 0;
  miliseconds_counter = 0;
  this.timer_running = false;
  start_pause_button.textContent = "Start";
  splits_list.innerHTML = "";
  clearInterval(this.timer);
});
