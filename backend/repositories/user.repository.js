import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

async function getUserByEmail(email) {
  try {
    let user = await User.findOne({
      where: {
        email: email,
      },
      raw: true,
    });
    // delete user.password;
    return user;
  } catch (err) {
    throw err;
  }
}

async function registerUser(user) {
  try {
    const newUser = {
      email: user.email,
      password: bcrypt.hashSync(user.password, 8),
      type: user.type,
      fullName: '',
      nickname: '',
      pronouns: '',
      city: '',
      ddi: '',
      phone: '',
      profileUrl: '',
      chkPc: user.chkPc,
      chkTpp: user.chkTpp,
      jobTitleId: 1,
      yearsOfXp: '',
    };

    const createdUser = await User.create(newUser);

    return {
      id: createdUser.id,
      fullName: createdUser.fullName,
      email: createdUser.email,
      type: createdUser.type,
      token: generateToken(createdUser),
    };
  } catch (err) {
    throw err;
  }
}

async function oauthUser(user, userBd) {
  console.log('repository - oauthUser');
  try {
    const newUser = {
      email: user.email,
      password: '',
      type: user.type,
      fullName: user.fullName,
      nickname: '',
      pronouns: '',
      city: '',
      ddi: '',
      phone: '',
      profileUrl: '',
      chkPc: '',
      chkTpp: '',
      jobTitleId: 1,
      yearsOfXp: '',
    };

    if (!userBd) {
      const createdUser = await User.create(newUser);
      return {
        id: createdUser.id,
        fullName: createdUser.fullName,
        email: createdUser.email,
        type: createdUser.type,
        token: generateToken(createdUser),
      };
    }

    return {
      id: userBd.id,
      fullName: userBd.fullName,
      email: userBd.email,
      type: userBd.type,
      token: generateToken(userBd),
    };
  } catch (err) {
    throw err;
  }
}

async function updateUser(user) {
  try {
    await User.update(
      {
        fullName: user.fullName,
        nickname: user.nickname,
        pronouns: user.pronouns,
        city: user.city,
        ddi: user.ddi,
        phone: user.phone,
        profileUrl: user.profileUrl,
        chkPc: user.chkPc,
        jobTitleId: user.jobTitleId,
        yearsOfXp: user.yearsOfXp,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    return await getUser(user.id);
  } catch (err) {
    throw err;
  }
}

async function changePasswordUser(user) {
  try {
    await User.update(
      {
        password: bcrypt.hashSync(user.password, 8),
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    return await getUser(user.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUser(id) {
  try {
    return await User.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUser(id) {
  try {
    let user = await User.findByPk(id);
    delete user.dataValues.password;
    return user;
  } catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    let users = await User.findAll();
    const newUsers = users.map((user) => {
      return delete user.dataValues.password;
    });
    return users;
  } catch (err) {
    throw err;
  }
}

export default {
  getUserByEmail,
  registerUser,
  oauthUser,
  updateUser,
  changePasswordUser,
  getUser,
  deleteUser,
  getUsers,
};
