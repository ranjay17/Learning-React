import ChartBar from "./ChartBar";
import "./Chart.css";
import WithLabel from "../HOC/WithLabel";
import LabelComponent from "../HOC/LabelComponent";

const Chart = (props) => {
  const expenseOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price;
  });

  let totalValue = 0;
  for (let i = 0; i < expenseOnlyArray.length; i++) {
    totalValue = totalValue + expenseOnlyArray[i];
  }

  const EnhancedLabel = WithLabel(LabelComponent);

  const maxValue = Math.max(...expenseOnlyArray);
  const chartData = [
    { expenseMonth: "jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].expenseValue += expense.price;
  }
  return (
    <div className="chart">
      {chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.expenseValue}
            maxValue={maxValue}
          />
        );
      })}
      <EnhancedLabel value={totalValue} />
    </div>
  );
};

export default Chart;
