import { PlayCircleIcon } from "@phosphor-icons/react";
import { BoxImage, ContainerArtist, ContentArtit } from "./style";
import { Link, useParams } from "react-router";
import { ArtistList } from "./Components/ArtistList";
import { artistArray,songsArray } from "../../api/api.js";


export const Artist = () => {

  const {id} = useParams()

const artistObj = artistArray.filter(value => value._id === id)[0];
const songObj = songsArray.filter(value => value.artist === artistObj.name)

const randomIndex = Math.floor(Math.random() * (songObj.length - 1));
const randomIdFromArtist = songObj[randomIndex]._id;

  return (
    <ContainerArtist>
      <BoxImage $image={artistObj.banner}>
        <span>{artistObj.name}</span>
      </BoxImage>
      <ContentArtit>  
        <Link to={`/song/${randomIdFromArtist}`}>
          <PlayCircleIcon size={56} weight="fill" />
        </Link>
        <h2>Populares</h2>
        <ArtistList dataSongs={songObj}/>
      </ContentArtit>
    </ContainerArtist>
  );
};
