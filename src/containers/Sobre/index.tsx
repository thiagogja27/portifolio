import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem dolor sit amet consectetur adipisicing elit. Aliquid at, est
      quisquam cupiditate iste voluptatum. Blanditiis perspiciatis quisquam
      dignissimos minus laborum, accusamus vel reprehenderit enim dolor minima
      praesentium ducimus ab.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=thiagogja27&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thiagogja27&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
