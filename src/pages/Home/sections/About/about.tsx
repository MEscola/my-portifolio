import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as S from './style-about';

const About: React.FC = () => {
  const el = useRef<HTMLDivElement | null>(null);
  const allTitles = gsap.utils.toArray('.row') as HTMLElement[];
  let offsets: number[] = [];
  let totalOffset = 0;

  // Função para calcular os offsets de cada título
  function calculateOffsets() {
    totalOffset = 0;
    offsets = allTitles.map((title) => {
      const h2 = title.querySelector("h2") as HTMLElement;
      const prev = totalOffset;
      totalOffset += h2 ? h2.offsetHeight : 0;
      return prev;
    });
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);

    allTitles.forEach((title, i) => {
      const heading = title.querySelector(".left") as HTMLElement;
      if (heading) {
        ScrollTrigger.create({
          trigger: heading,
          endTrigger: ".row-wrap",
          markers: true,
          start: () => `top ${offsets[i]}`,
          end: () => `bottom ${totalOffset}`,
          pin: heading,
          pinSpacing: false,
        });
      }
    });

    return () => {
      window.removeEventListener("resize", calculateOffsets);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <S.Container>
        <div className="row-wrap" ref={el}>
          <div className="row">
            <div className="left" >
              <h2>Sobre Mim</h2>
              <p className='about'>
                Sou estudante de Análise e Desenvolvimento de Sistemas,
                apaixonada por tecnologia e pelo desenvolvimento de software.
                Estou constantemente aprimorando minhas habilidades e explorando
                novas ferramentas, com o desejo de criar aplicações que tenham
                um impacto positivo e simplifiquem a vida das pessoas. Cada
                desafio é uma oportunidade de crescimento, e meu objetivo é
                evoluir continuamente como desenvolvedora, contribuindo com
                soluções criativas e inovadoras.
                <br />
              </p>
              <a href="https://www.linkedin.com/" className="btn">
                Visitar Linkedin
              </a>
            </div>
            <div className="right">
            <h2>Certificações</h2>
            <div className='right-text'>
                <a
                  href="https://www.credly.com/badges/f8c40744-b847-4959-a7fb-7c562d4658ae/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>AWS Certified Cloud Practitioner</p>
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
                <br />
                <a href="#" className="btn">
                  Ver mais
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="left" id="cert">
            </div>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default About;
