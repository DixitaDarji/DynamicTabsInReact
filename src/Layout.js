import * as React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";
import { UserData } from "./Data";
export default function Layout() {
  const [baruserData, setBarUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [lineuserdata, setLineUserdata] = useState({
    labels: UserData.map((data)=>data.year),
    datasets : [{
      label: "Users Gained",
      data: UserData.map((data)=>data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)"
      ],
      borderColor: "black",
      borderWidth:2,
  }]
  });

  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <TabContext value={selectedTab}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Line Graph" value="1" />
        <Tab label="Bar Graph" value="2" />
        <Tab label="Pie Graph" value="3" />
      </TabList>
      <TabPanel style={{width:500, padding:30, margin:20}} value="1"><LineChart chartData={lineuserdata} /></TabPanel>
      <TabPanel style={{width:500, padding:30, margin:20}} value="2"><BarChart chartData={baruserData} /></TabPanel>
      <TabPanel style={{width:500, padding:30, margin:20}} value="3"><PieChart chartData={baruserData} /></TabPanel>
    </TabContext>
  );
}
