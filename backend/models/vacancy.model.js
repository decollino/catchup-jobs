import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Vacancy = db.define(
  'vacancies',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    vacancyName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    companyImage: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vacancyDescription: {
      type: Sequelize.STRING,
    },
  },
  { underscored: true }
);

export default Vacancy;
