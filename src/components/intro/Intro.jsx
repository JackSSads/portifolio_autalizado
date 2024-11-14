import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import my_photo from '../../assets/Jack_image.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={my_photo} alt="me" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>+3 anos</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>+10 Projetos completos</small>
            </article>
          </div>

          <p>Me chamo Jackson, formado em Análise e desenvolvimento de sistemas com mais de 3 anos de experiência no ramo de desenvolvimento de software. Segue abaixo um pouco das minhas experiências.</p>
          
          <ul>
            <li>Experiência com desenvolvimento backend utilizando Python (Flask, FastApi e Django)</li>
            <li>Experiência com desenvolvimento de sistemas de contabilidade.</li>
            <li>Experiência desenvolvendo automações de processos RPA com Python (Selenium e Playwright)</li>
            <li>Experiência com container Docker.</li>
            <li>Experiência com metodologias ágeis (SCRUM).</li>
            <li>Experiência com implementação de design partners.</li>
          </ul>
          
          <a href="#contact" className="btn btn-primary">Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default Intro