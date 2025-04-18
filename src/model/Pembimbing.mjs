import { DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const Pembimbing = database.define('pembimbings', {
  mahasiswaId: { type: DataTypes.INTEGER, allowNull: false },
  dosenId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  freezeTableName: true
});

export default Pembimbing;