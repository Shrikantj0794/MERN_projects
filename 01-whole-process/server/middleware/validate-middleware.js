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
    console.error(err);
    res.status(500).json({ msg: "An unexpected error occurred" });
  }
};

module.exports = validate