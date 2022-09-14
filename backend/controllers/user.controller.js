import { validateEmail, validatePassword } from '../helpers/validation.js';
import userService from '../services/user.service.js';
import { validateCodeToken } from '../utils.js';

async function sendResetPasswordCodeUser(req, res, next) {
  try {
    const user = req.body;
    if (!user.email) {
      throw new Error('The email is requerired!');
    }
    res.send(await userService.sendResetPasswordCodeUser(user.email));
    logger.info(`sendResetPasswordCodeUser`);
  } catch (err) {
    next(err);
  }
}

async function validateResetCodeUser(req, res, next) {
  try {
    const userBody = req.body;
    if (!userBody.email || !userBody.code) {
      throw new Error('The email and code are requerired!');
    }
    const fullUser = await userService.validateResetCodeUser(userBody.email);

    if (fullUser.userCode.code !== userBody.code) {
      throw new Error('Verification code is wrong!');
    }

    if (validateCodeToken(fullUser.userCode.codeToken)) {
      // const user = fullUser.user;
      res.status(200).json({
        user: fullUser.user,
        token: fullUser.token,
        message: 'Code validated successfully!',
      });
    } else {
      res.status(401).json({ message: 'Expired code!' });
    }

    logger.info(`validateResetCodeUser`);
  } catch (err) {
    next(err);
  }
}

async function signinUser(req, res, next) {
  try {
    console.log('signin - controller');
    res.send(await userService.signinUser(req.body));
    logger.info(`signinUser`);
  } catch (err) {
    next(err);
  }
}

async function registerUser(req, res, next) {
  try {
    let user = req.body;
    if (!user.email || !user.password) {
      throw new Error('The email and password are requerired!');
    }
    if (!validateEmail(user.email)) {
      throw new Error('Invalid email address!');
    }

    if (user.chkTpp === 'n' || !user.chkTpp) {
      throw new Error('The term and privacy policy are mandatory!');
    }
    if (typeof user.chkPc === 'undefined') {
      user.chkPc = 'n';
    }

    if (!validatePassword(user.password)) {
      throw new Error('Invalid password!');
    }
    res.send(await userService.registerUser(user));
    logger.info(`POST /registerUser - ${JSON.stringify(user)}`);
  } catch (err) {
    next(err);
  }
}

async function oauthUser(req, res, next) {
  console.log('controller - oauthUser');
  try {
    let user = req.body;
    console.log('controller - oauthUser - user: ', user);
    if (!user.email || !user.fullName) {
      throw new Error('The email and full name are requerired!');
    }
    res.send(await userService.oauthUser(user));
    logger.info(`POST /registerUser - ${JSON.stringify(user)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    let user = req.body;
    const loggedUser = req.user;
    if (
      !user.id ||
      !user.fullName ||
      !user.nickname ||
      !user.pronouns ||
      !user.city ||
      !user.ddi ||
      !user.phone ||
      !user.chkPc ||
      !user.jobTitleId ||
      !user.yearsOfXp
    ) {
      throw new Error(
        'The user id, fullname, nickname, pronouns, city, ddi, phone, personalization of communication, job title and years of xps are required!'
      );
    }
    user = await userService.updateUser(user, loggedUser);
    res.send(user);
    logger.info(`PUT /user - ${JSON.stringify(user)}`);
  } catch (err) {
    next(err);
  }
}

async function changePasswordUser(req, res, next) {
  try {
    let user = req.body;
    const loggedUser = req.user;
    console.log('loggedUser: ', loggedUser);
    if (!user.id || !user.password) {
      throw new Error('The id and password are requerired!');
    }
    user = await userService.changePasswordUser(user, loggedUser);
    res.send(user);
    logger.info(`PUT /user/change-password - ${JSON.stringify(user)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const loggedUser = req.user;
    await userService.deleteUser(parseInt(req.params.id), loggedUser);
    res.end();
    logger.info(`DELETE /user - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(await userService.getUsers(loggedUser));
    logger.info(`GET /user `);
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(await userService.getUser(parseInt(req.params.id), loggedUser));
    logger.info(`GET /users `);
  } catch (err) {
    next(err);
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
