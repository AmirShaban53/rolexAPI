import logger from "../middleware/logger";

//TO DO
//view menu items
//view single item
//create new item
//update new item
//delete item
export const viewMenuItems = async (req, res) => {
  try {
    logger.info("hello there");
    return res.status(200).json({ message: "menu list" });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const createMenuItem = async (req, res) => {
  try {
    const { name } = req.body;
    logger.info("new menu item successfully created");
    return res
      .status(200)
      .json({ message: "new menu item successfully created", menuItem: name });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.query;
    logger.info("Menu item successfully updated");
    return res.status(200).json({
      message: "Menu item successfully updated",
      ID: id,
    });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.query;
    logger.info("Menu item successfully deleted");
    return res
      .status(200)
      .json({ message: "Menu item successfully deleted", ID: id });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};
