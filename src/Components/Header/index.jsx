
import { Link } from "react-router";
import logo from "../../assets/spotify-logo.png";
import {ContainerHeader } from "./style";

export const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo} alt="" />
      <Link to="/">Vibify</Link>
    </ContainerHeader>
  );
};
