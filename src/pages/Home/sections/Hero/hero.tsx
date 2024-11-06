import Avatar from '../../../../assets/images/eu2.jpg'
import * as S from './style'
import Menu from '../Header/header'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const socialNetwork = [
  { name: 'linkedin', icon: <FaLinkedinIn />, url: "https://www.linkedin.com/" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/" }
]

const Hero = () => {

  return (
    <>

      <S.Container>
      
        <aside className="main">
          <div><Menu />
          <div className='photo'>
          
            <img src={Avatar} />
            <h1>Márcia Escolastico</h1>
            <p className='title'>Estudent & Software Developer</p>
            <p className='welcome-text'>Welcome to my Portifolio</p>
            <section className='icons'>
              {socialNetwork.map((icon) => (
                <a href={icon.url}
                  className="icon-btn"
                  id={icon.name}
                  target="_blank"
                  rel="noopener noreferrer">
                  {icon.icon}
                </a>
                //{icon.icon} - RENDERIZA OS ICONS
                //rel="noopener noreferrer": Usado por motivos de segurança ao abrir links em uma nova aba, evita possíveis ataques de tabbing (uma vulnerabilidade de segurança).
              ))}
            </section>
            
          </div>
          </div>
        </aside>
       
      </S.Container>


    </>
  )
}

export default Hero
