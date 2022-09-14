import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Company = db.define(
  'companies',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Company;
