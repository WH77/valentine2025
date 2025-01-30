'use client'

import { RefObject, useRef } from "react";

export default function Home() {
  const audioRef: RefObject<HTMLAudioElement | null> = useRef(null);
  function playAudio() {
    audioRef.current?.fastSeek(0);
    audioRef.current?.play();
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <h1 className="hover:cursor-pointer" onClick={playAudio}>Rebecca Sparks, will you be my <span>baby</span> and my Valentine?</h1>
      <div className="flowers"></div>
      <audio ref={audioRef} src="/kermit/take3.mp3" preload="auto"/>
    </div>
  );
}
