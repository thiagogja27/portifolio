// containers/Projetos/index.js
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista, Item } from './styles'

const listaDeProjetos = [
  {
    titulo: 'Frota de caminhões',
    descricao: 'Logística para frota de caminhões',
    link: 'https://github.com/thiagogja27/frota_caminhoes'
  },
  {
    titulo: 'Operacional para Terminais',
    descricao: 'Controle de produto, modais e estatisticas',
    link: 'https://github.com/thiagogja27/tegteag'
  },
  {
    titulo: 'Conferente de Notas',
    descricao: 'Dashboard para conferência de notas',
    link: 'https://github.com/thiagogja27/ConferenteFiscalBalanca'
  },
{
    titulo: 'Automação de Processos ',
    descricao: 'automatizar entrada de dados e exportação relatórios',
    link: 'https://github.com/thiagogja27/automa-otegteag'
  },
  {
    titulo: 'Todos Projetos GitHub',
    descricao: 'Em constante evolução',
    link: 'https://github.com/thiagogja27?tab=repositories'
  },
]

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      {listaDeProjetos.map((projeto, index) => (
        <Item key={index}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        </Item>
      ))}
    </Lista>
  </section>
)

export default Projetos
