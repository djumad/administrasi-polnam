import { DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const Outline = database.define('outlines', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  file: { type: DataTypes.STRING, allowNull: false },
}, {
  freezeTableName: true
});

export default Outline;