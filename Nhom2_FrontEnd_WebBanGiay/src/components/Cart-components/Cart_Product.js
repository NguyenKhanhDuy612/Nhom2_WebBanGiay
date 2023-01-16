import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify"; // thư viện thông báo
import "react-toastify/dist/ReactToastify.css";
import { useContextUser } from "../../context/global";

const Cart_Product = () => {
  const [productdata, productdatachange] = useState(null);
  const [categorydata, categorydatachange] = useState(null);
  const { flag, setFlag, setTotalCart } = useContextUser();
  const notify = () => toast("ADD SUCCESS"); // Thông báo

  // hàm xóa nút add khi click
  const myFunction = (demoID) => {
    // document.getElementById(demoID).innerHTML = "Can't add";
    // document.getElementById(demoID).style.cursor = "not-allowed";
    document.getElementById(demoID).remove();
  };
  // // hiệu ứng
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // });
  // lấy tất cả sản phẩm có trong database
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        // console.log(res, "1");
        return res.json();
      })
      .then((resp) => {
        // console.log(resp.data, " 2");
        productdatachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // // lấy tất cả danh mục
  // useEffect(() => {
  //   fetch("http://localhost:5000/category")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resp) => {
  //       categorydatachange(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  const handleClick = (item) => {
    fetch("http://localhost:5000/cart/addCartItem/" + item.id, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        don_gia: item.gia,
        soluong: 1,
        tong_gia: item.gia,
        ghi_chu: "ghi_chu",
      }),
    })
      .then((res) => {
        // setTotalCart(res.data);
        // console.log(res, "1");
        return res.json();
      })
      .then((resp) => {
        // console.log(resp.data, " 2");
        // productdatachange(resp.data);
        // alert("THÊM THÀNH CÔNG");
        notify();
        setTotalCart();
        setFlag(!flag);
        myFunction(item.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getCart = () => {
    fetch("http://localhost:5000/cart", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTotalCart(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getCart();
  }, [flag]);

  return (
    <div className="container">
      <div>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
      </div>

      {/* Sản phẩm */}
      <div className="products_iso ">
        <div className="product-grid row">
          {/* <!-- Product 1 --> */}
          {productdata &&
            productdata.map((item) => (
              <div
                className="product-item men  col-lg-3 col-md-4 col-sm-6"
                style={{ height: "500px" }}
                key={item.id}
              >
                <div className="product discount product_filter">
                  <div
                    className="product_image my-2"
                    style={{ height: "300px" }}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <Link to={`/product/detail/${item.id}`}>
                      <img src={item.url} alt="" />
                    </Link>
                  </div>
                  <div className="favorite favorite_left"></div>
                  <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                    <span>-20%</span>
                  </div>
                  <div
                    className="product_info"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <h6 className="product_name">
                      <a href="single.html">{item.tensp}</a>
                    </h6>
                    <div className="product_price">
                      {item.gia} VND
                      {/* <span>$590.00</span> */}
                    </div>
                    <div className="">
                      <button
                        className="red_button add_to_cart_button btn btn-danger"
                        onClick={() => handleClick(item)}
                        id={item.id}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart_Product;
