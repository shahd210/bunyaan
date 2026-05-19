import { Outlet } from "react-router-dom"

function Developer ({sethasNotification}){
    return(
        <>
        <section className="py-4">

          <Outlet context={{sethasNotification}}/>      
        </section>
    
        </>
    )
}
export default Developer