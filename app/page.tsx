'use client'

import { RefObject, useRef, useState } from "react";
import Image from 'next/image';
import snoopers from '../public/kermit/snoopers.png';
import snoopers2 from '../public/kermit/snoopers2.png';

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
    <div className={`page h-screen overflow-none ${playing ? '' : 'hover:cursor-pointer'}`} onClick={playAudio}>
      <div className="center grid items-center justify-items-center max-h-screen">
        <h1>Rebecca Sparks, will you be my <span>baby</span> and my Valentine?</h1>
        <Image className="h-full w-auto object-contain" src={snoopers} alt="snoopy <3" />
      </div>
      <div className="arrangement grid items-center justify-items-center max-h-screen">
        <Image className="h-full w-auto object-contain" src={snoopers2} alt="snoopy on 1 knee" />
      </div>

      <div className="decor max-h-screen">
        <div className="contain-size flowers"></div>
      </div>
      <audio ref={audioRef} src="/kermit/take3.mp3" preload="auto" />
    </div>
  );
}
