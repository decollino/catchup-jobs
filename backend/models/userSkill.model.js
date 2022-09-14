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
    yearsOfXp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

UserSkill.belongsTo(User, { foreignKey: 'userId' });
UserSkill.belongsTo(Skill, { foreignKey: 'skillId' });

export default UserSkill;
