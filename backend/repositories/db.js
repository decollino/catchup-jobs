import Sequelize from 'sequelize';
import dotenv from 'dotenv/config.js';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialiect: 'postgres',
  define: {
    timestamps: false,
  },
});

export default sequelize;
