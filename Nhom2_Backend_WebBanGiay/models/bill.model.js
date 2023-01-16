const knex = require("../db/database.js");

module.exports = {
//xem hóa đơn của tất cả khách hàng (admin)
async getAllBill() {
    let bills = await knex("hoadon")
      .join("nguoidung", "nguoidung.id", "hoadon.id_nd")
      .join("hinhthucthanhtoan", "hinhthucthanhtoan.id", "hoadon.id_thanhtoan")
      .join("danhsach_diachi", "danhsach_diachi.id", "hoadon.id_diachi")
      .select(
        "hoadon.id",
        "nguoidung.url",
        "nguoidung.hoten",
        "hinhthucthanhtoan.ten_hinhthuc",
        "danhsach_diachi.diachi",
        "hoadon.ngaydathang",
        "hoadon.tong_sl",
        "hoadon.tong_hd",
        "hoadon.tinhtrangHD",
        "hoadon.createdAt",
        "hoadon.updatedAt",
        "hoadon.deleted_fg"
      );
    return bills;
  },

  //xem toàn bộ hóa đơn của khách hàng đang đăng nhập
  async history(idUser) {
    let bills = await knex("hoadon").select("*").where({
      id_nd: idUser,
    });
    return bills;
  },

  //tạo hóa đơn (khách hàng)
  async createBill(bill) {
    let id_bill = await knex("hoadon").insert(bill).returning("id");
    console.log(id_bill);
    return id_bill;
  },

  //chỉnh sửa tình trạng hóa đơn (admin)
  async updateBillStatus(bill) {
    let result = await knex("hoadon").update(bill).where({
      id: bill.id,
    });
    return result;
  },

  //hủy hóa đơn (khách hàng)
  //chỉ hủy khi tình trạng là chưa thanh toán
  async cancelBill(id, idUser) {
    //kiểm tra hóa đơn có thể hủy được không
    let canCancel = await knex("hoadon").count("id as a").where({
      id: id,
      id_nd: idUser,
      tinhtrangHD: "Chưa thanh toán",
    });
    if (canCancel[0].a === 1) {
      await knex("hoadon")
        .update({
          tinhtrangHD: "Hủy",
          updatedAt: new Date(),
          thisKeyIsSkipped: undefined,
        })
        .where({
          id: id,
        });
      return {
        status: 200,
        message: "cancelled bill successfully",
        data: id,
      };
    } else {
      return {
        status: 400,
        message: "you can not cancel bill",
        data: id,
      };
    }
  },

  async deleteBill(id_hd) {
    let result = await knex("hoadon").del().where({
      id: id_hd,
    });
    return result;
  },

  //sắp xếp tổng giao dịch của khách hàng đã thanh toán hoặc đã nhân hàng ( trên 1 triệu)
  async SortTotalTransactionsOfUser() {
    let result = await knex("hoadon")
      .select("hoadon.id_nd", "nguoidung.hoten", "nguoidung.url")
      .sum("tong_hd as tong_giao_dich")
      .join("nguoidung", "hoadon.id_nd", "nguoidung.id")
      .whereIn("hoadon.tinhtrangHD", ["Đã thanh toán", "Đã nhận hàng"])
      .groupBy("hoadon.id_nd")
      .having("tong_giao_dich", ">=", 1000000)
      .orderBy("tong_giao_dich", "desc");
    return result;
  },

  //tổng doanh thu
  async getTotalRevenue() {
    let result = await knex("hoadon")
      .sum("tong_hd as tong_doanhthu")
      .whereIn("tinhtrangHD", ["Đã nhận hàng"]);
    return result;
  },

  //tổng sản phẩm bán được
  async getTotalProductSold() {
    let result = await knex("hoadon")
      .sum("tong_sl as tong_sp_ban_duoc")
      .whereIn("tinhtrangHD", ["Đã nhận hàng"]);
    return result;
  },

  //tổng hóa đơn khách hàng chưa nhận được sản phẩm
  async getTotalBillCustomerNotReceived() {
    let result = await knex("hoadon")
      .sum("tong_hd as tong_hd_khach_chua_nhan_hang")
      .whereIn("tinhtrangHD", ["Đã thanh toán", "Chưa thanh toán"]);
    return result;
  },

  //tổng hóa đơn khách hàng hủy
  async getTotalBillCancelled() {
    let result = await knex("hoadon")
      .sum("tong_hd as tong_hd_bi_huy")
      .whereIn("tinhtrangHD", ["Hủy"]);
    return result;
  },

  //lấy ra doanh thu theo từng tháng
  async getRevenueByMonth() {
    let doanh_thu_theo_thang = await knex("hoadon")
      .sum("tong_hd as doanh_thu")
      .where("tinhtrangHD", "Đã nhận hàng")
      .whereRaw("extract(YEAR_MONTH from updatedAt) = 202201")
      .unionAll(
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202202'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202203'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202204'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202205'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202206'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202207'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202208'
        ),
        knex.raw(
          'SELECT SUM(tong_hd)  FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202209'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202210'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202211'
        ),
        knex.raw(
          'SELECT SUM(tong_hd) FROM `hoadon` WHERE tinhtrangHD = "Đã nhận hàng" and extract(YEAR_MONTH from updatedAt) = 202212'
        )
      );

    var result = ["doanh_thu_theo_thang"];
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    for (var i = 0; i < doanh_thu_theo_thang.length; i++) {
      // result.push(doanh_thu_theo_thang[i].doanh_thu);
      // var thang = i + 1;
      var doanhthu =
        doanh_thu_theo_thang[i].doanh_thu === null
          ? 0
          : doanh_thu_theo_thang[i].doanh_thu;
      result.push({
        thang: month[i],
        doanh_thu: doanhthu,
      });
    }

    return result;
  },

  //thống kê hóa đơn từ ngày tới ngày
  async statisticsBillByDay(fromDate, toDate) {
    let result = await knex("hoadon")
      .select("*")
      .whereBetween("createdAt", [fromDate, toDate]);
    return result;
  },

  //hiển thị doanh thu bán được tháng này và so sánh tháng trước
  async getRevenueThisAndLastMonth() {
    let data = await knex("hoadon")
      .sum("tong_hd as doanh_thu")
      .where("tinhtrangHD", "Đã nhận hàng")
      .whereRaw(
        "EXTRACT(YEAR_MONTH FROM updatedAt) = EXTRACT(YEAR_MONTH FROM CURRENT_DATE)"
      )
      .unionAll(
        knex.raw(
          'SELECT sum(tong_hd) FROM hoadon WHERE YEAR(updatedAt) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(updatedAt) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) and tinhtrangHD = "Đã nhận hàng"'
        )
      );

    var result = ["doanh thu thang nay va so voi thang truoc"];
    const doanh_thu_thang_nay =
      data[0].doanh_thu === null ? 0 : data[0].doanh_thu;
    const doanh_thu_thang_truoc =
      data[1].doanh_thu === null ? 0 : data[1].doanh_thu;
    const sosanh_thang_truoc =
      doanh_thu_thang_truoc === 0
        ? "last month does not exist data"
        : ((doanh_thu_thang_nay - doanh_thu_thang_truoc) /
            doanh_thu_thang_truoc) *
          100;

    result.push({
      doanh_thu_thang_nay: doanh_thu_thang_nay,
      doanh_thu_thang_truoc: doanh_thu_thang_truoc,
      sosanh_thang_truoc: sosanh_thang_truoc,
    });

    return result;
  },

  //hiển thị tổng hóa đơn khách hàng chưa nhận được tháng này và so sánh tháng trước
  async getTotalBillCustomerNotReceivedThisAndLastMonth() {
    let data = await knex("hoadon")
      .sum("tong_hd as doanh_thu")
      .whereIn("tinhtrangHD", ["Đã thanh toán", "Chưa thanh toán"])
      .whereRaw(
        "EXTRACT(YEAR_MONTH FROM updatedAt) = EXTRACT(YEAR_MONTH FROM CURRENT_DATE)"
      )
      .unionAll(
        knex.raw(
          'SELECT sum(tong_hd) FROM hoadon WHERE YEAR(updatedAt) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(updatedAt) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) and tinhtrangHD = "Đã thanh toán" or tinhtrangHD = "Chưa thanh toán"'
        )
      );

    var result = [
      "tong hoa don khach hang chua nhan duoc thang nay va so voi thang truoc",
    ];

    const tong_hd_thang_nay =
      data[0].doanh_thu === null ? 0 : data[0].doanh_thu;
    const tong_hd_thang_truoc =
      data[1].doanh_thu === null ? 0 : data[1].doanh_thu;
    const sosanh_thang_truoc =
      tong_hd_thang_truoc === 0
        ? "last month does not exist data"
        : ((tong_hd_thang_nay - tong_hd_thang_truoc) / tong_hd_thang_truoc) *
          100;

    result.push({
      tong_hd_thang_nay: tong_hd_thang_nay,
      tong_hd_thang_truoc: tong_hd_thang_truoc,
      sosanh_thang_truoc: sosanh_thang_truoc,
    });

    return result;
  },

  //hiển thị tổng hóa đơn khách hàng hủy tháng này và so sánh tháng trước
  async getTotalBillCustomerCancelledThisAndLastMonth() {
    let data = await knex("hoadon")
      .sum("tong_hd as doanh_thu")
      .whereIn("tinhtrangHD", ["Hủy"])
      .whereRaw(
        "EXTRACT(YEAR_MONTH FROM updatedAt) = EXTRACT(YEAR_MONTH FROM CURRENT_DATE)"
      )
      .unionAll(
        knex.raw(
          'SELECT sum(tong_hd) FROM hoadon WHERE YEAR(updatedAt) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(updatedAt) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) and tinhtrangHD = "Hủy"'
        )
      );

    var result = ["tong hoa don bi huy thang nay va so voi thang truoc"];

    const tong_hd_thang_nay =
      data[0].doanh_thu === null ? 0 : data[0].doanh_thu;
    const tong_hd_thang_truoc =
      data[1].doanh_thu === null ? 0 : data[1].doanh_thu;
    const sosanh_thang_truoc =
      tong_hd_thang_truoc === 0
        ? "last month does not exist data"
        : ((tong_hd_thang_nay - tong_hd_thang_truoc) / tong_hd_thang_truoc) *
          100;

    result.push({
      tong_hd_thang_nay: tong_hd_thang_nay,
      tong_hd_thang_truoc: tong_hd_thang_truoc,
      sosanh_thang_truoc: sosanh_thang_truoc,
    });

    return result;
  }
};