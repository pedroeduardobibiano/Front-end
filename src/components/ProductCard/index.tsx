import './styles.css';
import ProductImg from 'assets/images/product.png.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do Producto:</h6>
        <ProductPrice/>
      </div>
    </div>
  );
};

export default ProductCard;
