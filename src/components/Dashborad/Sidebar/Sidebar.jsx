import { NavLink } from "react-router-dom";
import styles from  "./Sidebar.module.css"
function Sidebar ({hasNotification}){
    const links =[
        {icon : "fa-chart-bar", title:"Status" , path:"/"},
        {icon: "fa-users" , title:"Users management", path:"/users"},
         {icon: "fa-building" , title:"Projects management" , path:"/projects"},
        {icon: "fa-building " , title:"Developer management" , path:"/developer" },
         {icon: "fa-users" , title:"Cms" , path: "cms"},
        {icon: "fa-message" , title:"live chat"}
    ]
    return(
        <>
      <aside className={`${styles.Sidebar} min-vh-100 py-4 `}>
        <div className="fw-semibold px-4 mb-3 fs-4 opacity-50 ">Dshboard</div>
        
        <nav>
     {links.map((item , index)=>(
        <NavLink 
        to={item.path}
        className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4 fs-5`} key={index}>
        <i className={`fa-solid ${item.icon}`}></i>
        <span>{item.title}</span>
        {item.title === "Users management" && hasNotification && (
  <span className={styles.redDot}></span>
)}
    </NavLink>
     ))}
        </nav>
      </aside>
        </>
    )
}

export default Sidebar;

{/* links always use nav */}
        {/* control + shift + f -> search */}