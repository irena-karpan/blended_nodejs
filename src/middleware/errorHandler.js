import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const isProd = process.env.NODE_ENV === 'production';
  if (createHttpError.isHttpError(err)) {
    res.status(err.status).json({ message: err.message || err.name });
  }
  res
    .status(500)
    .json({ message: isProd ? 'Something went wrong' : err.message });
};
