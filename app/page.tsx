'use client'

import { RefObject, useRef, useState } from "react";
import Image from 'next/image';
import snoopers from '../public/kermit/snoopers.png';
import reporter from '../public/kermit/reporter.png';
import thonking from '../public/kermit/thonking.png';
import frontal from '../public/kermit/frontal.png';
import suit from '../public/kermit/suit.png';

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
        <Image className="h-full w-auto object-contain" src={snoopers} priority={true} alt="snoopy <3" />
      </div>
      <div className="arrangement grid items-center justify-items-center max-h-screen">
        <Image className="h-full w-auto object-contain reporter" src={reporter} alt="Kermit reporter" />
        <Image className="h-full w-auto object-contain thonking" src={thonking} alt="Kermit thonking" />
        <Image className="w-auto object-contain frontal" src={frontal} alt="Kermit demure" />
        <Image className="h-full w-auto object-contain suit" src={suit} alt="Kermit suit" />
      </div>

      <div className="decor max-h-screen">
        <div className="contain-size flowers"></div>
      </div>
      <audio ref={audioRef} src="/kermit/take3.mp3" preload="auto" />
    </div>
  );
}
