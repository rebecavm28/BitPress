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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_rol:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: RolModel, 
            key: 'id', 
        },
    }
},{
        tableName: 'users', 
        timestamps: false, 
      }
);
export default UserModel;