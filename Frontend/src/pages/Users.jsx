//import FormDashboard from "../components/Ui/FormDashboard/FormDashboard"
import { Outlet } from "react-router-dom";
//import TableDashboard from "../components/Ui/TableDashboard/TableDashboard";
function Users ({sethasNotification}){
    return(
        <>
     <section className="py-4">
      <Outlet context={{sethasNotification}} />
     </section>
      
        </>
    )
}
export default Users;