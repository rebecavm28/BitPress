import { DataTypes, Model } from "sequelize";
import connection_db from "../database/connection_db";
import { UserAttributes } from "../Interfaces/interface"
interface UserModel extends Model<UserAttributes>, UserAttributes{}

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
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol:{
        type:DataTypes.STRING,
        allowNull:false,
        references: {
            key: 'id', 
        },
    }
},{
        tableName: 'users', 
        timestamps: false, 
      }
);

export default UserModel;