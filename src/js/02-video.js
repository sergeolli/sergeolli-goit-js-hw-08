import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle((e) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}, 1000));

    const timToStart = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    if (timToStart) {
        player.setCurrentTime(timToStart)
    }








    
     
    

   



