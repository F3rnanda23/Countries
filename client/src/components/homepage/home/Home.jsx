
import CardsPaises from "../cards/CardsPaises";
import Navbar from "../navbar/Nabvar";
import Pagination from "../pagination/Patigation";


const Home = () =>{
//------------------navbar---------------------------
    
    //------------------------------navbar----------------------------

    //-------------------cards-----------------------------------------

    

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <h2> COUNTRIES </h2>
                <CardsPaises />
            </div>

            <div>
                <Pagination />
            </div>

        </div>
    )
}

export default Home;