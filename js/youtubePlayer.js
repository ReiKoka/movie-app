"use strict";

export let player;

export function onYouTubeIframeAPIReady() {
  const iframe = document.querySelector(".frame-player");
  if (iframe) {
    player = new YT.Player(iframe, {
      playerVars: {
        autoplay: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }
}

export function onPlayerReady(event) {
  event.target.stopVideo();
}

export function stopPlayerVideo() {
  if (player) {
    player.stopVideo();
  }
}
