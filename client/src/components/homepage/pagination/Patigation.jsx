import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../../redux/actions';
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
    <div>
      {Array.from({ length: totalPages }, (_, index) => ( //Crea una lista (array) de páginas  y te dice en qué número de página estás.
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
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