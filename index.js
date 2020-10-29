const body = document.querySelector('body');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#297548',
  '#791548',
  '#795549',
  '#195548',
  '#395148',
  '#896548',
  '#725548',
];

let max = colors.length;
let min = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let intervalId;

const startButton = function(){
 intervalId = setInterval(() => { 
   body.style.backgroundColor=colors[randomIntegerFromInterval(min,max)]
  }, 1000);
  start.setAttribute('disabled',true);
  
}
const stopButton = function(){
    clearInterval(intervalId);
    start.removeAttribute('disabled');
}

const reserButton = function(){
  body.style.backgroundColor=('white')
}

start.addEventListener('click', startButton);
stop.addEventListener('click', stopButton);
reset.addEventListener('click', reserButton);