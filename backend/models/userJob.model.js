import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import Company from './company.model.js';
import Title from './title.model.js';
import User from './user.model.js';

const UserJob = db.define(
  'user_jobs',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titleName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    startPeriod: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endPeriod: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

UserJob.belongsTo(User, { foreignKey: 'userId' });

export default UserJob;
