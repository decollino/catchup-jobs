import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import User from './user.model.js';
import Vacancy from './vacancy.model.js';

const UserVacancy = db.define(
  'userVacancies',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { underscored: true }
);

UserVacancy.belongsTo(User, { foreignKey: 'userId' });
UserVacancy.belongsTo(Vacancy, { foreignKey: 'vacancyId' });

export default UserVacancy;
