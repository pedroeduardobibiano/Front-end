import { ReactComponent as Imagem } from 'assets/images/Desenho.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base -card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
          </div>
          <Link to="/products">
            <ButtonIcon />
          </Link>
        </div>
        <div className="home-image-container">
          <Imagem />
        </div>
      </div>
    </div>
  );
};

export default Home;
