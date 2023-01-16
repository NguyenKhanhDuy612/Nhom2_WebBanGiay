-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2022 at 10:07 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `order_shopshoes`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_info`
--

CREATE TABLE `app_info` (
  `slug` int(11) NOT NULL,
  `value` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_info`
--

INSERT INTO `app_info` (`slug`, `value`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(1, 'value1', '2021-12-12 13:45:25', '2021-12-12 13:55:18', 0),
(2, 'value2', '2021-12-12 13:45:35', '2021-12-12 13:45:35', 0);

-- --------------------------------------------------------

--
-- Table structure for table `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `id` int(11) NOT NULL,
  `id_hd` int(11) NOT NULL,
  `don_gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong_gia` int(11) NOT NULL,
  `id_sp` int(11) NOT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chitiethoadon`
--

INSERT INTO `chitiethoadon` (`id`, `id_hd`, `don_gia`, `soluong`, `tong_gia`, `id_sp`, `ghi_chu`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(88, 160, 169000, 2, 338000, 147, 'Gói giày cẩn thận', '2022-01-03 23:37:45', '2022-01-03 23:37:45', 0),
(89, 160, 129000, 1, 129000, 148, 'Không cần giấy gói giày', '2022-01-03 23:37:45', '2022-01-03 23:37:45', 0);

-- --------------------------------------------------------

--
-- Table structure for table `danhgia`
--

CREATE TABLE `danhgia` (
  `id` int(11) NOT NULL,
  `id_hd` int(11) NOT NULL,
  `diem_danhgia` int(11) NOT NULL,
  `binhluan` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `tendm` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `tendm`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(16, 'Giày thể thao', '2021-12-07 16:55:06', '2021-12-07 16:55:06', 0),
(17, 'Giày đá banh', '2021-12-07 16:55:06', '2021-12-07 16:55:06', 0),
(18, 'Dép trong nhà', '2021-12-07 23:22:19', '2021-12-07 23:36:16', 0),
(19, 'Giày sandal', '2021-12-07 23:30:34', '2021-12-07 23:30:34', 0),
(20, 'Giày công sở', '2021-12-08 03:34:10', '2021-12-08 03:34:10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `danhsach_diachi`
--

CREATE TABLE `danhsach_diachi` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhsach_diachi`
--

INSERT INTO `danhsach_diachi` (`id`, `id_nd`, `diachi`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(7, 14, '237/32 Đặng Tất, Phường Vĩnh Hải, Nha Trang', '2021-12-12 13:06:09', '2021-12-12 13:06:09', 0),
(8, 19, '4A Mạc Đĩnh Chi, Phường Phước Tiến, Nha Trang', '2021-12-14 13:17:02', '2021-12-14 13:17:02', 0),
(9, 31, '121 Nguyễn Trãi, Phước Tân, Nha Trang, Khánh Hòa', '2021-12-31 05:59:48', '2021-12-31 05:59:48', 0),
(10, 32, '224 đường 2/4, Phường Vĩnh Hải, Nha Trang , Khánh Hòa', '2021-12-31 06:00:24', '2021-12-31 06:00:24', 0),
(11, 41, '4C KTT Bình Khê, Phường Phước Tân, Nha Trang, Khánh Hòa', '2021-12-31 07:31:40', '2021-12-31 07:31:40', 0),
(12, 47, 'thôn ABC,  xã Ninh Hà,  huyện Vạn Ninh,  tỉnh Khánh Hòa', '2022-01-08 10:49:20', '2022-01-08 10:49:20', 0);

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

CREATE TABLE `giohang` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `id_sp` int(11) NOT NULL,
  `don_gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong_gia` int(11) NOT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `giohang`
--

INSERT INTO `giohang` (`id`, `id_nd`, `id_sp`, `don_gia`, `soluong`, `tong_gia`, `ghi_chu`, `createdAt`, `updatedAt`) VALUES
(84, 47, 4, 209000, 1, 209000, '', '2022-01-08 10:52:55', '2022-01-08 10:52:55');

-- --------------------------------------------------------

--
-- Table structure for table `hinhthucthanhtoan`
--

CREATE TABLE `hinhthucthanhtoan` (
  `id` int(11) NOT NULL,
  `ten_hinhthuc` varchar(255) NOT NULL,
  `public_id` text CHARACTER SET utf8 NOT NULL,
  `url` text CHARACTER SET utf8 NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hinhthucthanhtoan`
--

INSERT INTO `hinhthucthanhtoan` (`id`, `ten_hinhthuc`, `public_id`, `url`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(1, 'Viettel Payment', 'payments/l9psqjbwjt0smztdcult', 'https://res.cloudinary.com/order-food/image/upload/v1639294538/payments/l9psqjbwjt0smztdcult.jpg', '2021-12-12 08:38:52', '2021-12-12 08:38:52', 0),
(2, 'Thẻ ATM', 'payments/c75baoppiibf52dko5bs', 'https://res.cloudinary.com/order-food/image/upload/v1639303148/payments/c75baoppiibf52dko5bs.jpg', '2021-12-12 17:00:08', '2021-12-12 17:00:08', 0),
(4, 'COD', 'payments/c75baoppiibf52dko5bs', 'https://res.cloudinary.com/order-food/image/upload/v1639303148/payments/c75baoppiibf52dko5bs.jpg', '2021-12-14 13:26:07', '2021-12-14 13:26:07', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `id_thanhtoan` int(11) NOT NULL,
  `id_diachi` int(11) NOT NULL,
  `ngaydathang` datetime NOT NULL,
  `tong_sl` int(11) NOT NULL,
  `tongtien_gh` int(11) NOT NULL,
  `id_voucher` varchar(10) NOT NULL DEFAULT 'Coupon0',
  `tong_hd` int(11) NOT NULL,
  `tinhtrangHD` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`id`, `id_nd`, `id_thanhtoan`, `id_diachi`, `ngaydathang`, `tong_sl`, `tongtien_gh`, `id_voucher`, `tong_hd`, `tinhtrangHD`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(156, 19, 1, 8, '2022-01-03 17:23:33', 1, 500000, 'Coupon0', 500000, 'Đã thanh toán', '2022-01-03 17:23:33', '2022-01-03 17:23:33', 0),
(157, 31, 2, 9, '2022-01-03 17:24:11', 1, 1200000, 'Coupon0', 1200000, 'Đã thanh toán', '2022-01-03 17:24:11', '2022-01-03 17:24:11', 0),
(158, 14, 2, 7, '2022-01-03 17:24:33', 1, 1250000, 'Coupon0', 1250000, 'Đã thanh toán', '2022-01-03 17:24:33', '2022-01-03 17:24:33', 0),
(159, 32, 1, 10, '2022-01-03 17:25:13', 1, 3200000, 'Coupon0', 3200000, 'Đã thanh toán', '2022-01-03 17:25:13', '2022-01-03 17:25:13', 0),
(160, 19, 1, 8, '2022-01-03 23:37:45', 3, 467000, 'Coupon5', 443650, 'Đã thanh toán', '2022-01-03 23:37:45', '2022-01-03 23:37:45', 0),
(161, 31, 1, 9, '2022-01-03 23:41:39', 3, 210000, 'Coupon0', 210000, 'Đã thanh toán', '2022-01-03 23:41:39', '2022-01-03 23:41:39', 0),
(162, 19, 1, 9, '2022-01-04 00:06:34', 1, 169000, 'Coupon0', 169000, 'Đã thanh toán', '2022-01-04 00:06:34', '2022-01-04 00:06:34', 0),
(163, 41, 1, 9, '2022-01-04 01:23:07', 6, 414000, 'Coupon0', 414000, 'Đã thanh toán', '2022-01-04 01:23:07', '2022-01-04 01:23:07', 0),
(164, 41, 1, 9, '2022-01-04 01:23:50', 5, 245000, 'Coupon10', 220500, 'Đã nhận hàng', '2022-01-04 01:23:50', '2022-01-04 01:23:50', 0),
(167, 47, 4, 12, '2022-01-08 10:52:44', 1, 319000, 'Coupon0', 319000, 'Chưa thanh toán', '2022-01-08 10:52:44', '2022-01-08 10:52:44', 0);

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `id` int(11) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dienthoai` varchar(12) NOT NULL,
  `public_id` text DEFAULT 'users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b',
  `url` text DEFAULT 'https://res.cloudinary.com/order-food/image/upload/v1642066718/users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b.jpg	',
  `google_id` varchar(50) DEFAULT NULL,
  `kieu_dangnhap` varchar(50) NOT NULL DEFAULT 'Bình thường',
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`id`, `hoten`, `username`, `password`, `refresh_token`, `ngaysinh`, `gioitinh`, `email`, `dienthoai`, `public_id`, `url`, `google_id`, `kieu_dangnhap`, `admin`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(14, 'Nguyễn Anh Phương', 'meo', '$2b$10$aeFsPyBdMrbH80YVjEYx6.eIgzXoDBX6DFgJn/.h4.pBV7KHrRsWS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFkbWluIjowLCJpYXQiOjE2NDIwNjIwNTAsImV4cCI6MTY0MjE0ODQ1MH0.DeZrspCek9CINpIuMsYHWPQg84k06AoMJUFBcqrDfaM', '2000-12-20', 1, 'viet@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 0, '2021-12-07 15:22:20', '2021-12-22 18:42:43', 0),
(19, 'Lê Nguyễn Hoàng Anh', 'hoanganh', '$2b$10$xCL5Jy6xRcYDxJoyLkOcJODxedHgsPm01kW8GlF/mUuhTQkByE4sO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImFkbWluIjowLCJpYXQiOjE2NDEyMjk1MjQsImV4cCI6MTY0MTMxNTkyNH0._1PkOANGf8-EhymW1fZFnU08W_Axm_jM7mWy1AuW6LI', '2000-01-01', 0, 'hoanganh@gmail.com', '0123456789', 'users/xrucgmehttfidkewd9d4', 'https://res.cloudinary.com/order-food/image/upload/v1640015062/users/xrucgmehttfidkewd9d4.jpg', NULL, 'Bình thường', 0, '2021-12-10 15:43:01', '2021-12-20 22:44:52', 0),
(31, 'Nguyễn Bảo Ngọc', 'katie.nguyen', '$2b$10$I0kKW1Nd8yNJQBJLweEg3OF27x01cPlst1RSJGHKogDB9g.xn1NYy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImFkbWluIjowLCJpYXQiOjE2NDEyMjc5NTcsImV4cCI6MTY0MTMxNDM1N30.zXw3cChXTz6M4Flx_jdK4v1MgWeGQM3SHJjOCKbscUg', '2000-01-01', 0, 'katie@gmail.com', '0123456789', 'users/jauvqlgagdo2ipemcvjg', 'https://res.cloudinary.com/order-food/image/upload/v1640015156/users/jauvqlgagdo2ipemcvjg.jpg', NULL, 'Bình thường', 0, '2021-12-20 22:46:41', '2021-12-20 22:46:41', 0),
(32, 'Phạm Thị Tuyết Hạnh', 'hanh', '$2b$10$sxF1trJNZ3M1CGelKO0Uq.DmTsTAxBQsTLWNWZlAlbJeOQjHx5VnC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImFkbWluIjowLCJpYXQiOjE2NDAwNzg3NTAsImV4cCI6MTY0MDE2NTE1MH0.H7Yjbg46vhH3Cb-6s6GyxHfLz1xgaPQQanMey-iSfH8', '2000-12-31', 0, 'hanh@gmail.com', '0123456789', 'users/nsw7nwqnshh9rizlysf4', 'https://res.cloudinary.com/order-food/image/upload/v1640062835/users/nsw7nwqnshh9rizlysf4.jpg', NULL, 'Bình thường', 0, '2021-12-20 22:48:38', '2021-12-21 12:03:31', 0),
(40, 'Thinh3', 'thinh3', '$2b$10$ktAwum/W8E4YeflVKhQ2o.SaRUAgKvb2DYwYrq0X/E8tCsUBj7rNW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDAsImFkbWluIjoxLCJpYXQiOjE2NDEyODg1ODQsImV4cCI6MTY0MTM3NDk4NH0.vtX7whlLh1Ela1pwXhqmGCXxyI6dfnSd5dDW8jbMr4I', '2000-06-06', 0, 'slthinhtu3@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 1, '2021-12-24 19:42:59', '2021-12-24 19:42:59', 0),
(41, 'Thinh2', 'thinh2', '$2b$10$WkN2QbHUEcfUw0gW6hnMHenQwFGzY79EzIEAxVe8s5ZCqynoOHZa2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImFkbWluIjowLCJpYXQiOjE2NDEyMzQwODAsImV4cCI6MTY0MTMyMDQ4MH0.29otLrB_9gyOXqf4j9dbfMPd8eMFz4RbZKKoWxRLNvY', '2000-12-30', 1, 'thinh.nd.60cntt@ntu.edu.vn', '0123456789', '', '', NULL, 'Bình thường', 0, '2021-12-24 19:46:49', '2021-12-24 19:46:49', 0),
(47, 'thái văn nam', 'thainam', '$2b$10$q08vJQYEA0dDtW97P25xp..BYKuNMQIEiTPifZhSqWUxCxzrWXkOq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImFkbWluIjowLCJpYXQiOjE2NDE2MTQ0NjMsImV4cCI6MTY0MTcwMDg2M30.FJxAWwlBTi2kWpg3UUOjzaLGKt5panT-lq6zBDK31Sg', '2000-09-12', 1, 'thaivannamc4@gmail.com', '0911495728', '', '', NULL, 'Bình thường', 0, '2022-01-08 07:51:09', '2022-01-08 07:51:09', 0),
(50, 'Bé Dũng', 'dung', '$2b$10$ZLUzAmsgbmAdLCHkoVOGEOfrIrfxh5i5.aLR4R3L0NWu863wVDJOy', NULL, '2000-06-06', 0, 'quocdung@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 1, '2022-01-13 15:21:17', '2022-01-13 15:21:17', 0),
(51, 'tatat', 'tata', '$2b$10$bEV136RpbxUqSRRJ6nVoCupcBnCfbpwL0OCaxCHSMsidbNrJn0SU.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImFkbWluIjoxLCJpYXQiOjE2NzE0Mzc3NDgsImV4cCI6MTY3MTUyNDE0OH0.QdbgZtW6Ts2oaK2MYdX5HvWBCorrhUMv1g_gk30JIN0', '2000-05-31', 1, 'tai@gmail.com', '3434654753', 'users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b', 'https://res.cloudinary.com/order-food/image/upload/v1642066718/users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b.jpg	', NULL, 'Bình thường', 1, '2022-12-19 15:08:29', '2022-12-19 15:08:29', 0),
(52, 'tatat', 'tata', '$2b$10$sWhyEr24q2QNAnUe8ok9Becf6XKjSUZ09wgd3migI7xmxLPNFIQBq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIsImFkbWluIjoxLCJpYXQiOjE2NzE0Mzg2ODYsImV4cCI6MTY3MTUyNTA4Nn0.bs73MrWl6Uahycr1p_JEpB3OVugg-LNe7ovaGhBeNI8', '2000-05-31', 1, 'tai1@gmail.com', '3434654753', 'users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b', 'https://res.cloudinary.com/order-food/image/upload/v1642066718/users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b.jpg	', NULL, 'Bình thường', 1, '2022-12-19 15:15:57', '2022-12-19 15:15:57', 0);

-- --------------------------------------------------------

--
-- Table structure for table `phieu_giamgia`
--

CREATE TABLE `phieu_giamgia` (
  `id` varchar(10) NOT NULL,
  `ten_phieu` varchar(255) NOT NULL,
  `giatri` int(11) NOT NULL,
  `mota` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phieu_giamgia`
--

INSERT INTO `phieu_giamgia` (`id`, `ten_phieu`, `giatri`, `mota`) VALUES
('Coupon0', 'Mã giảm giá 0%', 0, 'Phiếu giảm giá 0% cho hóa đơn '),
('Coupon10', 'Mã giảm giá 10%', 10, 'Phiếu giảm giá 10% cho hóa đơn\n'),
('Coupon5', 'Mã giảm giá 5%', 5, 'Phiếu giảm giá 5% cho hóa đơn');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `tensp` varchar(50) NOT NULL,
  `public_id` text NOT NULL,
  `url` text NOT NULL,
  `size` varchar(1) NOT NULL,
  `chitiet` text NOT NULL,
  `gia` int(11) NOT NULL,
  `id_dm` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`id`, `tensp`, `public_id`, `url`, `size`, `chitiet`, `gia`, `id_dm`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(2, 'Kamito Velocidad Legend IC', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 600000, 16, '2021-12-11 02:50:21', '2021-12-11 02:50:21', 0),
(3, 'Jordan 1 Retro High OG', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 900000, 16, '2021-12-11 02:50:21', '2021-12-11 02:50:21', 0),
(4, 'New Balance 550', '', 'https://res.cloudinary.com/order-food/image/upload/v1639197221/products/asxqwkvfznxivys7rjsb.pnghttps://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 209000, 16, '2021-12-11 03:05:27', '2021-12-11 03:05:27', 0),
(5, 'Nike Hyperadapt 1.0', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 209000, 16, '2021-12-11 03:05:27', '2021-12-11 03:05:27', 0),
(6, 'Represent Terrier', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 209000, 16, '2021-12-11 03:06:54', '2021-12-11 03:06:54', 0),
(7, 'Nike Lunarcharge BN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 16, '2021-12-11 03:06:54', '2021-12-11 03:06:54', 0),
(8, 'ULTRABOOST DNA SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 16, '2021-12-11 03:09:25', '2021-12-11 03:09:25', 0),
(10, 'SUPERSTAR SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 16, '2021-12-11 03:09:25', '2021-12-11 03:09:25', 0),
(12, 'ULTRA 4DFWD SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 16, '2021-12-11 03:11:02', '2021-12-11 03:11:02', 0),
(13, 'NMD R1 PRIMEBLUE SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 16, '2021-12-11 03:11:02', '2021-12-11 03:11:02', 0),
(15, 'Nike Air Huarache', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_5_Lo%E1%BA%A1i_Th%E1%BB%8Bt_%C4%90%E1%BA%B7c_Bi%E1%BB%87t-removebg-preview_e1dzd5.pnghttps://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 16, '2021-12-11 03:12:51', '2021-12-11 03:12:51', 0),
(16, 'Nike SB Shane', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 179000, 16, '2021-12-11 03:12:51', '2021-12-11 03:12:51', 0),
(18, 'Nike SB Zoom Blazer Mid', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 179000, 16, '2021-12-11 03:14:29', '2021-12-11 03:14:29', 0),
(19, 'Nike SB Zoom Blazer Mid', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 179000, 16, '2021-12-11 03:14:29', '2021-12-11 03:14:29', 0),
(20, 'Nike SB Blazer Zoom Low', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 179000, 16, '2021-12-11 03:19:11', '2021-12-11 03:19:11', 0),
(21, 'FORUM LOW W', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 179000, 16, '2021-12-11 03:19:11', '2021-12-11 03:19:11', 0),
(24, 'HU NMD ANIMAL PRINT SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 179000, 16, '2021-12-11 03:21:10', '2021-12-11 03:21:10', 0),
(25, 'ULTRA 4D SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/C%C3%A1nh_g%C3%A0_n%C6%B0%E1%BB%9Bng_BBQ__10_mi%E1%BA%BFng_-removebg-preview_kzvzkw.pnghttps://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'L', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 199000, 19, '2021-12-11 03:23:17', '2021-12-11 03:23:17', 0),
(26, 'Nike Blazer Low 77', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/C%C3%A1nh_g%C3%A0_n%C6%B0%E1%BB%9Bng_BBQ__6_mi%E1%BA%BFng_-removebg-preview_kb0ijp.pnghttps://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 129000, 19, '2021-12-11 03:23:17', '2021-12-11 03:23:17', 0),
(27, 'HELLO KITTY FORUM LOW SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 49000, 19, '2021-12-11 03:24:23', '2021-12-11 03:24:23', 0),
(28, 'HELLO KITTY ASTIR SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/B%C3%A1nh_Ph%C3%B4_Mai_Xo%E1%BA%AFn-removebg-preview_usfmdy.pnghttps://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 99000, 19, '2021-12-11 03:24:23', '2021-12-11 03:24:23', 0),
(29, 'ADIDAS ASTIR SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 59000, 19, '2021-12-11 03:25:49', '2021-12-11 03:25:49', 0),
(30, 'OZWEEGO SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 99000, 19, '2021-12-11 03:25:49', '2021-12-11 03:25:49', 0),
(31, 'OZNOVA SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 69000, 19, '2021-12-11 03:27:04', '2021-12-11 03:27:04', 0),
(32, 'ADISTAR SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'L', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 189000, 19, '2021-12-11 03:27:04', '2021-12-11 03:27:04', 0),
(33, '4DFWD PULSE 2 SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 129000, 19, '2021-12-11 03:28:15', '2021-12-11 03:28:15', 0),
(34, 'SOLAR GLIDE 5 GORE-TEX SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 319000, 19, '2021-12-11 03:28:15', '2021-12-11 03:28:15', 0),
(35, 'TERREX FREE HIKER 2 GORE-TEX HIKING SHOE', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 279000, 19, '2021-12-11 03:29:29', '2021-12-11 03:29:29', 0),
(36, 'TERREX FREE HIKER COLD.RDY HIKING BOOTS', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 79000, 19, '2021-12-11 03:29:29', '2021-12-11 03:29:29', 0),
(37, 'TERREX TRAILMAKER GORE-TEX HIKING SHOES', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 119000, 19, '2021-12-11 03:30:41', '2021-12-11 03:30:41', 0),
(38, 'GIẦY VẢI THƯỢNG ĐÌNH HV 14-3', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 109000, 19, '2021-12-11 03:30:41', '2021-12-11 03:30:41', 0),
(39, 'GIẦY THỂ THAO THỜI TRANG THƯỢNG ĐÌNH Q01', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 129000, 17, '2021-12-11 03:32:14', '2021-12-11 03:32:14', 0),
(40, 'GIẦY THƯỢNG ĐÌNH TD9916', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 99000, 17, '2021-12-11 03:32:14', '2021-12-11 03:32:14', 0),
(41, 'GIẦY VẢI THƯỢNG ĐÌNH KK14-2', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 129000, 17, '2021-12-11 03:33:38', '2021-12-11 03:33:38', 0),
(42, 'GIẦY VẢI THƯỢNG ĐÌNH BD05', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 99000, 17, '2021-12-11 03:33:38', '2021-12-11 03:33:38', 0),
(43, 'Giày Running Yonex SHR 8001 Walter', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 129000, 17, '2021-12-11 03:34:44', '2021-12-11 03:34:44', 0),
(44, 'Giày Running Yonex Trusmart 5013 Wade', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 89000, 17, '2021-12-11 03:34:44', '2021-12-11 03:34:44', 0),
(45, 'Giày Running Yonex SHB 5007 Davis', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 89000, 17, '2021-12-11 03:35:49', '2021-12-11 03:35:49', 0),
(46, 'Giày Thể Thao Nam Hunter X Dune DSMH10701KEM ', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', 'Mỳ Ý rán với xúc xích cay, thảo mộc, ngò gai và húng quế Ý– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 109000, 17, '2021-12-11 03:35:49', '2021-12-11 03:35:49', 0),
(47, 'Biti\'s Hunter Running Black DSMH08300DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 69000, 18, '2021-12-11 03:37:52', '2021-12-11 03:37:52', 0),
(48, 'Giày Thể Thao Nam Hunter X DSMH10500DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 69000, 18, '2021-12-11 03:37:52', '2021-12-11 03:37:52', 0),
(50, 'Biti\'s Hunter X Cut-Out DSMH08900DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 69000, 18, '2021-12-11 03:39:17', '2021-12-11 03:39:17', 0),
(51, 'Biti\'s Hunter X 2k22 - Jet Navy DSMH02202XNH', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 59000, 18, '2021-12-11 03:39:17', '2021-12-11 03:39:17', 0),
(52, 'Hunter Street Cream DSMH10400KEM', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 69000, 18, '2021-12-11 03:40:23', '2021-12-11 03:40:23', 0),
(53, 'Hunter Tennis DSMH10200XAM', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 29000, 20, '2021-12-11 03:41:38', '2021-12-11 03:41:38', 0),
(54, 'Sandal Da Nam SD0690000DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138874/Drink/7Up_1_5l_Chai-removebg-preview_cuua5z.png', 'L', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 79000, 20, '2021-12-11 03:41:38', '2021-12-11 03:41:38', 0),
(55, 'Sandal Si - PU Nữ DPW071188DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 59000, 20, '2021-12-11 03:44:32', '2021-12-11 03:44:32', 0),
(56, 'Biti\'s Hunter X LITEPLEX DSMH09800DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138874/Drink/Bia_333-removebg-preview_xp4v6h.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 49000, 20, '2021-12-11 03:44:32', '2021-12-11 03:44:32', 0),
(57, 'Sandal Si - PU Nữ DPW071888DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 29000, 20, '2021-12-11 03:46:12', '2021-12-11 03:46:12', 0),
(58, 'Sandal Bé Trai DYB013800XAM', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 29000, 20, '2021-12-11 03:46:12', '2021-12-11 03:46:12', 0),
(59, 'Sandal Eva Phun Trẻ Em DEG010000DEN', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 29000, 20, '2021-12-11 03:47:24', '2021-12-11 03:47:24', 0),
(60, 'Hunter X DSWH10500TRG', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'L', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 79000, 20, '2021-12-11 03:47:24', '2021-12-11 03:47:24', 0),
(61, 'Biti\'s Hunter Running Orange DSWH03900CAM', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 29000, 20, '2021-12-11 03:48:33', '2021-12-11 03:48:33', 0),
(147, 'Giày Converse C2N1', 'products/fxvds8nhm0o6on3ezvco', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 169000, 16, '2021-12-07 16:55:47', '2021-12-08 09:46:27', 0),
(148, 'Giày Converse C2DF', 'products/rvxgnrwqcbboc72lzr9n', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'S', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 129000, 17, '2021-12-07 16:55:47', '2021-12-08 09:38:10', 0),
(149, 'Giày Vans Era FOG', 'products/awae3ae7trhyhasj2tdb', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 70000, 18, '2021-12-08 00:04:12', '2021-12-08 09:47:19', 0),
(150, 'Giày Vans Slip On Black Canvas', 'products/epdweajxyfx7zuw6bcxk', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'L', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 189000, 19, '2021-12-08 09:53:02', '2021-12-08 09:53:02', 0),
(151, 'GIÀY PUMA SOFTRIDE ENZO NXT ', 'products/asxqwkvfznxivys7rjsb', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'S', '– Ship COD (Thanh toán khi nhận hàng), đổi hàng trong vòng 10 ngày, Liên hệ 0978400321', 49000, 20, '2021-12-11 11:35:30', '2021-12-11 11:35:30', 0),
(154, 'aqwe', '111', '23123123.jpg', 'q', 'qwe', 0, 16, '2022-12-19 15:17:15', '2022-12-19 15:17:15', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_info`
--
ALTER TABLE `app_info`
  ADD PRIMARY KEY (`slug`);

--
-- Indexes for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mahd` (`id_hd`),
  ADD KEY `idsp` (`id_sp`) USING BTREE;

--
-- Indexes for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rating_id_hd` (`id_hd`);

--
-- Indexes for table `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dsdc_fk_id_nd` (`id_nd`);

--
-- Indexes for table `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_nd` (`id_nd`),
  ADD KEY `fk_id_sp` (`id_sp`);

--
-- Indexes for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_bill_id_nd` (`id_nd`),
  ADD KEY `fk_bill_id_thanhtoan` (`id_thanhtoan`),
  ADD KEY `fk_bill_id_diachi` (`id_diachi`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phieu_giamgia`
--
ALTER TABLE `phieu_giamgia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `madm` (`id_dm`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_info`
--
ALTER TABLE `app_info`
  MODIFY `slug` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`id_hd`) REFERENCES `hoadon` (`id`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id`);

--
-- Constraints for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `fk_rating_id_hd` FOREIGN KEY (`id_hd`) REFERENCES `hoadon` (`id`);

--
-- Constraints for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  ADD CONSTRAINT `dsdc_fk_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`);

--
-- Constraints for table `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `fk_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `fk_id_sp` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_bill_id_diachi` FOREIGN KEY (`id_diachi`) REFERENCES `danhsach_diachi` (`id`),
  ADD CONSTRAINT `fk_bill_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `fk_bill_id_thanhtoan` FOREIGN KEY (`id_thanhtoan`) REFERENCES `hinhthucthanhtoan` (`id`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_dm`) REFERENCES `danhmuc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
