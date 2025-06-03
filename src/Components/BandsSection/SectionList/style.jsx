import styled from 'styled-components';


export const SectionDiscography = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerArtists = styled.div`
  display: flex;
  justify-content: space-between;

  .trending-music {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .show-all {
    font-size: 0.875rem;
    color: #b3b3b3;
    font-weight: 700;
  }

  .show-all:hover {
    text-decoration: underline;
  }
`;

export const ContainerList = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
`;
