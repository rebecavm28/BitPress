import { DataTypes, Model } from "sequelize";
import connection_db from "../database/connection_db";
import RolModel from "./RolesModel";
import { UserAttributes } from "../Interfaces/Interfaces";
interface UserModel extends Model<UserAttributes>, UserAttributes{}

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
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_rol:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: RolModel, // referencia al modelo RolModel
            key: 'id', 
        },
    }
},{
        tableName: 'users', // Nombre de la tabla en la base de datos
        timestamps: false, // Disable timestamps
      }
);
export default UserModel;