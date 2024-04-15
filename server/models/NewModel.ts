
import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import UserModel from './UserModel'; 

export const NewsModel = connection_db.define('news', {
    idnews: {
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
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel, 
            key: 'id_user', 
        },
        allowNull: false,
    },
}, {
    tableName: 'news', 
    timestamps: false, 
});

export default NewsModel;