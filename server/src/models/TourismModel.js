const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Tourism', {
     id: {
        type: DataTypes.UUID, //te permite definir una columna que almacenará identificadores únicos generados mediante este esquema.
        defaultValue: DataTypes.UUIDV4,// cada vez que se inserta una nueva fila en la base de datos, se generará un identificador único.
        allowNull: false,
        primaryKey: true
     },
     nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 5 }
      }, 
      duracion: {
        type: DataTypes.INTEGER, 
        validate: { min: 0 }
      },
      temporada: {
        type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
        allowNull: false
      }
      
    });
  };
  