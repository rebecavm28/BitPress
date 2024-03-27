import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";

export const UserModel = connection_db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_rol:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{
        tableName: 'users', // Nombre de la tabla en la base de datos
        timestamps: false, // Disable timestamps
      }
);
export default UserModel;