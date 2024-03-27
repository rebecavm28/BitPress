import { DataTypes, Model, Sequelize } from 'sequelize';
import connection_db from '../database/connection_db';

class Rol extends Model {}


Rol.init(
    {
      id_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: connection_db,
      tableName: 'roles', // Nombre de la tabla en la base de datos
    }
  );
  
  export default Rol;