import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import Botao from '../botao';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css';

const Formulario = () => {
  const times = [
    'Programação', 'Front-end', 'Data Science',
    'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Dados que serão submetidos no form: ', nome, cargo, imagem, time)
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState(times[0])

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
          itens={times}
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