import joi from 'joi';

export const SignInSchema = body => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).max(50).required(),
  });
  return schema.validateAsync(body);
};

export const subscribeSchema = body => {
  const schema = joi.object({
    email: joi.string().email().required(),
  });
  return schema.validateAsync(body);
};
