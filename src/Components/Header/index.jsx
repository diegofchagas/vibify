import { Link } from "react-router";
import logo from "../../assets/spotify-logo.png";
import { ContainerHeader } from "./style";

export const Header = () => {
  return (
    <ContainerHeader>
      <Link to="/">
        <img src={logo} alt="logo empresa" />
      </Link>
      <Link to="/">Vibify</Link>
    </ContainerHeader>
  );
};
