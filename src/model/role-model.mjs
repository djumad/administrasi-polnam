import { DataTypes } from "sequelize";
import database from "../database/db.mjs";

const Role = database.define('roles', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, {
    freezeTableName: true,
});
export default Role;