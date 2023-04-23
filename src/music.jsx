import { useEffect } from 'react';

function YouTubePlayer() {
  useEffect(() => {
    const player = new window.YT.Player('youtube-player', {
      height: '360',
      width: '640',
      videoId: 'XXSrR5TXDeY',
      events: {
        'onReady': () => {
          player.playVideo();
        }
      }
    });
  }, []);

  return (
    <div id="youtube-player"></div>
  );
}

export default YouTubePlayer;