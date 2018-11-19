import React from "react";
import styled from "styled-components";
import BurgerIngredients from "../BurgerIngredieants/BurgerIngredients";

const BreadBottom = styled.div`
  height: 50px;
  width: 200px;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;
const BreadTop = styled.div`
  height: 50px;
  width: 200px;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;

const NoIngredients = styled.div`
    text-align:center;
    font-weight:bold;
    color:#ff3333
`;

const Burger = props => {
  console.log("props.ingredients", props.ingredients);
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, index) => {
      return <BurgerIngredients key={igKey + index} ingredients={igKey} />;
    });
  })
  .reduce((prevVal, currVal) => {
      return prevVal.concat(currVal)
  }, []);

  if(transformedIngredients.length === 0) transformedIngredients = <NoIngredients>Please add !</NoIngredients>
  console.log("transformedIngredients", transformedIngredients);

  return (
    <div>
      <BreadTop className="seed1" />
      {transformedIngredients}
      <BreadBottom />
    </div>
  );
};

export default Burger;
