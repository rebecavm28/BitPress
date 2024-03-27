import { DataTypes, Model, Sequelize } from 'sequelize';
import connection_db from '../database/connection_db';

export const RolModel = connection_db.define('Rol', {
  id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
      tableName: 'roles', // Nombre de la tabla en la base de datos
      timestamps: false, // Disable timestamps
    }
);
export default RolModel;
