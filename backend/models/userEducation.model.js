import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import User from './user.model.js';

const UserEducation = db.define(
  'user_educations',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    courseName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    schoolName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    degreeName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endPeriod: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

UserEducation.belongsTo(User, { foreignKey: 'userId' });

export default UserEducation;
