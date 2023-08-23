import React from 'react';
import Modal from 'react-modal';

const TourismModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}//Esta propiedad determina si el modal debe estar abierto o cerrado. 
      onRequestClose={onClose} //cerrar el modal, al apretar el boton
      contentLabel="Actividad Turística Creada"
    >
        <div>
            <h2>¡Actividad Turística Creada!</h2>
            <p>La actividad turística ha sido creada exitosamente.</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
      
    </Modal>
  );
};

export default TourismModal;