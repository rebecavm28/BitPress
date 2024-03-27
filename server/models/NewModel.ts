import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";

export const NewModel = connection_db.define('new', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_new:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    date:{ type: DataTypes.DATE, allowNull: false },
},
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
{
    tableName: 'news', // Nombre de la tabla en la base de datos
    timestamps: false, // Disable timestamps
      }
);
export default NewModel;