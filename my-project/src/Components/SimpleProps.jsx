import React from "react";

const Test = ({ image, name, newPrice, oldPrice, itemsLeft }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{newPrice}</p>
      <p>
        <strike>{oldPrice}</strike>
      </p>
      <p>{itemsLeft}</p>
    </div>
  );
};
const SimpleProps = () => {
  return (
    <>
      <Test
        itemsLeft={250}
        newPrice={5925}
        oldPrice={9595}
        name="Nivea Deep anti-perspirant Spray for
    Men 48h - 200ml(Pack 0f 2)"
        image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill
    (white)/product/31/6723401/1.jpg?2030"
      />
      <Test
        itemsLeft={185}
        newPrice={2400}
        oldPrice={5000}
        name={"NIVEA Soft Cream 200ml"}
        image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill
    (white)/product/07/1249383/1.jpg?5231"
      />
    </>
  );
};
export default SimpleProps;
