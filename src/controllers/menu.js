const menuList = async (req, res) => {
  try {
    return res.status(200).json({ message: "menu list" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export {menuList}
