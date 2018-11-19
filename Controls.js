import * as React from "react";

import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;
  color: #000;
  width: 150px;
`;
const Button = styled.button`
  background: #ff3333;
  color: #fff;
  margin: 0 4px;
`;

const ControlWrapper = styled.div`
  display: flex;
  margin: 4px 0;
`;

const BuildControls = props => (
  <ControlWrapper>
    <Label>{props.item}</Label>
    <Button onClick={props.onaddIngredients}>+</Button>
    <Button onClick={props.onremoveIngredients} disabled={props.disabled}>
      -
    </Button>
  </ControlWrapper>
);

const constrolsArray = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const Controls = props => (
  <div>
    <p> Total price : <strong>{props.price.toFixed(2)}</strong></p>
    {constrolsArray.map(ctrl => (
      <BuildControls
        key={ctrl.label}
        item={ctrl.label}
        onaddIngredients={() => props.onAdd(ctrl.type)}
        onremoveIngredients={() => props.onRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}<Button disabled={!props.purchasable}>ORDER NOW</Button>
  </div>
);

export default Controls;
