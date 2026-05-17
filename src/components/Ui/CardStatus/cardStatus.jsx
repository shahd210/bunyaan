import styles from "./cardStatus.module.css"
function CardStatus ({title,counter,icon}){

 return(
    <>

       <div  className={`${styles.cardStatus} d-flex align-items-center`}>
                        <div className={`${styles.icon} d-flex align-items-center justify-content-center w-100`}>
                      {icon}
                        </div>
                        <div className={`${styles.info} w-100 d-flex align-items-center flex-column gap-2`}>
                      <div className={styles.counter }> {counter}</div>
                      <div className={styles.title }>{title}</div>
                        </div>
                    </div>
    </>
 )

}
export default CardStatus 