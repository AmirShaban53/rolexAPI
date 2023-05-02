import logger from "../middleware/logger";

export const registerUser = async (req, res) => {
  try {
    logger.info("new user register");
    return res.status(200).json({ message: "new user successfully register" });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { name } = req.body;
    logger.info("user successfully logged in");
    return res.status(200).json({
      message: "user successfully logged in",
      UserItem: name,
    });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};
