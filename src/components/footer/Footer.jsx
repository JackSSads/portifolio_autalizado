import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">Jackson Souza</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio-frontend">Portfólio</a></li>
        <li><a href="#testmonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jackson-souza-ads/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/JackSSads/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
