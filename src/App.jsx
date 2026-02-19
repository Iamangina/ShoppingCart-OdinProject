import Logo from './images/logo.png';
import Search from './images/search.png';
import Cart from './images/cart.png';
import styles from './App.module.css';
import { Outlet, Link } from 'react-router';
import {useState } from 'react'

function App() {

  const [cart, setCart] = useState([]);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  function increase(id) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id) {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
}


  function addToCart(product){
    setCart(prevCart => {
    const prodInCart = prevCart.find(prod => prod.id === product.id);
    if (prodInCart) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
}

  return (
    <>
      <header>
        <div className={styles.logo}>
          <img className={styles.icon} src={Search} alt='search icon'/>
          <img className={styles.logoImg} src={Logo} alt='logo'/>
          <Link className={styles.btnCart} to="/cart">
            <img className={styles.icon} src={Cart} alt='cart icon'/>
            <p className={styles.cartText}>{totalItems}</p>
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.btnHome} to="/">Home</Link>
          <Link className={styles.btnStore} to="/shop">Swiss Army Knives</Link>
          <Link className={styles.btnCart} to="/cart">Cart</Link>
        </div>
      </header>
      <Outlet context={{ cart, addToCart, increase, decrease}}/>
    </>
  );
}

export default App;
