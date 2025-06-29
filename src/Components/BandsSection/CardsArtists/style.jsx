import { Link } from "react-router";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  margin-top: 1rem;
  background-color: transparent;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  gap: 0.625rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  transition-delay: 0.1s;

  svg {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    transition-delay: 0.1s;
    position: absolute;
    bottom: 5px;
    right: 3px;
    color: #1ed760;
  }

  &:hover {
    background-color: #202020;

    svg {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


export const CardImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    overflow: hidden;
    border-radius: 10px;
     position: relative;

      img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
  }
`;


export const TextBox = styled.div`
    display:flex;
    flex-direction:column;
    gap:4px;

    strong a {
      font-size: 1rem;
      font-weight: 400;
      color: #fff;
    }

    span {
      color: #b3b3b3;
      font-size: 0.875rem;
      cursor: pointer;
    }
`;