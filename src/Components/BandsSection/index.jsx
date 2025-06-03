import { artistArray } from "../../database/artists";
import { songsArray } from "../../database/songs";
import { SectionList } from "./SectionList";
import { Section } from "./style";


export const BandsSection = () => {
  return (
    <Section>
      <SectionList title="Músicas em alta" data={artistArray}/>
      <SectionList title="Artistas populares" data={songsArray}/>
    </Section>
  ); 
};
