const express = require('express');
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const port = 5000;

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.get("/", (req, res) => {
  res.send('Hello World!abc');
});

//cổng admin
const adminRouter = require("./routers/admin.router.js");
//cổng customer 
const customerRouter = require("./routers/customer.router.js");
//cổng product
const productRouter = require("./routers/product.router.js");
//cổng cart
const cartRouter = require("./routers/cart.router.js");
//cổng bill
const billRouter = require("./routers/bill.router.js");
//cổng billDetail
const billDetailRouter = require("./routers/billDetail.router.js");
//cổng category
const categoryRouter = require("./routers/category.router.js");
//cổng voucherRouter
const voucherRouter = require("./routers/voucher.router.js");
//cổng rating
const ratingRouter = require("./routers/rating.router.js")
//cổng payment
const paymentRouter = require("./routers/payment.router.js")
//cổng address
const addressRouter = require("./routers/address.router.js")
//cổng upload ảnh
const upload = require("./routers/upload.js");
const loginGoogle = require("./routers/loginGoogle");

app.use("/cloud/", upload);
app.use("/admin/", adminRouter);
app.use("/customer/", customerRouter);
app.use("/product/", productRouter);
app.use("/cart/", cartRouter);
app.use("/bill/", billRouter);
app.use("/billDetail/", billDetailRouter);
app.use("/category/", categoryRouter);
app.use("/voucher/", voucherRouter);
app.use("/rating/", ratingRouter);
app.use("/payment/", paymentRouter);
app.use("/address/", addressRouter);
app.use("/auth/google/", loginGoogle);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});