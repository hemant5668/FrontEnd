import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css"

export default function Chart(props) {
    const datapointsValues= props.datapoints.map(datapoint => datapoint.value);
    console.log(datapointsValues)
    const totalMaximum = Math.max(...datapointsValues);
    

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar 
        key={datapoint.label}
        maxValue={totalMaximum}
        value={datapoint.value} 
        label={datapoint.label}
        />
      ))}
    </div>
  );
}
