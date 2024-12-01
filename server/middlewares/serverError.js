// eslint-disable-next-line no-unused-vars, consistent-return
export const serverError = (err, req, res, next) => {
  console.log(err);

  if (err.status) {
    return res.status(err.status).json({
      error: true,
      data: {
        status: err.status,
        message: err.message,
      },
    });
  }

  res.status(500).json({ error: true, data: { message: err.message } });
};
