import { Sequelize, DataTypes } from 'sequelize';
import database from '../database/db.mjs';

const User = database.define('users', {
  nama: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  foto: { type: DataTypes.STRING, allowNull: true },
  role: {
    type: DataTypes.ENUM('admin', 'mahasiswa', 'dosen_pembimbing', 'dosen_penguji', 'tim_outline'),
    allowNull: false,
    defaultValue: 'mahasiswa'
  },
  password: { type: DataTypes.STRING, allowNull: false },
  token: { type: DataTypes.STRING, allowNull: true },
}, {
  freezeTableName: true
});

export default User;