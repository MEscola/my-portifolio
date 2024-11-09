import * as S from '../Technologies/style-tech'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaPython, FaAws, } from 'react-icons/fa'

const icons = [
    { name: 'html', icon: <FaHtml5 /> },
    { name: 'css', icon: <FaCss3 /> },
    { name: 'javascript', icon: <FaJs /> },
    { name: 'react', icon: <FaReact /> },
    { name: 'nodejs', icon: <FaNodeJs /> },
    { name: 'git', icon: <FaGit /> },
    { name: 'python', icon: <FaPython /> },
    //{ name: 'mysql', icon: <FaMysql /> },
    { name: 'aws', icon: <FaAws /> },
]

const Technologies = () => {
    return (
        <>
        <S.Container>
            <div className='tech'>
            <h1>TECNOLOGIAS</h1>
            <p>Tecnologias em que possuo conhecimento, profissional ou acadêmico.</p>
            <div className='grid'>
                
                {icons.map((icon) => (
                    <div key={icon.name} className='icon'>{icon.icon}</div>
                ))}
            </div>
            </div>
            
            
        </S.Container>
        </>
    )
}

export default Technologies