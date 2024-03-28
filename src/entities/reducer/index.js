import { ACTIONS } from '../../shared/constants';
import { evaluate } from '../methods';

export function reducer(state, { type, payload }) {
  const { currentOperand, previousOperand, operation } = state;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.isOverwritten) return { ...state, currentOperand: payload.value, isOverwritten: false }
      if (payload.value === '0' && currentOperand === '0') return state;
      if (payload.value === '.' && currentOperand?.includes('.')) return state;

      return {
        ...state,
        currentOperand: `${currentOperand || ''}${payload.value}`
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.CHOOSE_OPERATION:
      if (!(currentOperand || previousOperand)) return state;

      if (!currentOperand) return { ...state, operation: payload.value }

      return {
        currentOperand: null,
        operation: payload.value,
        previousOperand: previousOperand ? evaluate(state) : currentOperand
      }

    case ACTIONS.EVALUATE:
      if ([currentOperand, previousOperand, operation].some(el => !el)) return state;
      return {
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
        isOverwritten: true
      }

    case ACTIONS.DELETE_DIGIT:
      if (state.isOverwritten)
        return {
          ...state,
          currentOperand: null,
          isOverwritten: false
        }

      if (!currentOperand) return state;
      if (currentOperand.length === 1) return { ...state, currentOperand: null }
      return { ...state, currentOperand: currentOperand.slice(0, -1) }
  }
}
