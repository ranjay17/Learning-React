import Chart from "../Chart/Chart";

const ExpenseChart = (props) =>{
    console.log(props.chartData)
    return(
        <div>
            <Chart chartExpenses = {props.chartData}/>
        </div>
    )
}

export default ExpenseChart;