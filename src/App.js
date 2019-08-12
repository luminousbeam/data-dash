import React from 'react';
import {NavbarMenu} from './components/Navbar'
import {HeroBanner} from './components/Hero'
import {BarChart} from './components/BarChart'
import {DataTable} from './components/Table'
import { CsvToHtmlTable } from 'react-csv-to-table'
import {sampleData} from './components/CsvTable'
import {dataJson} from './components/data'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      chartData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData: {
        labels: ["Point", "IID", "STID", "NBO", "DPY"],
        datasets: [
          {
            label: "Data",
            data: [
              150000,
              176000,
              488000,
              223000,
              231000,
              111000
            ],
          backgroundColor: [
            "rgba(22, 100, 300, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(222, 111, 333, 0.6)",
            "rgba(188, 300, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)"
          ]
          }
        ]
      }
    });
  }



  render(){

    return (
      <div className="App">

        <NavbarMenu />
        <HeroBanner />
        <br />
        <br />
        <BarChart chartData={this.state.chartData}/>
        <br />
        <DataTable />
        <br />
        <div>
          <CsvToHtmlTable
            className="csv-table"
            data={sampleData}
            csvDelimiter=","
          />
        </div>
      </div>
    )
  }
}
