import CampoTexto from '../CampoTexto';
import Botao from '../botao';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css';

const Formulario = () => {
  const times = [
    'Programação', 'Front-end', 'Data Science',
    'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
  ]

  return (
    <section className='formulario'>
      <form action="">
        <h2>Preencha para criar o card do colaborador</h2>
        <CampoTexto label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
        <ListaSuspensa label='Time' itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario