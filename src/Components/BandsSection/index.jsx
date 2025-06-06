import { artistArray } from "../../database/artists";
import { songsArray } from "../../database/songs";
import { SectionList } from "./SectionList";
import { Section } from "./style";

export const BandsSection = ({showTrendingSongs = true, showPopularArtists = true}) => {
  return (
    <Section>
      {showTrendingSongs && (
        <SectionList
          title="Músicas em alta"
          data={songsArray}
          linktoAll={"/allSongs"}
          cardType="song"
        />
      )}
      {showPopularArtists && (
        <SectionList
          title="Artistas populares"
          data={artistArray}
          linktoAll={"/allArtists"}
          cardType="artist"
        />
      )}
    </Section>
  );
};
