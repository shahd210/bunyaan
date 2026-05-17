import { Outlet } from "react-router-dom";
//import TableDashboard from "../components/Ui/TableDashboard/TableDashboard";

function Projects ({sethasNotification}){
    return(
        <>
        <section className="py-4">
           <Outlet context={{sethasNotification}}/>  
        </section>
       
        </>
    )
}
export default Projects;