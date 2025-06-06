import { ContainerArtists, ContainerList, SectionDiscography } from "./style";
import { CardsArtists } from "../CardsArtists";
import { Link, useLocation } from "react-router";

export const SectionList = ({ title, data, linktoAll, cardType }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const limitedData = isHome ? data.slice(0, 20) : data;
  
  if (!data) {
    return <p>Carregando...</p>;
  }

  if (!data || data.length === 0) {
    return <p>nada encontrado</p>;
  }

  return (
    <SectionDiscography>
      {/* criar nova pagina de musicas em alta para ajustar esse link do titulo */}
      <ContainerArtists>
        <a href="#" className="trending-music">
          {title}
        </a>
        {isHome && (
          <Link to={linktoAll} className="show-all">
            Mostrar tudo
          </Link>
        )}
      </ContainerArtists>
      <ContainerList>
        {limitedData .map((item) => (
          <CardsArtists key={item.id} {...item} cardType={cardType} />
        ))}
      </ContainerList>
    </SectionDiscography>
  );
};
