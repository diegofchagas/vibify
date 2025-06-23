import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: ${({progressWidt})=> progressWidt};
`;

export const ContainerSong = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .container-image {
    box-shadow: 0 0 25px 10px hsl(141deg 75% 2.5% / 25%);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      font-weight: 700;
      font-size: 0.875rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: 800;
    }

    a {
      cursor: pointer;
      font-weight: 700;
    }
  }

  svg {
    color: #1ed760;
    transition: transform 0.2s;
  }

  svg:hover {
    transform: scale(1.1);
    color: #3be477;
  }
`;

export const CardPLayContainer = styled.div`
  width:100%;
  max-width:28rem;
  background-color: #181818;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    max-width: 32rem; 
  }

  @media (min-width: 1024px) {
    max-width: 36rem;
  }
`;

export const BoxPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  gap: 1.5rem;

  .album-art {
    width: 10rem;
    height: 10rem;
    border-radius:8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-left: 1.5rem;
    margin-right: 1.5rem; 
    margin-top: 0; 
    margin-bottom: 0; 

    .album-art {
    width: 12rem; 
    height: 12rem;
  }
  }
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    background-color: #535353;
    border-radius: 4px;
    height: 6px;
    cursor: pointer;
    overflow:hidden;
  

`;

export const ProgressBar = styled.div`
    background-color: #1db954;
    border-radius: 4px;
    height: 100%;
    width: ${({$progressWidth})=> $progressWidth};
`;

export const MusicCard = styled.div`
  flex: 1 1 0%;
  text-align: center;

  .music{
  display:inline-block;
  color: #9ca3af; 
  font-size: .800rem;
  margin-bottom: .45rem;
  line-height: 1rem;
  }

  h3{
    font-size:1.875rem;
    line-height:2.25rem;
    font-weight:700;
    margin-bottom: .45rem;
  }

  .artist{
    display:inline-block;
    font-size: 0.875rem;
    color: #d1d5db;
    margin-bottom: .800rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .time {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #9ca3af;
    margin-top: 0.25rem;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
