const operationsDict = {
  '+': (prev, current) => prev + current,
  '-': (prev, current) => prev - current,
  '*': (prev, current) => prev * current,
  '/': (prev, current) => prev / current
}

export function evaluate(state) {
  const { currentOperand, previousOperand, operation } = state;
  const current = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);

  if (isNaN(prev) || isNaN(current)) return null;
  const comp = operationsDict[operation](prev, current);
  return `${comp}`;
}
