import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryTable = () => {
  const [empdata, empdatachange] = useState(null);

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:5000/category/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Category Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name Category</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tendm}</td>

                    <td className="col-3 ">
                      <Link
                        to={`/category/edit/${item.id}`}
                        className="btn btn-success mx-1"
                      >
                        Edit
                      </Link>

                      <Link
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger mx-1"
                      >
                        Remove
                      </Link>

                      <Link
                        to={`/category/detail/${item.id}`}
                        className="btn btn-success mx-1"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
