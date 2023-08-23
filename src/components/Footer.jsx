import { Link } from "react-router-dom";
import "./Footer.css";
import vkontakte from "../icons/vkontakte.png";
import twitter from "../icons/twitter.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper-icon">
          <img
            className="footer-icon"
            src={twitter}
          />
          <img
            className="footer-icon"
            src={instagram}
          />
          <img
            className="footer-icon"
            src={facebook}
          />
          <img
            className="footer-icon"
            src={vkontakte}
          />
        </div>
        <ul className="footer-wrapper-link">
          <li>
            <Link>Для поставщиков</Link>
          </li>
          <li>
            <Link>О производстве</Link>
          </li>
          <li>
            <Link>Наши документы</Link>
          </li>
          <li>
            <Link>Экологические стандарты</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
