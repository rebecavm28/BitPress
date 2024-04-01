"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = require("../config");
var connection_db = new sequelize_1.Sequelize(config_1.DB_DEV_NAME, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = connection_db;
