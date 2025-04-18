import { DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const StatusSkripsi = database.define('status_skripsi', {
  skripsiId: { type: DataTypes.INTEGER, allowNull: false },
  pembimbingId: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM('revisi', 'siap_ujian'),
    defaultValue: 'revisi'
  },
  catatan: { type: DataTypes.TEXT }
}, {
  freezeTableName: true
});

export default StatusSkripsi;