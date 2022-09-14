import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Language = db.define(
  'languages',
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

export default Language;
