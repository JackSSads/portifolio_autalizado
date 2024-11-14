import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jackson-souza-ads/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/JackSSads/" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  );
};

export default HeaderSocials;