import React,{ useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../../styles/categories_responsive.css";
import "../../styles/categories_styles.css";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const EmpDetail = () => {
  // hiệu ứng
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const { empid } = useParams();
  // Lấy tất cả danh mục
  const [productdata, setproductdatachange] = useState();
  let query = useQuery();
  const name = query.get("name");

  console.log(empid, "duy23");
  useEffect(() => {
    fetch("http://localhost:5000/category/ " + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res.data, "resres");
        setproductdatachange(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <div className="container">
      {/* Sản phẩm */}
      <div className="products_iso ">
      <div className="">
          <button className="btn btn-primary">{name}</button>
        </div>
        <div className="product-grid row">
          {/* <!-- Product 1 --> */}
          {productdata &&
            productdata.map((item) => (
              <div className="product-item men key={item.id} col-lg-3 col-md-4 col-sm-6">
                <div className="product discount product_filter">
                  <div
                    className="product_image my-2"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <Link to={`/product/detail/${item.id}`}>
                      <img src={item.url} alt="" />
                    </Link>
                  </div>
                  <div className="favorite favorite_left"></div>
                  <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                    <span>-20%</span>
                  </div>
                  <div className="product_info" data-aos="zoom-out-down">
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
                        // onClick={() => handleClick(item)}
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

export default EmpDetail;
