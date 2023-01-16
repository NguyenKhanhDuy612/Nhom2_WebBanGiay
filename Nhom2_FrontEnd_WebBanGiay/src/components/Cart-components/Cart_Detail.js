import React, { useState, useEffect } from "react";
import { useContextUser } from "../../context/global";
import { ToastContainer, toast } from "react-toastify"; // thư viện thông báo

import "./cart.css";

const Cart = () => {
  const [cartdata, cartdatachange] = useState(null);
  const [pricedata, pricedatachange] = useState(null);
  const { setTotalCart, flag } = useContextUser();
  const [ga, setGa] = useState(false);

  const handletotal = () => {
    fetch("http://localhost:5000/cart/getAllQuantityAndPriceOfCart", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp.data[0], "yess");
        pricedatachange(resp.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // lấy tổng số lượng và tổng giá
  useEffect(() => {
    handletotal();
  }, [ga]);

  useEffect(() => {
    getCart();
    setGa(false);
  }, [flag, ga]);

  // thông báo khi xóa
  const notify = () => {
    toast.success("DELETE SUCCESS", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setGa(true);
    handletotal();
    getCart();
  };

  // thông báo khi thanh toán
  const Payment = () => {
    toast.success("PAYMENT SUCCESS", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setGa(true);
    handletotal();
    getCart();
  };
  // thay đổi khi kích vô nút tăng giảm
  const handleChange = (item, sl, d) => {
    // nếu số lượng bằng không và nhấn nút giảm thì xóa sản phẩm khỏi giỏ hàng
    if (sl === 0 && d === -1) {
      fetch("http://localhost:5000/cart/delete/" + item, {
        method: "DELETE",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          setGa(true);
          getCart();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      // tăng số lượng lên hoạc giảm số lượng xuống
      fetch("http://localhost:5000/cart/updateQuantityProduct/" + item, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          soluong: sl + d,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          handletotal();
          getCart();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  // Lấy tất cả giỏ hàng của user
  const getCart = () => {
    fetch("http://localhost:5000/cart", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTotalCart(resp.data);

        cartdatachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // hàm thành toán
  const handlePayment = () => {
    fetch("http://localhost:5000/cart/deleteAll", {
      method: "DELETE",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        getCart();
        // alert("Xóa tất cả thành công");
      })
      .catch((err) => {
        console.log(err.message);
      });
    Payment();
  };

  // hàm xóa tất cả giỏ hàng
  const handleDelete = () => {
    // console.log(item, sl + d);
    fetch("http://localhost:5000/cart/deleteAll", {
      method: "DELETE",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        getCart();
        // alert("Xóa tất cả thành công");
        notify();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className="container">
      <ToastContainer />

      {cartdata &&
        cartdata.map((item) => (
          <div className="cart_box " key={item.id}>
            <div className="cart_img ">
              <img src={item.url} alt="" />
              <p>{item.tensp}</p>
            </div>
            <div clasName="">
              <button
                className="btn btn-primary gap-2"
                onClick={() => handleChange(item.id, item.soluong, 1)}
              >
                +
              </button>
              {console.log(item, "_-----")}
              <button className="btn btn-success gap-2">{item.soluong}</button>
              <button
                className="btn btn-primary gap-2"
                onClick={() => handleChange(item.id, item.soluong, -1)}
              >
                -
              </button>

              <span>TOTAL MONEY: {item.tong_gia} </span>
            </div>
            <div></div>
          </div>
        ))}
      <div className="row">
        <button
          className="btn btn-danger gap-2 mx-5 my-2 col"
          onClick={() => handleDelete()}
        >
          Delete All
        </button>
        <div className="col">
          <button className="btn btn-primary gap-2 mx-5 my-2 ">
            Total : {pricedata?.tong_sl ? pricedata?.tong_sl : 0}
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary gap-2 mx-5 my-2 "
            onClick={() => handlePayment()}
          >
            Payment : {pricedata?.tongtien_gh ? pricedata?.tongtien_gh : 0} VND
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
