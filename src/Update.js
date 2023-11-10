import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/Read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          id: res.data[0].id,
          name: res.data[0].name,
          email: res.data[0].email,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
  });
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8081/Update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center alighn-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Teacher</h2>
          <div className="mb-2">
            <label htmlFor="ID">Id</label>
            <input
              type="text"
              id="id"
              placeholder="Enter Your Id"
              className="form-control"
              value={values.id}
              onChange={(e) => setValues({ ...values, id: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button type="Submit" className="btn   btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
