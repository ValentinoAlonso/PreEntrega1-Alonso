import React from 'react';
import CartWidget from './CartWidget';

const navBar = () => {
  return (
    <nav>
      <div>Brand</div>
      <ul>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
      </ul>
    </nav>
  );
};

export default navBar();
import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <Link to="/">Brand</Link>
      <Link to="/item/:id">Item.js</Link>
      <Link to="/category/:categoryId">Category</Link>
    </nav>
  );
}

