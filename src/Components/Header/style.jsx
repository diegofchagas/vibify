import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background-color:black;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: .800rem;

  a{
    font-weight:bold;
    font-size:1.5rem;
    color:white;
  }

  a:hover{
    text-decoration:underline;
  }
`;

