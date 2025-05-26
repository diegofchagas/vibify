
import logo from "../../assets/spotify-logo.png";
import { ConateinerHeader } from "./style";

export const Header = () => {
  return (
    <ConateinerHeader>
      <img src={logo} alt="" />
      <a href="#">Vibify</a>
    </ConateinerHeader>
  );
};
