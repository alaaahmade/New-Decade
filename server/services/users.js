// import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config/index.js';
import { SignInSchema, subscribeSchema } from '../validation/user.js';
import { User } from '../models/index.js';
import { CustomError } from '../helpers/index.js';
import { Client } from '../models/Client.js';
import { securitySchema } from '../validation/security.js';

export const isAuthenticated = async req => {
  const clients = await Client.find({});

  return {
    status: 200,
    user: { ...req.user, clients: clients.length },
  };
};

export const signIn = async req => {
  const { email, password } = req.body;
  await SignInSchema({ email, password });

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(
      404,
      "The email address you entered isn't connected to an account",
    );
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new CustomError(422, "The password that you've entered is incorrect");
  }
  const clients = await Client.find({});

  const payload = {
    name: user.name,
    email: user.email,
    role: user.role,
    userId: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY);

  return {
    status: 200,
    data: {
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      clients: clients.length,
    },
    token,
  };
};

export const subscribeService = async req => {
  const { email } = req.body;
  await subscribeSchema({ email });
  const CheckClient = await Client.findOne({ email });
  if (CheckClient) {
    return {
      status: 401,
      msg: 'Already Exist',
    };
  }
  const newClient = await Client.create({ email });
  newClient.save();
  return {
    status: 200,
    msg: 'Subscribed Successfully',
  };
};

export const confirmPassword = async req => {
  const { email, password } = req.body;
  await SignInSchema({ email, password });

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(
      404,
      "The email address you entered isn't connected to an account",
    );
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new CustomError(422, "The password that you've entered is incorrect");
  }

  return {
    status: 200,
    msg: "The password that you've entered is correct",
  };
};

// export const signup = async (req) => {
//   const { name, email, role, password, confirmPassword } = req.body;
//   await SignUpSchema({
//     name,
//     email,
//     role,
//     password,
//     confirmPassword,
//   });
//   const user = await User.findOne({ where: { email } });
//   if (user) {
//     throw new CustomError(400, 'You have account');
//   }

//   const newUser = await User.create({
//     name,
//     email,
//     role,
//     password: await bcrypt.hash(password, 15),
//   });

//   const token = await sign(
//     {
//       name: newUser.name,
//       email: newUser.email,
//       role: newUser.role,
//       id: newUser.dataValues.id,
//     },
//     environment.secretKey as Secret,
//   );
//   return {
//     status: 201,
//     data: {
//       id: newUser.id,
//       name: newUser.name,
//       role: newUser.role,
//       email: newUser.email,
//     },
//     token,
//   };
// };

// export const security = async (req) => {
//   const user = await User.findByPk(req.user.id, {
//     attributes: ['id', 'name', 'email', 'role'],
//   });

//   return {
//     status: 200,
//     data: user,
//   };
// };

export const EditSecurity = async req => {
  const newData = req.body;
  const { password } = req.body;

  const userData = await User.findOne({ role: 'ADMIN' });

  const result = await bcrypt.compare(password, userData?.password);

  if (result) {
    await securitySchema.validateAsync({
      ...newData,
    });

    if (newData.newPassword) {
      const newPassword = await bcrypt.hash(newData.newPassword, 15);
      userData.password = newPassword;
    }
    if (newData.name) {
      userData.name = newData.name;
    }
    if (newData.email) {
      userData.email = newData.email;
    }

    await userData.save();

    const user = await User.findOne({ role: 'ADMIN' });
    const payload = {
      name: user.name,
      email: user.email,
      role: user.role,
      userId: user.id,
    };
    const token = jwt.sign(payload, SECRET_KEY);

    return {
      status: 200,
      data: {
        userId: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      token,
    };
  }
  throw new CustomError(422, "The password that you've entered is incorrect");
};

export const clientsService = async () => {
  const clients = await Client.find({});
  const newClients = clients.map((e, i) => ({
    id: i,
    _id: `${e._id}`,
    createdAt: new Date(e.createdAt),
    user: {
      id: `${e._id}`,
      email: e.email,
      avatarUrl: e.email,
      ipAddress: e._id,
    },
  }));
  return {
    status: 200,
    clients: newClients,
  };
};

export const deleteClientsService = async req => {
  const { id } = req.params;
  await Client.deleteOne({ _id: id });
  return {
    status: 201,
    msg: 'Deleted Successfully',
  };
};
