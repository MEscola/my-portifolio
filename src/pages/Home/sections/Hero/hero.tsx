import Avatar  from '../../../../assets/images/eu2.jpg'
import * as S from './style'
import Menu from '../Header/header'

const Hero = () => {

  return (
    <>
      
      <S.Container>
      <Menu/>
        <div className="main">
        <div className='photo'>
        <img src={Avatar}/>
        <h1>Márcia Escolastico</h1>
          <h2>Estudent and  Software Developer</h2>

          <section className='iconsw'>
            
          </section>
        </div>
          
          <div className='textHero'>
          <h1>Márcia Escolastico</h1>
          <h2>Estudent and software developer</h2>
          </div>
         
        </div>
        
      </S.Container>
      
      
    </>
  )
}

export default Hero
