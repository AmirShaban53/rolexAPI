import logger from "../middleware/logger";

export const viewUserList = async (req, res) => {
  try {
    logger.info("view all users");
    return res.status(200).json({ message: "User list" });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    logger.info("new User successfully created");
    return res.status(200).json({
      message: "new User successfully created",
      UserItem: name,
    });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.query;
    logger.info("User successfully updated");
    return res.status(200).json({
      message: "User successfully updated",
      ID: id,
    });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;
    logger.info("User successfully deleted");
    return res
      .status(200)
      .json({ message: "User successfully deleted", ID: id });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};
