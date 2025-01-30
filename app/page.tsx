'use client'

import { RefObject, useRef, useState } from "react";
import Image from 'next/image';
import snoopers from '../public/kermit/snoopers.png';

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
    <div className={`page grid items-center justify-items-center min-h-screen max-h-screen ${playing ? '' : 'hover:cursor-pointer'}`} onClick={playAudio}>
      <h1>Rebecca Sparks, will you be my <span>baby</span> and my Valentine?</h1>
      <div className="contain-size flowers"></div>
      <Image className="contain-size" src={snoopers} alt="snoopy <3"/>
      <audio ref={audioRef} src="/kermit/take3.mp3" preload="auto"/>
    </div>
  );
}
