import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(throttle);
console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEYS = {
  time: 'videoplayer-current-time',
};

const onPlay = function (data) {
  localStorage.setItem(KEYS.time, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(KEYS.time) ?? 0);
