import { DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const PenilaianSkripsi = database.define('penilaian_skripsi', {
  pengujiId: { type: DataTypes.INTEGER, allowNull: false },
  nilai: { type: DataTypes.INTEGER, allowNull: false },
  revisi: { type: DataTypes.TEXT },
}, {
  freezeTableName: true
});

export default PenilaianSkripsi;