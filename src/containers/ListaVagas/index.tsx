import Vaga from '../../components/Vaga'
import { Container } from './styles'

type VagaType = {
  id: string | number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

type Props = {
  vagas: VagaType[]
}

const ListaVagas = ({ vagas }: Props) => (
  <Container>
    {vagas.map((vaga) => (
      <Vaga
        key={vaga.id}
        titulo={vaga.titulo}
        localizacao={vaga.localizacao}
        nivel={vaga.nivel}
        modalidade={vaga.modalidade}
        salarioMin={vaga.salarioMin}
        salarioMax={vaga.salarioMax}
        requisitos={vaga.requisitos}
      />
    ))}
  </Container>
)

export default ListaVagas
