import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { empid } = useParams();
  // console.log(empid);

  //const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/product/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.data[0].id);
        tenspchange(resp.data[0].tensp);
        chitietchange(resp.data[0].chitiet);
        sizechange(resp.data[0].size);
        giachange(resp.data[0].gia);
        public_idchange(resp.data[0].public_id);
        urlchange(resp.data[0].url);
        id_dmchange(resp.data[0].id_dm);
        activechange(resp.data[0].isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
  const [tensp, tenspchange] = useState("");
  const [chitiet, chitietchange] = useState("");
  const [size, sizechange] = useState("");
  const [gia, giachange] = useState("");
  const [public_id, public_idchange] = useState("");
  const [url, urlchange] = useState("");
  const [id_dm, id_dmchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      tensp,
      chitiet,
      size,
      gia,
      public_id,
      url,
      id_dm,
      active,
    };
    console.log(empdata, "haha");
    fetch("http://localhost:5000/product/" + empid, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/product/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Product Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={empid}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={tensp}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => tenspchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {/* {tensp.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )} */}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Detail</label>
                      <input
                        value={chitiet}
                        onChange={(e) => chitietchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Size</label>
                      <input
                        value={size}
                        onChange={(e) => sizechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        value={gia}
                        onChange={(e) => giachange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Public_id</label>
                      <input
                        value={public_id}
                        onChange={(e) => public_idchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>URL</label>
                      <input
                        value={url}
                        onChange={(e) => urlchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>id_dm</label>
                      <input
                        value={id_dm}
                        onChange={(e) => id_dmchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/product" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
