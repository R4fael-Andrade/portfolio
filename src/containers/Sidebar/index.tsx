import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SiderbarContainer } from './styles'

type Props = {
  alteraTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SiderbarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rafael Sousa</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        R4fael-Andrade
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema onClick={props.alteraTema}>Trocar tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar
