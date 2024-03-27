// RoleModel.ts
import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";

export const RoleModel = connection_db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Otros campos según sea necesario
}, {
    tableName: 'roles', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilita los timestamps
});

export default RoleModel;