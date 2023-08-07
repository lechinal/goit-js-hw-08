import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player/dist/player.js';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const savedTime = parseFloat(localStorage.getItem('videoplayer-current-time'));
if (!isNaN(savedTime)) {
  player.setCurrentTime(savedTime);
}