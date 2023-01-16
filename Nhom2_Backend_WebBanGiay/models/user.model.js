const knex = require('../db/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports = {
  //lấy toàn bộ tài khoản customer (admin)
  async getAllCustomerAccount() {
    let users = await knex('nguoidung').select('*').where({
      admin: 0,
    });
    return users;
  },

  //lấy toàn bộ tài khoản admin (admin)
  async getAllAdminAccount() {
    let users = await knex('nguoidung').select('*').where({
      admin: 1,
    });
    return users;
  },

  //Lấy thông tin tài khoản đang đăng nhập
  async getProfile(id) {
    let user = await knex('nguoidung')
      .select(
        'id',
        'hoten',
        'username',
        'ngaysinh',
        'gioitinh',
        'email',
        'dienthoai',
        'public_id',
        'url'
      )
      .where('id', id);
    return user;
  },

  //đăng ký tài khoản
  async register(email, user) {
    let registered = await knex('nguoidung')
      .where('email', email)
      .select('email');
    var isRegistered = Object.values(JSON.parse(JSON.stringify(registered)));
    console.log(isRegistered.length);
    if (isRegistered.length === 1) {
      return {
        status: 400,
        message: 'This email has already been registered',
      };
    } else {
      const result = await knex('nguoidung').insert(user)
      console.log(result)
      return {
        status: 200,
        message: `Registered account successfully`,
      };
    }
  },

  //đăng nhập tài khoản admin
  async loginAdmin(email, password) {
    //kiểm tra tài khoản có tồn tại không
    let admin = await knex('nguoidung').where({
      email: email,
      admin: 1,
    });
    let isAdmin = Object.values(JSON.parse(JSON.stringify(admin)));
    // console.log(isAdmin);

    if (isAdmin[0].admin === 1) {

      //return isAdmin[0].password;
      let match = await bcrypt.compare(password, isAdmin[0].password);
      if (match) {
        let id = isAdmin[0].id;
        let admin = isAdmin[0].admin;

        let accessToken = jwt.sign(
          { id, admin },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '1h',
          }
        );

        let refreshToken = jwt.sign(
          { id, admin },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: '1d',
          }
        );

        await knex('nguoidung')
          .where({
            id: id,
          })
          .update({
            refresh_token: refreshToken,
            thisKeyIsSkipped: undefined,
          });

        return {
          status: 200,
          message: 'Login successful',
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
      } else {
        return {
          status: 401,
          message: 'Wrong password',
        };
      }
    } else {
      return {
        status: 401,
        message: 'This account does not exists',
      };
    }
  },

  //đăng nhập tài khoản customer
  async loginCustomer(email, password) {
    //kiểm tra tài khoản có tồn tại không
    let customer = await knex('nguoidung').where({
      email: email,
      admin: 0,
    });
    let isCustomer = Object.values(JSON.parse(JSON.stringify(customer)));
    // console.log(isCustomer);
    if (isCustomer.length === 1) {
      //return isCustomer
      let match = await bcrypt.compare(password, isCustomer[0].password);
      if (match) {
        let id = isCustomer[0].id;
        let admin = isCustomer[0].admin;

        let accessToken = jwt.sign(
          { id, admin },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '1h',
          }
        );

        let refreshToken = jwt.sign(
          { id, admin },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: '1d',
          }
        );

        await knex('nguoidung')
          .where({
            id: id,
          })
          .update({
            refresh_token: refreshToken,
          });

        return {
          status: 200,
          message: 'Login successful',
          customer: customer,
          accessToken: accessToken,
          refreshToken: refreshToken,
        };
      } else {
        return {
          status: 401,
          message: 'Wrong password',
        };
      }
    } else {
      return {
        status: 401,
        message: 'This account is not existed',
      };
    }
  },
  //refresh token
  async refreshToken(token) {
    if (!token) {
      return {
        status: 400,
        message: 'Please Login',
      };
    } else {
      let user = await knex('nguoidung').where('refresh_token', token);
      let isUser = Object.values(JSON.parse(JSON.stringify(user)));
      console.log(isUser);
      if (isUser.length === 1) {
        let id = isUser[0].id;
        let admin = isUser[0].admin;

        let accessToken = jwt.sign(
          { id, admin },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '1h',
          }
        );

        return {
          status: 200,
          accessToken: accessToken,
        };
      } else {
        return {
          status: 400,
          message: 'Please Login',
        };
      }
    }
  },

  //logout
  async logout(token) {
    if (!token) {
      return {
        status: 400,
        message: 'Token does not exists',
      };
    } else {
      let user = await knex('nguoidung').where('refresh_token', token);
      let isUser = Object.values(JSON.parse(JSON.stringify(user)));
      console.log(isUser);
      if (isUser.length === 1) {
        let id = isUser[0].id;
        await knex('nguoidung').where('id', id).update({
          refresh_token: null,
          thisKeyIsSkipped: undefined,
        });

        return {
          status: 200,
          message: 'Logout successfully',
        };
      } else {
        return {
          status: 403,
          message: 'Not found data in token',
        };
      }
    }
  },

  //chỉnh sửa thông tin cho tất cả tài khoản (admin)
  async updateAllUser(id, user) {
    await knex('nguoidung').update(user).where('id', id);
    return {
      status: 200,
      message: `Update user with id : ${id} successfully`,
    };
  },

  //thay đổi mật khẩu
  async changePassword(id, user, oldPassword) {
    //kiểm tra tài khoản có tồn tại không
    let data = await knex('nguoidung').where({
      id: id,
    });
    let existUser = Object.values(JSON.parse(JSON.stringify(data)));
    if (existUser.length === 1) {
      let match = await bcrypt.compare(oldPassword, existUser[0].password);
      if (match) {
        await knex('nguoidung').update(user).where('id', id);
        return {
          status: 200,
          message: 'Change password successfully',
        };
      } else {
        return {
          status: 400,
          message: 'Wrong old password',
        };
      }
    } else {
      return {
        status: 400,
        message: 'This account does not exist',
      };
    }
  },

  //chỉnh sửa tài khoản đang đăng nhập (customer )
  async updateProfile(id, user) {
    await knex('nguoidung').update(user).where('id', id);
    return {
      status: 200,
      message: 'Update successfully',
    };
  },

  //xóa tài khoản (admin)
  async deleteUser(id) {
    let result = await knex('nguoidung').del().where('id', id);
    return result;
  },
  
  //Quên mật khẩu tài khoản admin
  async forgotPasswordAdmin(email) {
    //kiểm tra email nhập vào có phải là admin và tồn tại trong db
    let count = await knex('nguoidung').select('id', 'hoten').where({
      email: email,
      admin: 1,
    });
    var Count = Object.values(JSON.parse(JSON.stringify(count)));
    if (Count.length === 1) {
      //nếu tồn tại email như vậy thì update mật khẩu mới

      //mật khẩu random 8 kí tự
      var randPassword = Array(8)
        .fill(
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()_+=<>?/|'
        )
        .map(function (x) {
          return x[Math.floor(Math.random() * x.length)];
        })
        .join('');

      const salt = bcrypt.genSaltSync();
      const hashPassword = bcrypt.hashSync(randPassword, salt);
      var updatePassword = await knex('nguoidung')
        .update({
          password: hashPassword,
        })
        .where({
          id: count[0].id,
        });

      //gửi email thông báo mật khẩu mới
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false, // use SSL
        port: 25,
        auth: {
          user: 'bangphan3032k1@gmail.com',
          pass: 'pypuvfocwaxevzrk',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // const handlebarOptions = {
      //   viewEngine: {
      //     extName: '.html',
      //     partialsDir: path.resolve('../views'),
      //     defaultLayout: false,
      //   },
      //   viewPath: path.resolve('../views'),
      //   extName: '.html',
      // };

      transporter.use('compile', hbs(handlebarOptions));

      var mailOptions = {
        from: 'bangphan3032k1@gmail.com',
        to: email,
        subject: 'Forgot Password',
        text: "New password: " + randPassword,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return {
        status: 200,
        message: 'New password was sent to email, please check your email',
        data: updatePassword,
      };
    } else {
      return {
        status: 400,
        message: 'This account does not exist',
      };
    }
  },

  //Quên mật khẩu tài khoản khách hàng
  async forgotPasswordCustomer(email) {
    //kiểm tra email nhập vào có phải là customer và tồn tại trong db
    let count = await knex('nguoidung').select('id', 'hoten').where({
      email: email,
      admin: 0,
    });
    var Count = Object.values(JSON.parse(JSON.stringify(count)));
    if (Count.length === 1) {
      //nếu tồn tại email như vậy thì update mật khẩu mới

      //mật khẩu random 8 kí tự
      var randPassword = Array(8)
        .fill(
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()_+=<>?/|'
        )
        .map(function (x) {
          return x[Math.floor(Math.random() * x.length)];
        })
        .join('');
      const salt = bcrypt.genSaltSync();
      const hashPassword = bcrypt.hashSync(randPassword, salt);
      var updatePassword = await knex('nguoidung')
        .update({
          password: hashPassword,
        })
        .where({
          id: count[0].id,
        });

      //gửi email thông báo mật khẩu mới
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false, // use SSL
        port: 25,
        auth: {
          user: 'bangphan3032k1@gmail.com',
          pass: 'pypuvfocwaxevzrk',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // const handlebarOptions = {
      //   viewEngine: {
      //     extName: '.html',
      //     partialsDir: path.resolve('../views'),
      //     defaultLayout: false,
      //   },
      //   viewPath: path.resolve('../views'),
      //   extName: '.html',
      // };

      //transporter.use('compile', hbs(handlebarOptions));

      var mailOptions = {
        from: 'bangphan3032k1@gmail.com',
        to: email,
        subject: 'Forgot Password',
        text: "New password: " + randPassword
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return {
        status: 200,
        message: 'New password was sent to email, please check your email',
        data: updatePassword,
      };
    } else {
      return {
        status: 400,
        message: 'This account does not exist',
      };
    }
  },

  //hiển thị tài khoản đăng ký từ 3 ngày trước đến hiện tại
  async getNewUser() {
    const get_day_of_time = (d1, d2) => {
      let ms1 = d1.getTime();
      let ms2 = d2.getTime();
      return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };

    let ds_nd = await knex('nguoidung').select('*').where('admin', 0);

    var today = new Date();

    var result = [];

    for (var i = 0; i < ds_nd.length; i++) {
      var time = get_day_of_time(ds_nd[i].createdAt, today);
      if (time <= 3) {
        result.push(ds_nd[i]);
      }
    }

    if (result.length === 0) {
      return {
        status: 200,
        message: 'No users have recently signed up for an account',
        data: result,
      };
    } else {
      return {
        status: 200,
        message: 'Get new user successfully',
        data: result,
      };
    }
  },

  async loginByGoogle(google_id, user) {
    //kiểm tra tài khoản google này đã đăng ký chưa
    let registered = await knex('nguoidung')
      .where({
        google_id: google_id,
        kieu_dangnhap: 'Google',
      })
      .select('*');
    var isRegistered = Object.values(JSON.parse(JSON.stringify(registered)));
    console.log(isRegistered.length);

    //nếu có tài khoản gg trong database thì sẽ gửi token
    if (isRegistered.length === 1) {
      let id = isRegistered[0].id;
      let admin = isRegistered[0].admin;

      let accessToken = jwt.sign(
        { id, admin },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: '1h',
        }
      );

      let refreshToken = jwt.sign(
        { id, admin },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: '1d',
        }
      );

      await knex('nguoidung')
        .where({
          id: id,
        })
        .update({
          refresh_token: refreshToken,
          thisKeyIsSkipped: undefined,
        });

      return {
        status: 200,
        message: 'Login successful',
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    }
    //nếu chưa có tài khoản trong database thì tạo tài khoản rồi gửi token
    else {
      let id = await knex('nguoidung').insert(user).returning('id');
      let admin = 0;

      let accessToken = jwt.sign(
        { id, admin },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: '1h',
        }
      );

      let refreshToken = jwt.sign(
        { id, admin },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: '1d',
        }
      );

      await knex('nguoidung')
        .where({
          id: id,
        })
        .update({
          refresh_token: refreshToken,
          thisKeyIsSkipped: undefined,
        });

      return {
        status: 200,
        message: 'Login successful',
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    }
  },
}


