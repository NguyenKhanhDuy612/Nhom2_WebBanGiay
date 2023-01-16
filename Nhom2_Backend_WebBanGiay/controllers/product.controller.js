const productModel = require("../models/product.model.js");
const bcrypt = require("bcrypt");

module.exports = {
  //lấy toàn bộ sản phẩm
  getAllProducts(req, res) {
    productModel
      .getAllProduct()
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: "Get all products successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to get all products",
          data: error,
        });
      });
  },

  //lấy chi tiết sản phẩm
  getProductId(req, res) {
    const id = req.params.id;
    productModel
      .getProductId(id)
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: `Get product with id: ${id} successfully`,
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: `Failed to get product with id: ${id}`,
          data: error,
        });
      });
  },

  //lấy chi tiết sản phẩm theo từ khóa
  getProductWithKeyword(req, res) {
    const keyword = req.query.keyword;
    productModel
      .getProductWithKeyword(keyword)
      .then((res) => {
        return res;
      })
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: `Get product with keyword: ${keyword} successfully`,
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: `Failed to get product with keyword: ${keyword}`,
          data: error,
        });
      });
  },

  //thêm sản phẩm
  insertProduct(req, res) {
    const { tensp, chitiet, size, gia, public_id, url, id_dm } = req.body;
    if (!(public_id && url)) {
      return res.json({ message: "No image upload" });
    }
    const product = {
      tensp: tensp,
      chitiet: chitiet,
      size: size,
      gia: gia,
      public_id: public_id,
      url: url,
      createdAt: new Date(),
      updatedAt: new Date(),
      id_dm: id_dm,
    };
    productModel
      .insertProduct(product)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Added product successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to add product",
          data: error,
        });
      });
  },

  //chỉnh sửa sản phẩm
  updateProduct(req, res) {
    const id = req.params.id;
    const { tensp, chitiet, size, gia, public_id, url, id_dm } = req.body;
    const product = {
      tensp: tensp,
      chitiet: chitiet,
      size: size,
      gia: gia,
      public_id: public_id,
      url: url,
      updatedAt: new Date(),
      id_dm: id_dm,
    };

    productModel
      .updateProduct(product, id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Updated product successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to update product",
          data: error,
        });
      });
  },

  //xóa sản phẩm (xóa cứng)
  deleteProduct(req, res) {
    const id = req.params.id;
    productModel
      .deleteProduct(id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          msg: "Deleted product successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to delete category",
          data: err,
        });
      });
  },

  //sắp xếp sản phẩm tăng dần theo giá
  getAllProductAsc(req, res) {
    productModel
      .getAllProductAsc()
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: "Get all products ascending by price successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to get all products ascending by price",
          data: error,
        });
      });
  },

  //sắp xếp sản phẩm giảm dần theo giá
  getAllProductDesc(req, res) {
    productModel
      .getAllProductDesc()
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: "Get all products descending by price successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to get all products descending by price",
          data: error,
        });
      });
  },
};
