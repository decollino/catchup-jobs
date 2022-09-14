import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import Career from './career.model.js';
import User from './user.model.js';

const UserCareer = db.define(
  'user_careers',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    yearsOfXp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

UserCareer.belongsTo(User, { foreignKey: 'userId' });
UserCareer.belongsTo(Career, { foreignKey: 'careerId' });

export default UserCareer;
