import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Course = db.define(
  'courses',
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

export default Course;
