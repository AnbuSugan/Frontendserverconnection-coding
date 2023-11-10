import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="p-3  bg-white rounded ">
        <h2>Teacher List</h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success bg-success">
            Create +
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>
                  <Link
                    to={`/Read/${teacher.id}`}
                    className="btn btn-sm btn-info"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/edit/${teacher.id}`}
                    className="btn btn-sm btn-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(teacher.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
