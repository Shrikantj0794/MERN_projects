const validate = (schema) => async (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const message = result.error.issues[0].message;
      return res.status(400).json({ msg: message });
    }

    req.body = result.data;
    next();
  } catch (err) {
    const status = 422;
    const message = err.errors[0].message;

    const error = {
      status,
      message
    }
    console.log(error)
    next(error)
  
  }
};

module.exports = validate