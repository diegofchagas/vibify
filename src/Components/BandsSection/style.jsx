import styled from "styled-components";

export const Section = styled.section`
  /* background:#202020; */
  background-image: linear-gradient(to bottom, #202020, #090909);
  padding: 1.25rem;
  margin: 0 0.625rem 0.625rem;
  border-radius: 15px;
  height: 50rem;
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
