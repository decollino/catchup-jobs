import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const UserCode = db.define(
  'user_codes',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    codeToken: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default UserCode;
