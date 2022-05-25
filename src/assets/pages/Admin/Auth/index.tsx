import { ReactComponent as AuthImage } from 'assets/images/Animal.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Criar uma conta é rápido, fácil e gratuito!</h1>
        <p>
          Com a sua conta da Pegasus você tem acesso a Ofertas exclusivas, e
          pode criar e gerenciar a sua Assinatura.
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/singup" element={<h1>Card de sin</h1>} />
        </Routes>

        <Routes>
          <Route path="/recover" element={<h1>Card de recover</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
