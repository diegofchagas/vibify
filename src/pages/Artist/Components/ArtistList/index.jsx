import { Link } from "react-router";
import { ArtistCard } from "../ArtistCard";
import { ListArtist } from "./style";
import { useState } from "react";

export const ArtistList = ({ dataSongs }) => {
  const [items , setItems] = useState(5)

  return (
    <ListArtist>
      {dataSongs
        .filter((item, index) => index <= items)
        .map((item, index) => (
          <ArtistCard key={index} index={index} {...item} />
        ))}
      <Link className="ver" onClick={()=> {setItems(items + 5)}}>Ver mais</Link>
    </ListArtist>
  );
};
