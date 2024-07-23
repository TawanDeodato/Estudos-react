import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons-fa";
import styles from './Footer.modules.css'

function Footer() {
  return (
    <footer className={styles.social_list} >
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>Nosso rodapé</p>
    </footer>
  );
}

export default Footer;
