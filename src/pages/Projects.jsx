import { Outlet } from "react-router-dom";
//import TableDashboard from "../components/Ui/TableDashboard/TableDashboard";

function Projects (){
    return(
        <>
        <section className="py-4">
           <Outlet />  
        </section>
       
        </>
    )
}
export default Projects;