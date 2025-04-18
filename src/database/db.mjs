import { Sequelize } from "sequelize";

const database = new Sequelize("administrasi_skripsi" , "root" , "" , {
    host : "localhost",
    dialect : "mysql"
});

export default database;