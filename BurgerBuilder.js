import * as React from "react";
import styled from "styled-components";

import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";

const BurgerContainer = styled.div`
  align-self: stretch;
  order: 0;
  flex: 0 0 0px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 90px;
`;
const INGREDIENTS_PRICE = {
  cheese: 0.4,
  meat: 1.2,
  bacon: 0.6,
  salad: 0.2
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0
    },
    totalPrice: 4.0,
    purchasable: false
  };

  updatePurchase = (ingredients) => {
   // const ingredients = { ...this.state.ingredients };

    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((oldVal, newVal) => {
        return oldVal + newVal;
      }, 0);

      this.setState({
          purchasable: sum > 0
      })
  };

  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;

    const additionPrice = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + additionPrice;
    
    this.setState({
      ingredients: updateIngredients,
      totalPrice: updatedPrice
    });
    this.updatePurchase(updateIngredients);
  };

  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const additionPrice = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - additionPrice;
    
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
    this.updatePurchase(updatedIngredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    console.log("disabledInfo", disabledInfo);
    return (
      <BurgerContainer>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          onAdd={this.addIngredientsHandler}
          onRemove={this.removeIngredientsHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </BurgerContainer>
    );
  }
}

export default BurgerBuilder;
