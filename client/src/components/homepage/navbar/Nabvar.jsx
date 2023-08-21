import {  useDispatch } from 'react-redux';
import { getCountryByName } from '../../../redux/actions';
import  style from './navbar.module.css';
import { useState } from 'react';


const Navbar = () =>{

  const [namePais, setNamePais] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNamePais(event.target.value); 
  };

  const onSearch= ()=>{
    dispatch(getCountryByName(namePais));
  }
  
    

    return(
           <div>
         <input type='search' value={namePais} className={style.input}  onChange={handleInputChange} placeholder="Buscar país por nombre"/>
         <button className={style.btn2} onClick={onSearch}>Agregar</button> 
         {/* <button  className={style.btn2} onClick={onRandom}>Random</button> */}
      </div>
    )

}

export default Navbar;