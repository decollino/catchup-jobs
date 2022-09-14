import userRepository from '../repositories/user.repository.js';
import bcrypt from 'bcryptjs';
import { generateCodeToken, generateToken, isAuth } from '../utils.js';
import { generateCode } from '../helpers/generateCode.js';
import { sendResetCode } from '../helpers/mailer.js';
import userCodeRepository from '../repositories/userCode.repository.js';

async function sendResetPasswordCodeUser(email) {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error(`We didn't find this email address`);
  }
  const userCode = await userCodeRepository.getUserCodeById(user.id);
  if (userCode) {
    await userCodeRepository.deleteUserCode(userCode.id);
  }
  const code = generateCode(6);
  const codeToken = generateCodeToken(user.id, code);
  const newUserCode = await userCodeRepository.registerUserCode(
    user.id,
    code,
    codeToken
  );
  return sendResetCode(user.email, user.fullName, code);
}

async function validateResetCodeUser(email) {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error(`We didn't find this email address`);
  }
  const userCode = await userCodeRepository.getUserCodeById(user.id);
  const fullUser = { user, userCode, token: generateToken(user) };
  return fullUser;
}

async function signinUser(user) {
  console.log('signin - service');
  const userBd = await userRepository.getUserByEmail(user.email);
  console.log('userBd: ', userBd);
  if (userBd) {
    console.log('user.password: ', user.password);
    console.log('userBd.password: ', userBd.password);
    if (bcrypt.compareSync(user.password, userBd.password)) {
      console.log('2');
      return {
        id: userBd.id,
        name: userBd.fullName,
        email: userBd.email,
        type: userBd.type,
        token: generateToken(userBd),
      };
    }
  }
  throw new Error('Invalid email or password');
}

async function registerUser(user) {
  const userBd = await userRepository.getUserByEmail(user.email);
  if (userBd) {
    throw new Error('Email already registered!');
  }
  const newUser = { ...user, type: 'talent' };
  return await userRepository.registerUser(newUser);
}

async function oauthUser(user) {
  console.log('service - oauthUser');
  const userAlreadyExist = false;
  const userBd = await userRepository.getUserByEmail(user.email);
  console.log('userBd: ', userBd);
  //if (userBd) {
  //  userAlreadyExist = true;
  //}
  const newUser = { ...user, type: 'oauth' };
  return await userRepository.oauthUser(newUser, userBd);
}

async function updateUser(user, loggedUser) {
  if (user.id === loggedUser.id || loggedUser.type === 'admin') {
    return await userRepository.updateUser(user);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function changePasswordUser(user, loggedUser) {
  if (user.id === loggedUser.id || loggedUser.type === 'admin') {
    return await userRepository.changePasswordUser(user);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteUser(id, loggedUser) {
  if (id === loggedUser.id || loggedUser.type === 'admin') {
    return await userRepository.deleteUser(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getUsers(loggedUser) {
  if (loggedUser.type === 'admin') {
    return await userRepository.getUsers();
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getUser(id, loggedUser) {
  if (id === loggedUser.id || loggedUser.type === 'admin') {
    return await userRepository.getUser(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

export default {
  sendResetPasswordCodeUser,
  validateResetCodeUser,
  signinUser,
  registerUser,
  oauthUser,
  updateUser,
  changePasswordUser,
  deleteUser,
  getUsers,
  getUser,
};
