import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const User = db.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
    },
    nickname: {
      type: Sequelize.STRING,
    },
    pronouns: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    ddi: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    profileUrl: {
      type: Sequelize.STRING,
    },
    chkPc: {
      type: Sequelize.BOOLEAN,
    },
    chkTpp: {
      type: Sequelize.BOOLEAN,
    },
    jobTitle: {
      type: Sequelize.STRING,
    },
    yearsOfXp: {
      type: Sequelize.STRING,
    },
  },
  { underscored: true }
);

export default User;
