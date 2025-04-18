import { DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const Penguji = database.define('pengujis', {
  skripsiId: { type: DataTypes.INTEGER, allowNull: false },
  dosenId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  freezeTableName: true
});

export default Penguji;