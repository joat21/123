import { useReducer } from 'react';
import { ACTIONS } from './shared/constants';
import CalculatorButton from './components/CalculatorButton';
import './App.css';

function App() {

  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if (payload.value === '0' && state.currentOperand === '0') return state;
        if (payload.value === '.' && state.currentOperand?.includes('.')) return state;

        return {
          ...state,
          currentOperand: `${state.currentOperand || ''}${payload.value}`
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, {});
  const { currentOperand, previousOperand, operation } = state;

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">111</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='1' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='2' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='3' />
      <button>*</button>
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='4' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='5' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='6' />
      <button>+</button>
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='7' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='8' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='9' />
      <button>-</button>
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='.' />
      <CalculatorButton type={ACTIONS.ADD_DIGIT} dispatch={dispatch} value='0' />
      <button className="span-two">=</button>
    </div>
  )
}

export default App
