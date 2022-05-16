import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'assets/pages/Home';
import { Navbar } from 'components/Navbar';
import Catalog from 'assets/pages/Catalog';
import Admin from 'assets/pages/Admin';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Catalog/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  </Router>
);

export default AppRoutes;
