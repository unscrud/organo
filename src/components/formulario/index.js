import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import Botao from '../botao';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css';

const Formulario = (props) => {

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState(props.times[0])

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          obrigatorio={true}
          label='Nome'
          aoAlterado={valor => setNome(valor)}
          placeholder='Digite o seu nome'
        />
        <CampoTexto
          valor={cargo}
          obrigatorio={true}
          label='Cargo'
          aoAlterado={valor => setCargo(valor)}
          placeholder='Digite o seu cargo'
        />
        <CampoTexto
          valor={imagem}
          obrigatorio={false}
          label='Imagem'
          aoAlterado={valor => setImagem(valor)}
          placeholder='Digite o endereço da imagem'
        />
        <ListaSuspensa
          valor={time}
          label='Time'
          itens={props.times}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario