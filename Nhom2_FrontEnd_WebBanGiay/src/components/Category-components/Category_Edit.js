import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Phân loại
const CategoryEdit = () => {
  const navigate = useNavigate();

  const { empid } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/category/ ")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        id_dmchange(resp.data[0].id_dm);
        tendmchange(resp.data[0].tendm);
        activechange(resp.data[0].isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  const [id_dm, id_dmchange] = useState("");
  const [tendm, tendmchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      tendm,
      active,
    };

    fetch("http://localhost:5000/category/" + empid, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/category/");
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
                <h2>Category Edit</h2>
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
                        value={tendm}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => tendmchange(e.target.value)}
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
                      <Link to="/category" className="btn btn-danger">
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

export default CategoryEdit;
