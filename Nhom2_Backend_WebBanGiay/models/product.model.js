const knex = require("../db/database.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports = {
  //lấy ra toàn bộ sản phẩm
  async getAllProduct() {
    let products = await knex("sanpham")
      .join("danhmuc", "danhmuc.id", "=", "sanpham.id_dm")
      .select(
        "sanpham.id",
        "sanpham.tensp",
        "sanpham.chitiet",
        "sanpham .size",
        "sanpham.gia",
        "sanpham.public_id",
        "sanpham.url",
        "sanpham.id_dm",
        "danhmuc.tendm",
        "sanpham.createdAt",
        "sanpham.updatedAt",
        "sanpham.deleted_fg"
      );
    return products;
  },
  
  //lấy chi tiết từng sản phẩm
  async getProductId(id) {
    let product = await knex("sanpham").select("*").where("id", id);
    return product;
  },

  //lấy chi tiết sản phẩm theo từ khóa
  async getProductWithKeyword(keyword) {
    let product = await knex("sanpham").select("*").where('tensp', 'like', '%'+keyword+'%');
    return product;
  },

  //thêm sản phẩm
  async insertProduct(product) {
    let result = await knex("sanpham").insert(product).returning("id");
    return result;
  },

  //cập nhập sản phẩm
  async updateProduct(product, id) {
    let result = await knex("sanpham").update(product).where("id", id);
    return result;
  },

  //xóa sản phẩm (xóa cứng)
  async deleteProduct(id) {
    let result = await knex("sanpham").del().where({
      id: id,
    });
    return result;
  },
  
  //sắp xếp sản phẩm tăng dần theo giá
  async getAllProductAsc() {
    let products = await knex("sanpham")
      .join("danhmuc", "danhmuc.id", "=", "sanpham.id_dm")
      .select(
        "sanpham.id",
        "sanpham.tensp",
        "sanpham.chitiet",
        "sanpham .size",
        "sanpham.gia",
        "sanpham.public_id",
        "sanpham.url",
        "sanpham.id_dm",
        "danhmuc.tendm",
        "sanpham.createdAt",
        "sanpham.updatedAt",
        "sanpham.deleted_fg"
      )
      .orderBy("sanpham.gia");
    return products;
  },

  //sắp xếp sản phẩm giảm dần theo giá
  async getAllProductDesc() {
    let products = await knex("sanpham")
      .join("danhmuc", "danhmuc.id", "=", "sanpham.id_dm")
      .select(
        "sanpham.id",
        "sanpham.tensp",
        "sanpham.chitiet",
        "sanpham .size",
        "sanpham.gia",
        "sanpham.public_id",
        "sanpham.url",
        "sanpham.id_dm",
        "danhmuc.tendm",
        "sanpham.createdAt",
        "sanpham.updatedAt",
        "sanpham.deleted_fg"
      )
      .orderBy("sanpham.gia", "desc");
    return products;
  },
};