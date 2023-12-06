import React from 'react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemsByCategory } from 'tu/async-mocks'; 

const ItemListContainer = () => {
  const { id: categoryId } = useParams();

  useEffect(() => {
    
    fetchItemsByCategory(categoryId);
  }, [categoryId]);

  return (
    <div>
      {}
    </div>
  );
}
const itemListContainer = ({ greeting }) => {
  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
};

export default itemListContainer;