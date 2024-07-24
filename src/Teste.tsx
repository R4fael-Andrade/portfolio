import styled from 'styled-components'
type BotaoProps = {
  principal: boolean
  fontSize?: string
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
  border: none;
  color: #fff;
  padding: 8px;
  display: block;
`

const BotaoPerigo = styled(Botao)`
  background-color: #660000;
  color: #000;

  span {
    text-decoration: line-through;
    color: #fff;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="20px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
