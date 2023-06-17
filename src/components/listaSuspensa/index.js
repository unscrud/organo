import './listaSuspensa.css'

const ListaSuspensa = (props) => {

  const aoSelecionado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className='lista-suspensa'>
      <label className='label'>
        {props.label}
      </label>
      <select value={props.valor} onChange={aoSelecionado}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa