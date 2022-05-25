import { ReactComponent as AuthImage } from 'assets/images/Animal.svg';
import { Route, Routes } from 'react-router-dom';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Cuide do seu Pet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sunt
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Routes>
          <Route path="/login" element={<h1>Card de login</h1>} />
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
