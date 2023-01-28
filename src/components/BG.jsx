import { useState } from "react";
import { SiYoutubemusic } from "react-icons/si";
import Sound from "react-sound-2";

import bg from "./../assets/bg.mp3";

export default function BG() {
  const [isPlaying, setIsPlaying] = useState(true);
  function handlePlay() {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }
  return (
    <>
      <SiYoutubemusic onClick={handlePlay} size={30} color={"a41c1c"} />
      <Sound
        url={bg}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSE}
        autoLoad={true}
        volume={10}
        loop={true}
      />
    </>
  );
}
