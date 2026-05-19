import CardStatus from "../../Ui/CardStatus/cardStatus";

function Status (){
    return(

        <>
       <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3"> <CardStatus title="Projrcts" counter="120" icon={ <i class="fa-solid fa-building"></i>}/> </div>
                 <div className="col-12 col-md-3"> <CardStatus title="Users" counter="150" icon={<i class="fa-solid fa-users"></i>}/> </div>
                  <div className="col-12 col-md-3"> <CardStatus title="Developer" counter="200" icon={<i class="fa-solid fa-code"></i>} /> </div>
                   <div className="col-12 col-md-3"> <CardStatus title="Blogs" counter="50" icon={<i class="fa-solid fa-blog"></i>}/> </div>
            </div>
        </div>
       </section>
        </>
    )
}
export default Status;