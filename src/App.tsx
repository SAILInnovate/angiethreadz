import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Lookbook from './pages/Lookbook';
import Header from './components/Header';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/lookbook" element={<Lookbook />} />
          </Routes>
        </main>
        <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;
