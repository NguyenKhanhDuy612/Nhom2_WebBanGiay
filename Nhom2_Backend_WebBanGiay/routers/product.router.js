const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller.js");
const checkAuth = require("../middleware/checkAuth.js")

//GET all product
router.get("/", productController.getAllProducts);

//GET one product
router.get("/:id", productController.getProductId);

//GET product with keyword
router.get("/search", productController.getProductWithKeyword);

//POST
router.post("/", checkAuth.checkAuthAdmin, productController.insertProduct);

//PATCH
router.patch("/:id", checkAuth.checkAuthAdmin, productController.updateProduct);

//DELETE
router.delete(
    "/delete/:id",
    checkAuth.checkAuthAdmin,
    productController.deleteProduct
);

//sắp xếp sản phẩm tăng dần theo giá
router.get("/sort/asc", productController.getAllProductAsc);

//sắp xếp sản phẩm giảm dần theo giá
router.get("/sort/desc", productController.getAllProductDesc);

module.exports = router;