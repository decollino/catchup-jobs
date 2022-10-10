import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    console.log('isauth - authorization: ', authorization);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        // console.log('decode: ', decode);
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

export const generateCodeToken = (userId, code) => {
  // console.log('user: ', user);
  return jwt.sign(
    {
      userId: userId,
      code: code,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '5m',
    }
  );
};

export function validateCodeToken(codeToken) {
  let result = '';
  jwt.verify(codeToken, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      console.log('false');
      result = false;
    } else {
      console.log('true');
      result = true;
    }
  });
  return result;
}

// export const validateCodeToken = (codeToken) => {
//   jwt.verify(codeToken, process.env.JWT_SECRET, (err, decode) => {
//     if (err) {
//       console.log('false');
//       return false;
//     } else {
//       console.log('true');
//       return true;
//     }
//   });
// };
