// TODO: Archivo de configuración del ORM Sequelize y conectar MySql

import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config(); // de esta forma vamos a tener acceso a los valores de las variables de entorno

// console.log(process.env.DATABASE); // asi vamos acceder a los valores de nuestras variables de entorno

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: "3306",
        dialect: "mysql",
        define: {
            timestamps: false,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        operatorsAliases: false,
    }
);

export default db;
