const errorMappings = {
  JsonWebTokenError: 401,
  Unauthorized: 401,
  ValidationError: 403,
  NotFound: 404,
};

// eslint-disable-next-line consistent-return
export const errorWrapper = controller => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    if (error) {
      return next(error);
    }
    const customError = error;
    const status = errorMappings[customError?.name];
    customError.status = status;
    next(customError);
  }
};
