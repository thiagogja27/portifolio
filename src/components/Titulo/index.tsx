import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => {
  const children = Array.isArray(props.children)
    ? props.children.join('')
    : props.children

  return <TituloEstilo fontSize={props.fontSize}>{children}</TituloEstilo>
}

export default Titulo
