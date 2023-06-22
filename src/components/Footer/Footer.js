import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <p className="container-footer-p">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <div className="icons-wrapper">
          <a className="footer-a" href="https://www.instagram.com/?hl=pl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="footer-a" href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
