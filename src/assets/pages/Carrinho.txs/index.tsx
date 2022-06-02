import './styles.css';

const Carrinho = () => {
  return (
    <div className="Container">
      <p>Carrinho de compra</p>
      <div className="modal-produto">
        <div className="Descricao">
          <h4>Descrição</h4>
        </div>
        <div className="Quantidade">
          <h4>Quantidade</h4>
        </div>
        <div className="Preco">
          <h4>preço</h4>
        </div>
        <div className="Subtotal">
          <h4>Subtotal</h4>
        </div>
      </div>

      <div className="modal-produto-result ">
        <div className="geral-container">
          <div className="foto"></div>
          <div className="Text">
            <div className="Titulo">
              <h5>Macaco Chalesco Brinquedo Para Cães Pelúcia Marrom</h5>
            </div>
            <div className="subtitulo">
              <h6>
                Descrição do produto Ideal para os pets de todos os portes e
                idades
              </h6>{' '}
            </div>
          </div>
        </div>

        <div className="container-prod">
          <div className="quantidade-prod">
            <button>-</button> 1 <button>+</button></div>
          <div className="Preco-prod">40,00</div>
          <div className="Subtotal-prod">40,00</div>
        </div>
      </div>
      <div className="status">
        <div className="status-prod">Status do produto:</div>
        <div className="result-prod-status">A caminho</div>
      </div>

      <div className="Soma">
        <div className="Subtotal-Soma">
          <div className="Subtotal-Soma-titulo">Subtotal</div>
          <div className="Subtotal-Soma-result">40,00</div>
        </div>
        <div className="Total-Soma">
          <div className="Total-Soma-titulo">Total</div>
          <div className="Total-Soma-result">40,00</div>
        </div>

        
        <div className='Finalizar-Compra'>
        <div className='Pagar'>
            <div className='inputs-de-pagamento'>
              <h6>Cartão</h6>
              <input type="text" name="" id="" placeholder='Digite o numero do cartão'/>
              <h6>CPF</h6>
              <input type="text" name="" id="" placeholder='Digite seu CPF'/>
              <h6>Validade</h6>
              <input type="text" name="" id="" placeholder='Digite a validade do cartão'/>
              <h6>cvc</h6>
              <input type="text" name="" id="" placeholder='Digite o cvc do cartão'/>
            </div>
            <div className='botao'>
            <button>Finalizar compra</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
