import React from "react";
const SimpleList = () => {
  const customers = ["ajibade", "tosin", "jay", "peter", "timi", "al-ameen"];

  const products = [
    {
      id: 1,
      title: "Baseball Hat",
      price: 5000,
    },
    {
      id: 2,
      title: "Hoodie",
      price: 18000,
    },
    {
      id: 3,
      title: "Nike Slides",
      price: 20000,
    },
  ];

  return (
    <div>
      {customers.map((customer, index) => {
        return <h1 key={index}>{customer}</h1>;
      })}

      <div>
        Products
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleList;
