import { Link } from "react-router";
import styled from "styled-components";

export const PlayLink = styled(Link)`
  opacity: 0;
  position: absolute;
  left: 1rem;
`;

export const ContainerArtistCard = styled.div`
  width: 80%;
  margin-bottom:5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.5rem;
  border-radius: 5px;
  height: 3.5rem;
  border: 1px solid transparent;
  transition: background-color ease 200ms;
  gap: 0.938rem;
  position: relative;


  .id-music {
    color:#b3b3b3;
    opacity: 1;
  }

  span{
    color:#b3b3b3;
  }


  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);

    .id-music {
      opacity: 0;
    }

    ${PlayLink}{
      opacity:1;
    }
  }

  @media (max-width:480px) {
    width: 100%;
  }
`;

export const ImageAlbum = styled.div`
  display: flex;
  align-items: center;
  gap: .625rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
`;

export const ContainerAlbum = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;


