import NTFS from '../../assets/ntfs.png';
import front_comandas from '../../assets/comanda_menu.png';
import back_comandas from '../../assets/back_comandas.png';
import get_job_linkedin from '../../assets/get_job_linkedin.png';
import fitness_controll from '../../assets/fitness_controll.png';
import netflix_screen from '../../assets/netflix_screen.png';

import './portfolio.css';

const Portfolio = () => {

  const frontendProjects = [
    {
      id: 1,
      title: 'Sistema de gerenciamento de comandas',
      img: front_comandas,
      description:
        'Aplicação React desenvolvida para gerenciar comandas e pedidos ' +
        'de bares e restaurantes de pequeno porte. Abaixo está a estrutura ' +
        'do projeto e uma descrição de cada componente e serviço.',
      technologies: 'React.js | Tailwind CSS | Axios | Socket.io Client',
      link: false,
      github: 'https://github.com/JackSSads/comanda-v2',
    },
    {
      id: 2,
      title: 'Fitness Controll',
      img: fitness_controll,
      description:
        'Aplicação React desenvolvida para controle de clientes em uma ' +
        'rede de academias. A aplicação permite que os clientes ' +
        'visualizem seus treinos, agendamentos, e pagamentos.',
      technologies: 'React.ts | Tailwind CSS | Axios',
      link: false,
      github: 'https://github.com/JackSSads/fitness-controll',
    },
    {
      id: 3,
      title: 'Netflix screen',
      img: netflix_screen,
      description:
        'Desenvolvido com intuido de estudo, esta aplicação ' +
        'apresenta a interface do Netflix, com a possibilidade de ' +
        'visualizar filmes, series, e programas. A aplicação ' +
        'utiliza a API do The Movie Database para obter os dados.',
      technologies: 'React.ts | Tailwind CSS | Axios',
      link: 'https://clone-netflix-inteface.vercel.app/',
      github: 'https://github.com/JackSSads/clone-netflix.git',
    },
  ];

  const backendProjects = [
    {
      id: 1,
      title: 'Backend sistema de gerenciamento de comandas',
      img: back_comandas,
      description:
        'Esta API fornece uma aplicação do lado do servidor ' +
        'usando Express.js com capacidades em tempo real usando ' +
        'Socket.IO. A API suporta CORS e possui várias rotas para ' +
        'lidar com diferentes funcionalidades, como autenticação de ' +
        'usuários, gerenciamento de produtos e processamento de pedidos.',
      technologies:
        'Node.js | Express.js | Mongoose | Socket.io | Logger.js ' +
        '| Bcrypt | CORS | Dotenv | JsonWebToken | Winston',
      link: false,
      github: 'https://github.com/JackSSads/get-job-linkedin',
    },
    {
      id: 2,
      title: 'Buscador de vagas de emprego',
      img: NTFS,
      description:
        'Este projeto utiliza Selenium para automatização, Flask para a criação de ' +
        'um servidor web, Openpyxl para manipulação de arquivos Excel, e Pandas para ' +
        'análise de dados. O objetivo é realizar scraping de vagas de emprego no LinkedIn ' +
        'e enviar as informações para um número de telefone via WhatsApp Web.',
      technologies: 'Python | Selenium | Flask | Openpyxl | Pandas',
      link: false,
      github: 'https://github.com/JackSSads/get-job-linkedin',
    },
    {
      id: 3,
      title: 'Automação de NFS',
      img: get_job_linkedin,
      description:
        'Aplicação que permite a automação de processos ' +
        'de envio de notas fiscais recebidas por e-mail.' +
        'Tem o intuito de facilitar o envio de notas fiscais ' +
        'para contabilidade, sem a necessidade de intervenção humana.',
      technologies: 'Python | Selenium | Pdfplumber',
      link: false,
      github: 'https://github.com/JackSSads/disparo_NTFS',
    },
  ];

  return (
    <div className='portfolio-section'>
      <section id="portfolio-frontend">
        <h5>Alguns dos meus projetos</h5>
        <h2>FRONT-END</h2>

        <div className="container portfolio__container">
          {frontendProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>

              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>

              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>

              <div className="portfolio__item-cta">
                {pro.github && (
                  <a href={pro.github} target="_blank" className="btn" rel="noreferrer"
                  >GitHub</a>
                )}

                {pro.link && (
                  <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer"
                  >Visit Website</a>
                )}
              </div>
            </article>

          ))}
        </div>
      </section>

      <section id="portfolio-backend">
        <h2>BACK-END + AUTOMAÇÕES</h2>

        <div className="container portfolio__container">
          {backendProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>

              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>

              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>

              <div className="portfolio__item-cta">
                {pro.github && (
                  <a href={pro.github} target="_blank" className="btn" rel="noreferrer"
                  >GitHub</a>
                )}

                {pro.link && (
                  <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer"
                  >Visit Website</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
