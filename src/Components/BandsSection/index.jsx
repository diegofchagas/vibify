import { CardsArtists } from "./CardsArtists";
import { ContainerArtists, ContainerList, Section } from "./style";

export const BandsSection = () => {
  return (
    <Section>
      <ContainerArtists>
        <a href="#" className="trending-music">
          Artistas populares
        </a>
        <a href="#" className="show-all">
          Mostrar tudo
        </a>
      </ContainerArtists>
      <ContainerList>
        <CardsArtists />
        <CardsArtists />
        <CardsArtists />
          <CardsArtists />
            <CardsArtists />
              <CardsArtists />
                <CardsArtists />
                  <CardsArtists />
      </ContainerList>
    </Section>
  );
};
