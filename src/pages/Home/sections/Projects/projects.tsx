import * as S from '../Projects/style-projects';
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  portifolio, 
  convite, 
} from '../../../../assets/images/index.ts';
import { RiGlobalLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    // Seleciona o elemento <h1> após o componente ser montado
    const heading = document.querySelector(".title-proj");

    if (heading) {
        gsap.fromTo(
          heading,
          { marginLeft: "100%", width: "300%" }, // Valores iniciais
          { 
            marginLeft: "0%", 
            width: "100%", 
            duration: 3, // Duração da animação
            scrollTrigger: {
              trigger: heading, // Define o gatilho
              start: "top 90%", // A animação começa quando 80% do h1 estiver visível
              end: "top 50%",   // Quando o topo do h1 atingir 50% da tela
              toggleActions: "play none none none", // Quando visível, a animação é disparada
              //markers: true // Habilita os marcadores para depuração
        }
        }
      );
    }
  }, []); // O efeito será executado uma vez, após a montagem do componente

  return (
    <>
      <S.Container>
        <div className='proj'>
          <h1 className='title-proj'>PROJETOS</h1> 
          <div className='grid'>
            <div className='grid-img'>
                <img src={portifolio} />
                <h2>Portifólio</h2>
                <div>
                <button> React </button> 
                <button> Vite </button>
                <section className='icons'>
                <RiGlobalLine />
                <FaGithub />
                </section>
                
                </div>
            </div>
            <div className='grid-img2'>
            <img className='img2' src={convite} alt="" />
            <br />
            <h2>Convite de Casamento</h2>
            
            <div>
                <button> HTML </button> 
                <button> Bootstrap </button> 
                </div>
            </div>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default Projects;
