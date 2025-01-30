'use client'

import { RefObject, useRef, useState } from "react";
import Image from 'next/image';
import snoopers from '../public/kermit/snoopers.png';

export default function Home() {
  const [playing, setPlaying] = useState(false);
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
    <div className={`page min-h-screen max-h-screen ${playing ? '' : 'hover:cursor-pointer'}`} onClick={playAudio}>
      <div className="center grid items-center justify-items-center">
        <h1>Rebecca Sparks, will you be my <span>baby</span> and my Valentine?</h1>
        <Image className="contain-size" src={snoopers} alt="snoopy <3" />
      </div>
      <div className="decor">
        <div className="contain-size flowers"></div>
      </div>
      <audio ref={audioRef} src="/kermit/take3.mp3" preload="auto" />
    </div>
  );
}
