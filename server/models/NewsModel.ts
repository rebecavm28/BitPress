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
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: "users", 
            key: 'id_user', 
        },
        allowNull: false,
    },
}, {
    tableName: 'news', 
    timestamps: false, 
});

UserModel.hasMany(NewsModel,{foreignKey: "id_user"})

export default NewsModel;