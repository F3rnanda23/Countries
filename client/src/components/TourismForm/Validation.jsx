

const validation = (tourismData) =>{
    const errors= {};

    //nombre
    if(!tourismData.nombre){
        errors.nombre= <span style={{ color: 'red' }}> Ingresar un nombre de actividad</span>
    }
    else if (!/^[A-Za-z\s-áÁéÉíÍóÓúÚñÑ]+$/.test(tourismData.nombre)) {
        errors.nombre = <span style={{ color: 'red' }}>El nombre solo debe contener letras</span>;
    }    
    else if(tourismData.nombre.length > 35){
        errors.nombre=<span style={{ color: 'red' }}> Máximo 35 caracteres</span>
    };
    //dificultad
    if (!tourismData.dificultad) {
        errors.dificultad = <span style={{ color: 'red' }}>Ingresar un nivel de dificultad (1: bajo, 2: liviano, 3: intermedio, 4: difícil, 5: alto)</span>;
    } else if (!/^[1-5]$/.test(tourismData.dificultad)) {
        errors.dificultad = <span style={{ color: 'red' }}>Debe ser un número entre 1 y 5</span>;
    }
    //duración
    if (!tourismData.duracion) {
        errors.duracion = <span style={{ color: 'red' }}>Ingresar la duración de la actividad en minutos</span>;
    } else if (isNaN(tourismData.duracion)) {
        errors.duracion = <span style={{ color: 'red' }}>Debe ser un número</span>;
    } else if (tourismData.duracion >= 300) {
        errors.duracion = <span style={{ color: 'red' }}>No puede durar más de 5 horas (300 minutos)</span>;
    }
    //termporada
    if(!tourismData.temporada){
        errors.temporada= <span style={{ color: 'red' }}> Debe ingresar una Temporada</span>
    }
    else if (
        tourismData.temporada !== 'verano' &&
        tourismData.temporada !== 'otoño' &&
        tourismData.temporada !== 'invierno' &&
        tourismData.temporada !== 'primavera'
    ) {
        errors.temporada = <span style={{ color: 'red' }}>Debe ser solo una temporada: Verano, Otoño, Invierno, Primavera</span>;
    };
    //país
    if(!tourismData.countryId){
        errors.countryId= <span style={{ color: 'red' }}> Agregar uno o varios países para esta actividad</span>
    };
   

    return errors;
}

export default validation; 