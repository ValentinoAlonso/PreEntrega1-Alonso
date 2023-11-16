import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div>Brand</div>
      <ul>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        {/* Agrega más categorías según sea necesario */}
      </ul>
    </nav>
  );
};

export default NavBar;
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div>Brand</div>
      <ul>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        {/* Agrega más categorías según sea necesario */}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;