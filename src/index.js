import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};
let intervalId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchBodyColor = () => {
  intervalId = setInterval(() => {
    refs.bodyRef.style.background =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  refs.startBtn.disabled = true;
  refs.startBtn.classList.add('disabled');
};
const stopSwitchBodyColor = () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.startBtn.classList.remove('disabled');
};
refs.startBtn.addEventListener('click', switchBodyColor);
refs.stopBtn.addEventListener('click', stopSwitchBodyColor);
