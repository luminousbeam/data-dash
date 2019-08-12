import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';


export class BarChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  render (){
    return(
      <div className="charts">
        <div className="pie-chart">
          <Pie
            data={this.state.chartData}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Systec Data",
                fontSize: 25
              },
              legend: {
                display: true,
                position: "top"
              }
            }}
            />
        </div>

        <div className="line-chart">
          <Line
            data={this.state.chartData}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Systec Data",
                fontSize: 25
              },
              legend: {
                display: true,
                position: "top"
              }
            }}
            />
        </div>

        <div className="bar-chart">
          <Bar
            data={this.state.chartData}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Systec Data",
                fontSize: 25
              },
              legend: {
                display: true,
                position: "top"
              }
            }}
            />
        </div>

      </div>
    )
  }
}
