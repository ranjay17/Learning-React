
const LabelComponent = (props) => {
  return (
    <div>{props.value > 100 ? <p style={{backgroundColor: "red", color: "white", fontWeight: "bold"}}>Expense Limit Exceeded</p> : null}</div>
  );
}

export default LabelComponent;
