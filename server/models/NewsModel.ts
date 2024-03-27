// NewsModel.ts
import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import UserModel from './UserModel'; 

export const NewsModel = connection_db.define('news', {
    id_news: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    id_user: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel, // referencia al modelo UserModel
            key: 'id', // modelo UserModel
        },
        allowNull: false,
    },
}, {
    tableName: 'news', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los timestamps
});

export default NewsModel;