const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const checkAuth = require("../middleware/checkAuth.js");

//lấy tất cả thông tin tài khoản customer
router.get(
  "/customerAccount",
  checkAuth.checkAuthAdmin,
  userController.getAllCustomerAccount
);

//lấy tất cả thông tin tài khoản admin
router.get(
  "/adminAccount",
  checkAuth.checkAuthAdmin,
  userController.getAllAdminAccount
)

//lấy thông tin tài khoản đang đăng nhập
router.get("/profile", checkAuth.checkAuthAdmin, userController.getProfile);

//đăng ký tài khoản admin
router.post("/register", userController.registerAsAdmin);

//đăng nhập tài khoản admin
router.post("/login", userController.loginAsAdmin); 

//refresh token
router.get("/refreshToken", userController.refreshToken);

//Logout
router.get("/logout", userController.logout);

//chỉnh sửa thông tin tất cả tài khoản (admin)
router.patch(
  "/users/:id",
  checkAuth.checkAuthAdmin,
  userController.updateAllUser
);

//đổi mật khẩu cho tài khoản đang đăng nhập (admin)
router.patch(
  "/changePassword",
  checkAuth.checkAuthAdmin,
  userController.changePassword
);

//xóa tài khoản (admin)
router.delete(
  "/users/delete/:id",
  checkAuth.checkAuthAdmin,
  userController.deleteUser
);

//quên mật khẩu (Admin)
router.post("/forgotPassword", userController.forgotPasswordAdmin);

//hiển thị tài khoản đăng ký từ 3 ngày trước đến hiện tại
router.get("/newUser", checkAuth.checkAuthAdmin, userController.getNewUser);

module.exports = router;