const CategoryController = {
  viewAllPage(req, res) {},
  async detailPage(req, res) {
    try {
      const { id } = req.params;
    } catch (error) {
      console.log(error);
    }
  },
  createPage(req, res) {
    // Página criara apenas categoria não tendo consulta ao DB diretamente
  },
  async listAll(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async create(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    const { id } = req.params;
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CategoryController;
