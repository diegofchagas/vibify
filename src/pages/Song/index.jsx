import { Link, useParams } from "react-router";
import { BoxPlayer, CardPLayContainer, Container, ContainerSong, ControlContainer, MusicCard, ProgressBar, ProgressBarContainer } from "./style";
import { PauseCircleIcon, PlayCircleIcon, SkipBackIcon } from "@phosphor-icons/react";
import Tippy from "@tippyjs/react";
import { SkipForwardIcon } from "@phosphor-icons/react/dist/ssr";
import { artistArray,songsArray } from "../../api/api.js";
import { useEffect, useRef, useState } from "react";


export const Song = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef();

  const { id } = useParams();
  const songId = id;

  console.log(progress)


  //currentSong encontra a música atual com base no id da URL.
  const currentSong = songsArray.find((item) => item._id === id);
  //artistSongs pega todas as músicas do mesmo artista.
  const artistObj = artistArray.find(
    (item) => item.name === currentSong.artist
  );
  // Todas as músicas do artista, exceto a atual
  const artistSongs = songsArray.filter(
    (item) => item.artist === currentSong.artist && item._id !== songId
  );
  // Gera música aleatória diferente da atual
  const randomIndex = Math.floor(Math.random() * artistSongs.length);
  //Armazena na variável musicaId o ID de uma música aleatória do mesmo artista
  let musicaId = artistSongs[randomIndex]._id;

  //logica para renderizar os artistas e musicas
  //const {image,name,duration} = songsArray.filter(item => item.id === Number(id))[0];
  //const artistObj = artistArray.filter(item => item.name === artist)[0];

  //logica para musicas
  // const currentSong = songsArray.find(item => item.id === Number(id));
  // const artistSongs = songsArray.filter(item => item.artist === artistObj.name);
  // const availableSongs = artistSongs.filter(song => song.id !== currentSong.id);
  // const randomIndex = Math.floor(Math.random() * availableSongs.length);
  // const musicaId =  availableSongs[randomIndex].id;

  //currentSong encontra a música atual com base no id da URL.

  const playPause = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds)=> {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0")
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0")

    return `${minutes}:${seconds}`;
  }

  const timeInSeconds = (timeString) =>{
    const newArray = timeString.split(":");
    const minutes = Number(newArray[0]);
    const seconds = Number(newArray[1]);

    return seconds + minutes * 60;
  }

  const durationInSeconds = timeInSeconds(currentSong.duration);
  console.log(durationInSeconds)

  useEffect(() => {
    let intervalMusic;
    if (isPlaying) {
      setInterval(() => {
        // Checamos se o audioRef.current existe para evitar erros
        if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        // Calculamos e atualizamos o progresso a cada segundo
         setProgress((audioRef.current.currentTime / durationInSeconds) * 100);
      }, 1000);
    }

    return () => {if(intervalMusic)clearInterval(intervalMusic)};
  }, [isPlaying,durationInSeconds]);
  

  

  return (
    <Container>
      <ContainerSong>
        <CardPLayContainer>
          <BoxPlayer>
            <img
              className="album-art"
              src={currentSong.image}
              alt={`imagem cantor ${currentSong.name}`}
            />
            <MusicCard>
              <span className="music">Música</span>
              <h3>{currentSong.name}</h3>
              <a className="artist">{artistObj.name}</a>
              <div className="mb-4">
                <ProgressBarContainer>
                  <ProgressBar $progressWidth={`${progress}%`}/>
                </ProgressBarContainer>
                <div className="time">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentSong.duration}</span>
                </div>
              </div>
              <ControlContainer>
                <Link to={`/song/${musicaId}`}>
                  <SkipBackIcon size={32} />
                </Link>
                <Tippy
                  content="Play"
                  delay={[1000, 0]}
                  placement="top"
                  theme="custom-play"
                >
                  <Link to={`/song/${id}`}>
                    {isPlaying ? (
                      <PauseCircleIcon
                        size={56}
                        weight="fill"
                        onClick={playPause}
                      />
                    ) : (
                      <PlayCircleIcon
                        size={56}
                        weight="fill"
                        onClick={playPause}
                      />
                    )}
                  </Link>
                </Tippy>
                <Link to={`/song/${musicaId}`}>
                  <SkipForwardIcon size={32} />
                </Link>
                <audio ref={audioRef} src={currentSong.audio}></audio>
              </ControlContainer>
            </MusicCard>
          </BoxPlayer>
        </CardPLayContainer>
      </ContainerSong>
    </Container>
  );
};
