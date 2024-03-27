import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";

export const RolModel = connection_db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}, {
    tableName: 'roles', 
    timestamps: false, 
});

export default RolModel;