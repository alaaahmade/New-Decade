import Joi from 'joi';

export const securitySchema = Joi.object({
  email: Joi.string()
    .min(4)
    .max(60)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'string.empty': 'Email is required',
      'string.min': 'Email must be at least 4 characters',
      'string.max': 'Email must be less than 60 characters',
      'string.email': 'Email must be a valid email',
    }),
  name: Joi.string().min(3).max(60).messages({
    'string.min': 'Name must be at least 3 characters',
    'string.max': 'Name must be less than 60 characters',
  }),
  newPassword: Joi.string()
    .min(7)
    .max(60)
    .messages({
      'string.min': 'Password must be at least 7 characters',
      'string.max': 'Password must be less than 60 characters',
    })
    .allow(null),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).messages({
    'string.empty': 'Confirm password is required',
    'any.only': 'Passwords must match',
  }),
  password: Joi.string().min(7).max(60).messages({
    'string.min': 'Password must be at least 7 characters',
    'string.max': 'Password must be less than 60 characters',
  }),
});
