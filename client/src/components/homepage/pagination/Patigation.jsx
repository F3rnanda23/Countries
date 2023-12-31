import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../../redux/actions';
import style from './pagination.module.css'
//Cada vez que cambias de página, la función changePage se dispara para actualizar la página actual en el estado
// de Redux y, por lo tanto, actualiza la lista de países que se muestra en el componente.

const Pagination = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);
  const totalCountries = useSelector((state) => state.countriesFilter.length);

  const totalPages = Math.ceil(totalCountries / countriesPerPage);//redondear un número hacia arriba al entero más cercano o igual
  //La división totalCountries / countriesPerPage te dará el número total de páginas requeridas para mostrar todos los países. 

  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(changePage(newPage));
  };

  return (
    <div className={style.containerPagination}>
      <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={style.prevNext}
      >
           &laquo; { 'prev'}
      </button>

      {Array.from({ length: totalPages }, (_, index) => ( //Crea una lista (array) de páginas      // función que se ejecuta para cada elemento del array
        <button
          key={index}//crea un botón para cada página.
          onClick={() => handlePageChange(index + 1)}//cambia la página que se muestra.
          disabled={currentPage === index + 1 ? 'active' : ''}//dehabilita pag actual para hacer click sobre ella misma
          className={style.numberPagination} // {index + 1}  muestra el número de página en el botón
        >
          {index + 1}  
        </button>
      ))}

      <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={style.prevNext}
      >
          &raquo; {'next'}
      </button>
    </div>
  );
};

export default Pagination;

































//Array.from({ length: totalPages }, (_, index) => ...) crea un array con la longitud igual al número total de páginas (totalPages). 
//El segundo argumento es una función que se ejecuta para cada elemento del array. Aquí, estamos usando el índice index para crear los botones de paginación.

//button key={index} ...> crea un botón para cada página. El atributo key es necesario para React para identificar de manera única cada elemento en una lista.
//(_, index): no necesitas saber cuál es el valor exacto del elemento en ese índice), puedes usar _ para indicar que estás ignorando ese valor.

//onClick={() => handlePageChange(index + 1)} establece que cuando haces clic en el botón, se ejecuta la función handlePageChange con el número 
//de página correspondiente (index + 1). Esto cambia la página que se muestra.

//disabled={currentPage === index + 1} deshabilita el botón si la página actual es igual a la página representada por el botón. 
//Esto evita que hagas clic en la página actual nuevamente y actualices la página innecesariamente.

//{index + 1} muestra el número de página en el botón. index es el índice del botón en el array, pero como las páginas 
//comienzan desde 1 y no desde 0, sumamos 1 para mostrar la numeración correcta en los botones.