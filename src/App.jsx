import { useReducer } from 'react';
import { ACTIONS } from './shared/constants';
import { reducer } from './entities/reducer';
import CalculatorButton from './components/CalculatorButton';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, {});
  const { currentOperand, previousOperand, operation } = state;

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <CalculatorButton className="span-two" type={ACTIONS.CLEAR} dispatch={dispatch} value='AC' />
      <CalculatorButton type={ACTIONS.DELETE_DIGIT} dispatch={dispatch} value='DEL' />
      <CalculatorButton type={ACTIONS.CHOOSE_OPERATION} dispatch={dispatch} value='/' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='1' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='2' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='3' />
      <CalculatorButton type={ACTIONS.CHOOSE_OPERATION} dispatch={dispatch} value='*' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='4' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='5' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='6' />
      <CalculatorButton type={ACTIONS.CHOOSE_OPERATION} dispatch={dispatch} value='+' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='7' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='8' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='9' />
      <CalculatorButton type={ACTIONS.CHOOSE_OPERATION} dispatch={dispatch} value='-' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='.' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='0' />
      <CalculatorButton className="span-two" type={ACTIONS.EVALUATE} dispatch={dispatch} value='=' />
    </div>
  )
}

export default App
