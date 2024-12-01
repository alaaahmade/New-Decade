export class CustomError extends Error {
  status;

  isCustomError = true;

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export const isCustomError = err => {
  return err.isCustomError ?? false;
};
