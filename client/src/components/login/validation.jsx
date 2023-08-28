

const validation = (userData) =>{
    const errors= {};
    
    if(!userData.nombre){
        errors.nombre= <span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>Debe ingresar un nombre</span>
    }
    if (userData.nombre.length > 30) {
        errors.nombre = <span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>El nombre no debe tener más de 30 caracteres</span>
    };

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email=<span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>email inválido</span>
    }
    if(!userData.email){
        errors.email= <span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>Debe ingresar un email</span>
    }
    if(userData.email.length > 35){
        errors.email=<span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>máximo 35 caracteres</span>
    };

    if(!/.*\d+.*/.test(userData.password)){ // .test es un metodo de regex que valida si algo se cumple
        errors.password=<span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>password tener al menos un número</span>
    }
    if(userData.password.length > 10 || userData.password.length <= 4){
        errors.password=<span style={{ color: 'red', fontWeight: 800, WebkitTextStroke: '1px black' }}>password debe tener entre 6 y 10 caracteres</span>
    }


    return errors;
}

export default validation; 