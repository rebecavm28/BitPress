import connection_db from "../database/connection_db";
import RolModel from "./RolModel";
import { DataTypes } from "sequelize";

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
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue: "user",
        /* references: {
            model: RolModel, // referencia al modelo RolModel
            key: 'id_rol', 
        }, */
    }
},{
        tableName: 'users', 
        timestamps: false, 
      }
);
export default UserModel;