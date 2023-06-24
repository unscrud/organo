import './rodape.css'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <div className="redes">
        <a href="https://github.com/unscrud/">
          <img src="/images/fb.png" alt="Facebook" />
        </a>
        <a href="https://github.com/unscrud/">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="https://github.com/unscrud/">
          <img src="/images/ig.png" alt="Instagram" />
        </a>
      </div>
      <img className="logo" src="/images/logo.png" alt="Rodapé do Organo" />
      <div className="creditos">Desenvolvido por UnsCrud.</div>
    </footer>
  )
}

export default Rodape