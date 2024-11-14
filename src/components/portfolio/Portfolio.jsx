import IMG15 from '../../assets/Jack_image.jpg'

import './portfolio.css';

const Portfolio = () => {

  const frontendProjects = [
    {
      id: 1,
      title: 'Sistema de gerenciamento de comandas',
      img: IMG15,
      description:
        'Aplicação React desenvolvida para gerenciar comandas e pedidos ' +
        'de bares e restaurantes de pequeno porte. Abaixo está a estrutura ' +
        'do projeto e uma descrição de cada componente e serviço.',
      technologies: 'React | Tailwind CSS | Axios | Socket.io Client',
      link: false,
      github: 'https://github.com/JackSSads/comanda-v2',
    },
    {
      id: 2,
      title: 'Fitness Controll',
      img: IMG15,
      description:
        'Aplicação React desenvolvida para controle de clientes em uma ' +
        'rede de academias. A aplicação permite que os clientes ' +
        'visualizem seus treinos, agendamentos, e pagamentos.',
      technologies: 'React.ts | Tailwind CSS | Axios',
      link: false,
      github: 'https://github.com/JackSSads/fitness-controll',
    },
  ];

  const backendProjects = [
    {
      id: 1,
      title: 'Backend sistema de gerenciamento de comandas',
      img: IMG15,
      description:
        'Esta API fornece uma aplicação do lado do servidor ' +
        'usando Express.js com capacidades em tempo real usando ' +
        'Socket.IO. A API suporta CORS e possui várias rotas para ' +
        'lidar com diferentes funcionalidades, como autenticação de ' +
        'usuários, gerenciamento de produtos e processamento de pedidos.',
      technologies:
        'Node.js | Express | Mongoose | Socket.io | Logger ' +
        '| Bcrypt | CORS | Dotenv | JsonWebToken | Winston',
      link: false,
      github: 'https://github.com/JackSSads/get-job-linkedin',
    },
    {
      id: 2,
      title: 'Buscador de vagas de emprego',
      img: IMG15,
      description:
        'Este projeto utiliza Selenium para automatização, Flask para a criação de ' +
        'um servidor web, Openpyxl para manipulação de arquivos Excel, e Pandas para ' +
        'análise de dados. O objetivo é realizar scraping de vagas de emprego no LinkedIn ' +
        'e enviar as informações para um número de telefone via WhatsApp Web.',
      technologies: 'Python | Selenium | Flask | Openpyxl | Pandas',
      link: false,
      github: 'https://github.com/JackSSads/get-job-linkedin',
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
