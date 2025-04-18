import { DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const PersetujuanOutline = database.define('persetujuan_outline', {
  outlineId: { type: DataTypes.INTEGER, allowNull: false },
  reviewerId: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM('disetujui', 'ditolak'),
    defaultValue: 'disetujui'
  },
  catatan: { type: DataTypes.TEXT }
}, {
  freezeTableName: true
});

export default PersetujuanOutline;