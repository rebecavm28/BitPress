import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import RolModel from "./RolModel";

export const UserModel = connection_db.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 2,
        references: {
            model: RolModel, // referencia al modelo RolModel
            key: 'id_rol', 
        },
    }
},{
        tableName: 'users', // Nombre de la tabla en la base de datos
        timestamps: false, // Disable timestamps
      }
);
export default UserModel;