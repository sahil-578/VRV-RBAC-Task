import { body } from 'express-validator';

export const registerValidator = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email must be a valid email')
    .normalizeEmail()
    .toLowerCase(),
  body('password')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Password length short, min 2 char required'),
  body('password2').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password do not match');
    }
    return true;
  }),
];
