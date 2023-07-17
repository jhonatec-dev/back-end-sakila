import { configDotenv } from "dotenv";
import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { Actors } from "../models/Actors";

configDotenv();

const config = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT as Dialect,
    "logging": false,
    "models": [Actors]
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT as Dialect,
    "logging": false,
    "models": [Actors]
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT as Dialect,
    "logging": false,
    "models": [Actors]
  }
}

// console.log('############ DATABASE \n\n\n',config.development.database, '\n\n\n');

const connection = new Sequelize(config[process.env.NODE_ENV as keyof typeof config]);

// console.log('connection ********** ', '\n *****************', '\n', connection);

export { connection };
