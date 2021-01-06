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





import React, { useState } from "react";
import "./index.css";

const add = (a) => (b) => parseFloat(a) + parseFloat(b);

const multiply = (a) => (b) => parseFloat(a) * parseFloat(b);

const subtract = (a) => (b) => parseFloat(a) - parseFloat(b);

const divide = (a) => (b) => parseFloat(a) / parseFloat(b);

const initialInputvalues = {
  input1: "",
  input2: "",
};
export default function Calculator() {
  const [inputs, setInputs] = useState(initialInputvalues);
  const [result, setResult] = useState(null);
  const [operationCount, setCount] = useState(0);
  const [operator, setOperator] = useState("+");

  const calculate = (operation) => {
    const { input1, input2 } = inputs;
    if (!input1 || !input2) return;

    if (operation === "add") {
      setResult(add(input1)(input2));
      setOperator("+");
    }

    if (operation === "subtract") {
      setResult(subtract(input1)(input2));
      setOperator("-");
    }

    if (operation === "divide") {
      setResult(divide(input1)(input2));
      setOperator("/");
    }

    if (operation === "multiply") {
      setResult(multiply(input1)(input2));
      setOperator("*");
    }
    setCount(operationCount + 1);
  };

  const handleInputChange = (e) => {
    e.persist();
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const resetPage = () => {
    setResult(null);
    setInputs({ ...initialInputvalues });
    setOperator("+");
  };

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">
        Total operations performed: {operationCount}
      </div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              type="number"
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
              value={inputs.input1}
              onChange={handleInputChange}
            />
            <label
              className="ml-2 mr-2 symbol text-center"
              data-testid="selected-operator"
            >
              {operator}
            </label>
            <input
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
              name="input2"
              value={inputs.input2}
              onChange={handleInputChange}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              data-testid="addButton"
              onClick={() => calculate("add")}
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
              onClick={() => calculate("subtract")}
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
              onClick={() => calculate("multiply")}
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
              onClick={() => calculate("divide")}
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
              onClick={resetPage}
            >
              Reset
            </button>
            {result && (
              <div className="layout-row justify-content-center align-items-center result-container">
                <div
                  data-testid="result"
                  className="result-value ma-0 slide-up-fade-in"
                >
                  Result: {result}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
