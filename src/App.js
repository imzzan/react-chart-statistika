import React from "react";
import { Data } from "./data";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import BarChart from "./Pages/BarChart";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import LineChart from "./Pages/LineChart";
import DoughnutChart from "./Pages/DoughnutChart";
import PolarChart from "./Pages/PolarChart";
import RadarChart from "./Pages/RadarChart";

function App() {
  return (
    <div className=" flex">
    <BrowserRouter>
      <Sidebar/>
      <Routes>
          <Route path='/' element={<Home data={Data}/>}/>
          <Route path='/bar' element={<BarChart databar={Data}/>}/>
          <Route path='/line' element={<LineChart dataline={Data}/>}/>
          <Route path="/doughnut" element={<DoughnutChart datanut={Data}/>}/>
          <Route path="/polar" element={<PolarChart datapie={Data}/>}/>
          <Route path='/radar' element={<RadarChart dataradar={Data}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
