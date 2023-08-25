
import CardsPaises from "../cards/CardsPaises";
import Navbar from "../navbar/Nabvar";
import Pagination from "../pagination/Patigation";
import ButtonsToOrder from "../buttons/ButtonToOrder";
import ButtonsToFilter from "../buttons/ButtonsToFilter";


const Home = () =>{
//------------------navbar---------------------------
    
    //------------------------------navbar----------------------------

    //-------------------cards-----------------------------------------

    

    return (
        <div>
             <h2> COUNTRIES </h2>
            <div>
                <Navbar />
            </div>

            <div>
                <ButtonsToOrder />
            </div>


            <div>
                <CardsPaises />
            </div>

            <div>
                <Pagination />
            </div>

        </div>
    )
}

export default Home;