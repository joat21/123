import { useReducer } from 'react';
import { reducer } from './entities/reducer';
import { calculatorButtonsConfig } from './entities/config';
import { formatOperand } from './shared/helpers';
import CalculatorButton from './components/CalculatorButton';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, {});
  const { currentOperand, previousOperand, operation } = state;

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      {calculatorButtonsConfig.map((button) => (
        <CalculatorButton
          key={button.value}
          dispatch={dispatch}
          {...button}
        />
      ))}
    </div>
  )
}

export default App
