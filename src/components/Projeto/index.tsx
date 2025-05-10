// components/Projeto/index.tsx

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: ProjetoProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
