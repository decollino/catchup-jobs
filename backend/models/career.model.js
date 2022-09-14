import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Career = db.define(
  'careers',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    jobTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Career;
