import { Link, useParams } from "react-router";
import { BoxPlayer, CardPLayContainer, Container, ContainerSong, ControlContainer, MusicCard } from "./style";
import { PlayCircleIcon, SkipBackIcon } from "@phosphor-icons/react";
import Tippy from "@tippyjs/react";
import { SkipForwardIcon } from "@phosphor-icons/react/dist/ssr";
import { songsArray } from "../../database/songs";
import { artistArray } from "../../database/artists";

export const Song = () => {

  const { id } = useParams();
  const songId = Number(id);


  //currentSong encontra a música atual com base no id da URL.
  const currentSong = songsArray.find((item) => item.id === Number(id));
  //artistSongs pega todas as músicas do mesmo artista.
  const artistObj = artistArray.find((item) => item.name === currentSong.artist);
  // Todas as músicas do artista, exceto a atual
  const artistSongs = songsArray.filter((item) => item.artist === currentSong.artist && item.id !== songId);
  // Gera música aleatória diferente da atual
  const randomIndex = Math.floor(Math.random() * artistSongs.length);
  //Armazena na variável musicaId o ID de uma música aleatória do mesmo artista
  let musicaId = artistSongs[randomIndex].id;
  
  
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
              <div className="progress-bar-container w-full">
                <div className="progress-bar"></div>
              </div>
              <div className="time">
                <span>{`0:00`}</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>
            <ControlContainer>
              <Link to={`/song/${musicaId}`}>
                <SkipBackIcon
                  size={32}
                />
              </Link>
              <Tippy
                content="Play"
                delay={[1000, 0]}
                placement="top"
                theme="custom-play"
              >
                <Link to={`/song/${id}`}>
                  <PlayCircleIcon size={56} weight="fill" />
                </Link>
              </Tippy>
              <Link  to={`/song/${musicaId}`}>
              <SkipForwardIcon size={32} />
              </Link>
            </ControlContainer>
          </MusicCard>
        </BoxPlayer>
      </CardPLayContainer>
    </ContainerSong>
    </Container>
  );
};
