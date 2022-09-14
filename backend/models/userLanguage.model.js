import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import Language from './language.model.js';
import User from './user.model.js';

const UserLanguage = db.define(
  'user_languages',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    level: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

UserLanguage.belongsTo(User, { foreignKey: 'userId' });
UserLanguage.belongsTo(Language, { foreignKey: 'languageId' });

export default UserLanguage;
