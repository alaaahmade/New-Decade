import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Client = mongoose.model('Client', clientSchema);

export const mokClients = async () => {
  const client = await Client.findOne({});
  if (!client) {
    await Promise.all(
      [...Array(10)].map(async (user, i) => {
        const newClient = await Client.create({
          email: `user${i}@gmail.com`,
        });
        await newClient.save();
      }),
    );
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `Customer Client is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Client is exist.`);
  }
};
