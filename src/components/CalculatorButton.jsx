const CalculatorButton = (props) => {
  const { type, dispatch, value } = props;

  return (
    <button className={props.className} onClick={() => dispatch({ type, payload: { value } })}>
      {value}
    </button>
  )
}

export default CalculatorButton
