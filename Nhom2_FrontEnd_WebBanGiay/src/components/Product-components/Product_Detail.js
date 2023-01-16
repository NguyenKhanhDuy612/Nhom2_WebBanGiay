import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart_Product from "../Cart-components/Cart_Product";
import "./Product.css";
import axios from "axios";
const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, setEmpdatachange] = useState({});
  console.log(empdata);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${empid}`)
      .then((res) => {
        setEmpdatachange(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="single_product_image">
            <div
              className="single_product_image_background"
              // style="background-image:url(images/single_2.jpg)"
            >
              <img src={empdata.url} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product_details">
            <div className="product_details_title">
              <h2>{empdata.tensp}</h2>
              <p>{empdata.chitiet}</p>
            </div>

            {/* <div className="original_price">$629.99</div> */}
            <div className="product_price">PRICE: {empdata.gia} VND</div>
            <div className="product_price">SIZE: {empdata.size} </div>
            <ul className="star_rating">
              <li>
                <i class="bi bi-star-fill"></i>
              </li>
              <li>
                <i class="bi bi-star-fill"></i>
              </li>
              <li>
                <i class="bi bi-star-fill"></i>
              </li>
              <li>
                <i class="bi bi-star-fill"></i>
              </li>
              <li>
                <i class="bi bi-star-half"></i>
              </li>
            </ul>

            <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
              {/* <Cart_Product handleClick1={() => handleClick()} /> */}
              <button
                className="red_button  btn btn-danger mx-3"
                // onClick={() => handleClick1(item)}
              >
                <Link>Add to cart</Link>
              </button>
              <button
                className="red_button  btn btn-danger"
                // onClick={() => handleClick1(item)}
              >
                <Link className="" to="/cart">
                  Back to home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card row" style={{ textAlign: "left" }}>
        <div className="card-title"></div>
        <div className="card-body"></div>

        <div>
          <h2>
            The Product name is : <b>{empdata.tensp}</b> ({empdata.id})
          </h2>
          <h3>Contact Details</h3>
          <h5>Price is : {empdata.gia}</h5>
          <h5>Detail is : {empdata.chitiet}</h5>
          <h5>
            <Link>
              <img src={empdata.url} alt="" />
            </Link>
          </h5>
          
        </div>
      </div> */}
    </div>
  );
};

export default EmpDetail;
