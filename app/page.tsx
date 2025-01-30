'use client'

import { RefObject, useRef, useState } from "react";

export default function Home() {
  const [ playing, setPlaying ] = useState(false);
  const audioRef: RefObject<HTMLAudioElement | null> = useRef(null);
  function playAudio() {
    if (playing) {
      return;
    }

    audioRef.current?.fastSeek(0);
    audioRef.current?.play();
    setPlaying(true);
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen" onClick={playAudio}>
      <h1>Rebecca Sparks, will you be my <span>baby</span> and my Valentine?</h1>
      <div className="flowers"></div>
      <audio ref={audioRef} src="/kermit/take3.mp3" preload="auto"/>
    </div>
  );
}
