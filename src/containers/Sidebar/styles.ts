import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`

export const BotaoTema = styled.button`
  color: ${(props) => props.theme.corDeFundo};
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;

  @media (max-width: 768px) {
    heigth: auto;
    width: 100%;
    margin-bottom: 20px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-botttom: 40px;
    text-align: center;
  }
`
