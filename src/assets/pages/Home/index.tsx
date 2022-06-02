import ProductCard from 'components/ProductCard';
import CardLoader from '../Catalog/CardLoader';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="container-blog">
        <div className="container-box">
          <div className="container-modal um">
            <div className="container-modal-text">Curiosidades</div>
          </div>
          <div className="container-modal dois">
            <div className="container-modal-text">adoção</div>
          </div>
          <div className="container-modal tres">
            <div className="container-modal-text">Raças</div>
          </div>
        </div>
        <h1>Agende aqui o banho e tosa do seu Pet</h1>
        <div className="container-agenda">
          <div className="container-agenda-modal"></div>
          <div className="container-agenda-submit">
            <p>Nome Completo:</p>
            <input type="text" />

            <p>E-mail</p>

            <input type="text" />

            <p>CPF</p>

            <input type="text" />

            <p>Data</p>

            <input type="date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
