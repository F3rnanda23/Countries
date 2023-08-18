
import  style from './navbar.module.css';


const Navbar = ({ nombre, handleChange, onSearch }) =>{

    

    return(
           <div>
         <input type='search' onChange= {handleChange} value={nombre} className={style.input} placeholder="Buscar país por nombre"/>
         <button className={style.btn2} onClick={onSearch}>Agregar</button> 
         {/* <button  className={style.btn2} onClick={onRandom}>Random</button> */}
      </div>
    )

}

export default Navbar;