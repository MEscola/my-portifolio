import * as S from "./style-about";

const About = () => {
  return (
    <>
      <S.Container>
        <div className="row-wrap">
          <div className="row">
            <div className="left">
              <h2>Sobre Mim</h2>
            </div>
            <div className="right">
              <p>
                Sou estudante de Análise e Desenvolvimento de Sistemas,
                apaixonada por tecnologia e pelo desenvolvimento de software.
                Estou constantemente aprimorando minhas habilidades e explorando
                novas ferramentas, com o desejo de criar aplicações que tenham
                um impacto positivo e simplifiquem a vida das pessoas. Cada
                desafio é uma oportunidade de crescimento, e meu objetivo é
                evoluir continuamente como desenvolvedora, contribuindo com
                soluções criativas e inovadoras.
              </p>
              <a href="https://www.linkedin.com/" className="btn">
                Visitar Linkedin
              </a>
              <br />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <h2>Certificações</h2>
            </div>

            <div className="right">
              <div>
                <a
                  href="https://www.credly.com/badges/f8c40744-b847-4959-a7fb-7c562d4658ae/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>AWS Certified Cloud Practitioner </p>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <p>Cloud Systems Administration</p>
                </a>

                <a
                  href="https://skillsoft.digitalbadges.skillsoft.com/7875ca67-9d38-441eb8269f2b43717c10#gs.h24xwm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>API Security</p>
                </a>

                <a href="#" className="btn">
                  Ver mais
                </a>
              </div>
            </div>

            {/*//TODO <img src={} alt="NicolyTech" />*/}
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default About;
