import CampoTexto from '../CampoTexto';
import './formulario.css';

const Formulario = () => {
  return (
    <section className='formulario'>
      <form action="">
        <h2>Preencha para criar o card do colaborador</h2>
        <CampoTexto label='Nome' placeholder='Digite o seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
        <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
      </form>
    </section>
  )
}

export default Formulario