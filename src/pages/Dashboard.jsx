import {Routes , Route } from "react-router-dom"
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar"
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import FormDashboard from "../components/Ui/FormDashboard/FormDashboard"
import TableDashboard from "../components/Ui/TableDashboard/TableDashboard";
import Developer from "./Developer";
import { useState } from "react";
function Dashboard() {
  const [hasNotification ,sethasNotification]=useState(false)
  return (
    <>
      <Navbar adminName="shahd" />
       <div className="d-flex ">
        <Sidebar hasNotification={hasNotification}/>
        <main className="flex-grow-1 ">
  <Routes>
 <Route path="/" element={<StatusPage/>}/>

<Route path="/users" element={<Users sethasNotification={sethasNotification}/>}>
<Route index element={<TableDashboard name = "Users" add="User"/>}/>
<Route path="add" element={<FormDashboard/>} />
</Route>

<Route path="/projects" element={<Projects  sethasNotification={sethasNotification}/>} >
 <Route index element={<TableDashboard  name = "Projects" add="Project"/>} />
 <Route path="add" element={<FormDashboard/>} />
</Route>

<Route path="/developer" element={<Developer  sethasNotification={sethasNotification} />} >
<Route index element={<TableDashboard name="Developers" add="Developer"/>} />
<Route path="add" element={<FormDashboard/>} />
</Route>
  </Routes>
        </main>
       </div>
      <Footer />
    </>
  );
}

export default Dashboard;
