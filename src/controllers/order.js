import logger from "../middleware/logger";

//TO DO
//view Order items
//view single item
//create new item
//update new item
//delete item
export const viewOrderList = async (req, res) => {
  try {
    logger.info("hello there");
    return res.status(200).json({ message: "Order list" });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const createOrderItem = async (req, res) => {
  try {
    const { name } = req.body;
    logger.info("new Order item successfully created");
    return res
      .status(200)
      .json({
        message: "new Order item successfully created",
        OrderItem: name,
      });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.query;
    logger.info("Order item successfully updated");
    return res.status(200).json({
      message: "Order item successfully updated",
      ID: id,
    });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.query;
    logger.info("Order item successfully deleted");
    return res
      .status(200)
      .json({ message: "Order item successfully deleted", ID: id });
  } catch (error) {
    logger.info(error.message);
    return res.status(500).json({ error: error.message });
  }
};
