import { ContainerArtists, ContainerList, SectionDiscography } from "./style";
import { CardsArtists } from "../CardsArtists";

export const SectionList = ({ title,data }) => {
  if(!data || data.length === 0 ){
    return <p>nada encontrado</p>;
  }

  return (
    <SectionDiscography>
      <ContainerArtists>
        <a href="#" className="trending-music">
          {title}
        </a>
        <a href="#" className="show-all">
          Mostrar tudo
        </a>
      </ContainerArtists>
      <ContainerList>
        {data.map(( artist ) => (
          <CardsArtists key={artist.id} {...artist} />
        ))}
      </ContainerList>
    </SectionDiscography>
  );
};
