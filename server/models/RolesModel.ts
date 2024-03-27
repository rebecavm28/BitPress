import { DataTypes, Model, Optional } from 'sequelize';
import connection_db from '../database/connection_db';yarn add sequelize
yarn add sequelize



RolModel.init(
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
  
  export default RolModel;