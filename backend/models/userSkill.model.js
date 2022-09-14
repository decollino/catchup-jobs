import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import Skill from './skill.model.js';
import User from './user.model.js';

const UserSkill = db.define(
  'user_skills',
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
    yearsOfXp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

UserSkill.belongsTo(User, { foreignKey: 'userId' });

export default UserSkill;
