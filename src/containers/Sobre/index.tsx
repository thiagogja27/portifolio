import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import Carrossel from '../../components/Carrossel/CarrosselProjetos'

import { GithubSecao, ParagrafoCentralizado } from './styles'

const Sobre = () => (
  <section
    style={{
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    }}
  >
    <Carrossel />

    <Titulo fontSize={18}>Sobre</Titulo>
<ParagrafoCentralizado>
  <Paragrafo tipo="secundario">
    Sou desenvolvedor Full Stack com experiência em criação de sistemas web completos, do front-end ao back-end. Tenho paixão por resolver problemas com código limpo, eficiente e escalável. Estou sempre em busca de novos desafios que unam tecnologia e inovação.
  </Paragrafo>
</ParagrafoCentralizado>

    <GithubSecao style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <img
        src="https://github-readme-stats.vercel.app/api?username=thiagogja27&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="Estatísticas do GitHub de thiagogja27"
        style={{ maxWidth: '100%' }}
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=thiagogja27&layout=compact&langs_count=7&theme=dracula"
        alt="Linguagens mais usadas por thiagogja27 no GitHub"
        style={{ maxWidth: '100%' }}
      />
    </GithubSecao>
  </section>
)

export default Sobre
