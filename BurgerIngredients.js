import React from "react";
import styled from "styled-components";

const IngredientsContainer = styled.div`
  align-self: stretch;
  order: 0;
  flex: 0 0 0px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 90px;
  &.meat {
    width: 200px;
    height: 10px;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
  }
  &.cheese {
    width: 200px;
    height: 12px;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
  }
  &.salad {
    width: 200px;
    height: 15px;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
  }
  &.bacon {
    width: 200px;
    height: 10px;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
  }
`;

const BurgerIngredients = props => {
  return (
    <IngredientsContainer className={props.ingredients} />
  );
};

export default BurgerIngredients;
