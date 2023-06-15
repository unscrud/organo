import './listaSuspensa.css'

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label className='label'>
        {props.label}
      </label>
      <select name="" id="">
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa