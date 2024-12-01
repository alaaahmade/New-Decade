export const errorWrapper = controller => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        error.status = 401;
      } else if (error.name === 'ValidationError') {
        error.status = 422;
      } else if (error.name === 'Unauthorized') {
        error.status = 401;
      } else if (error.name === 'CATEGORY NOT FOUND') {
        error.status = 404;
      } else if (error.name === 'PRODUCTS NOT FOUND') {
        error.status = 404;
      } else if (
        error.name ===
        "The email address you entered isn't connected to an account"
      ) {
        error.status = 404;
      }
      next(error);
    }
  };
};
