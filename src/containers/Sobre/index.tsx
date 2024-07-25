import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem iPsum dolor, sit amet consectetur adipisicing elit. Dignissimos
      possimus tempore suscipit voluptatum eum, incidunt sit iure nisi
      distinctio commodi iste, soluta facilis dolores, quidem natus recusandae
      dicta eveniet excepturi?
    </Paragrafo>

    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=R4fael-Andrade&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=false&disable_animations=false&theme=vue-dark&locale=en&hide_border=false&order=1"
        alt="stats graph"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=R4fael-Andrade&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=vue-dark&hide_border=false&order=2"
        alt="languages graph"
      />
    </GithubSecao>
  </section>
)

export default Sobre
