import Colaborador from '../colaborador'
import './Time.css'

const Time = (props) => {
  return (
    <section className='time' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      {
        props.colaboradores.map((colaborador, index) => <Colaborador
          nome={colaborador.nome}
          key={colaborador.nome + index}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
          time={colaborador.time}
        />)
      }
    </section>
  )
}

export default Time 