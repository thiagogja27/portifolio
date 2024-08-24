import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocatema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Thiago Nascimento</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        thiagogja27
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front-end
      </Descricao>
      <BotaoTema onClick={props.trocatema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
