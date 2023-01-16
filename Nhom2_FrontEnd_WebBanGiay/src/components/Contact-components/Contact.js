import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact_styles.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Fragment>
      <div className="container">
        {/* <!-- Contact Us --> */}

        <div className="row">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0545063372497!2d109.18945901426767!3d12.244588733727001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170677f102b7111%3A0x517b2bf96b1e349d!2zNTAgTMOqIFRow6FuaCBUw7RuLCBUw6JuIEzhuq1wLCBOaGEgVHJhbmcsIEtow6FuaCBIw7JhIDY1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1672911307519!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="col contact_col "
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <div className="contact_contents">
              <h1 data-aos="fade-left">Contact</h1>
              <p data-aos="fade-left">There are many way to contact us</p>
              <div data-aos="zoom-in-down">
                <p>(+84)978400321</p>
              </div>
              <div data-aos="zoom-out">
                <p>Address: Tầng 10 tòa nhà VNPT</p>
              </div>
              <div data-aos="zoom-out">
                <p>WebGiayGroup2@ntu.edu.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
