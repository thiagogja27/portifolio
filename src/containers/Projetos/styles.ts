import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;
  list-style: none; /* Remove os marcadores padrão da lista */
  padding: 0; /* Remove o padding padrão */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0; /* Corrige o nome da propriedade para column-gap */
    row-gap: 1px; /* Corrige o valor para row-gap */
  }
`

export const Item = styled.li`
  border-radius: 8px; /* Borda arredondada */
  padding: 20px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
