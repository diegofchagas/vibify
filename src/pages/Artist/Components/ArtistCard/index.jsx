import { PlayIcon } from "@phosphor-icons/react";
import { ContainerAlbum, ContainerArtistCard,ImageAlbum,PlayLink} from "./style";
import { Link } from "react-router";

export const ArtistCard = ({id,image,name,duration,artist,index}) => {
  return (
    <ContainerArtistCard>
      <ContainerAlbum>
        <span className="id-music">{index + 1}</span>
        <PlayLink to={`/song/${id}`}>
          <PlayIcon size={20} />
        </PlayLink>
        <ImageAlbum>
          <img
            src={image}
            alt={`imagem do ${artist}`}
          />
          <Link to="/artist/1">{name}</Link>
        </ImageAlbum>
      </ContainerAlbum>
      <span>{duration}</span>
    </ContainerArtistCard>
  );
};
