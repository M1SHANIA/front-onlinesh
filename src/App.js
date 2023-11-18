import React, { useState } from 'react';
import './App.css';
import ShoppingCart from './cartPage/ShoppingCart';
import LoginPage from './loginPage/LoginPage';
import RegisterPage from './regPage/RegistrationPage';
import ProductCard from './productCard/ProductCard';

const Header = ({ onLoginClick, onCartClick }) => (
  <header className="header">
    <div className="logo">Logo</div>
    <input className="search" type="text" placeholder="Searching" />
    <button className="button cart" onClick={onCartClick}>Shopping cart</button>
    <button className="button login" onClick={onLoginClick}>Login</button>
  </header>
);

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const products = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
    // ... другие продукты
  ];

  return (
    <div className="App">
      {!showLogin && !showCart && !showRegister && (
        <>
          <Header
            onLoginClick={() => setShowLogin(true)}
            onCartClick={() => setShowCart(true)}
          />
          <main className="main-content">
            {products.map(product => (
              <ProductCard key={product.id} title={product.title} />
            ))}
          </main>
        </>
      )}

      {showLogin && (
        <LoginPage
          onBack={() => setShowLogin(false)}
          onRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        /*onLogin={{()=>}}*/
        />
      )}

      {showCart && (
        <ShoppingCart onClose={() => setShowCart(false)} />
      )}

      {showRegister && (
        <RegisterPage onBack={() => setShowRegister(false)} />
      )}
    </div>
  );
}

export default App;
