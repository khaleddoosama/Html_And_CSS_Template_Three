let num = document.querySelectorAll('.stats .number'); // get all the numbers

let statsSection  = document.querySelector('.stats'); // get the statsSection 

let started = false; // check if the startCount has started

// when the user scrolls 
window.addEventListener('scroll', function () { 
  if (window.scrollY >= statsSection .offsetTop) {
    if (!started) { // if the startCount has not started
      num.forEach(startCount); // start the Count
      started = true; // set the started to true
    }
  }
});

// start the count
function startCount(el) { 
  let goal = el.dataset.goal; // get the goal
  
  let count = setInterval(function () {
    el.textContent++; 
    if (el.textContent == goal) { // if the number is equal to the goal
      clearInterval(count); // stop the count
    } 
  }, 2000/goal); 
  
}


let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.addEventListener('scroll', function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}
);


let countDownDate = new Date("JUNE 11, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
    let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);