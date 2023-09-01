// Para utilizar o componente crie o import na página que deseja
// coloque o nome da pessoa entre <Footer>NomePessoa</Footer>
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>ProfCastello</Footer>

import { Children } from "react";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import SocialLinks from "../socialLinks/socialLinks";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart"/> por <a href={link}>{children}</a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com"} />
        <SocialLinks icon={"logo-instagram"} href={"https://instagram.com/cr_cr_zn?"} />
        <SocialLinks icon={"logo-twitter"} href={"https://twitter.com/cainho_cr?"} />
        <SocialLinks icon={"logo-linkedin"} href={"https://www.linkedin.com/feed/"} />
        <SocialLinks icon={"logo-whatsapp"} href={"https://watsapp.com"} />
    </footer>
  );
};
export default Footer;
