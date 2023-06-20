import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container container-footer">
        <p class="container-footer-p">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <div class="icons-wrapper">
          <a class="footer-a" href="https://www.instagram.com/?hl=pl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a class="footer-a" href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
