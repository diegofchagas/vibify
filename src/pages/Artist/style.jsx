import styled from "styled-components";

export const ContainerArtist = styled.div`
  border-radius: 10px;
  margin: 0 10px 10px;
  overflow: hidden;
`;

export const BoxImage = styled.div`
  --_shade: hsl(0deg 5% 10% / 25%);

  display: flex;
  align-items: end;
  padding: 25px;
  height: 40svh;
  background-size: cover;
  background-position-y: 40%;
  background-image: linear-gradient(to bottom, var(--_shade), var(--_shade)),
    url(${({ $image }) => $image});

  span {
    font-size: 4.5rem;
    white-space: nowrap;
    font-weight: 800;
  }

  @media (max-width: 1440px) {
    padding: 1rem;
    span {
      font-size: 7.5vw;
      white-space: nowrap;
    }
  }

  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ContentArtit = styled.div`
  padding: 2.4rem 1.5rem;
  background-image: linear-gradient(to bottom, #202020, #090909);
  display: flex;
  flex-direction: column;
 

  svg {
    color: #1ed760;
    transition: transform .2s;
  }

  svg:hover{
    transform:scale(1.1);
    color:#3be477;
  }

    @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap:1rem;
  }

`;
