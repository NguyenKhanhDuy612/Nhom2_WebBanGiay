import React, { useEffect } from "react";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/main_styles.css";
import { Link } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Fragment>
      <div className="super_container">
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg">
                <div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                  <h4 data-aos="fade-right">Newsletter</h4>
                  <p data-aos="fade-right">
                    Subscribe to our newsletter and get 20% off your first
                    purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg">
                <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                  <ul className="footer_nav" data-aos="fade-left">
                    <li>
                      <Link>Blog</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                  <ul>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i className="bi bi-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i className="bi bi-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i className="bi bi-google" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i className="bi bi-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="me-4 text-reset">
                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="footer_nav_container">
                  <div className="cr" data-aos="fade-right">
                    ©2022 All Rights Reserverd. Made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <Link>Nhóm 2</Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
