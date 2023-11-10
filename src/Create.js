import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/Create", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center alighn-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Teacher</h2>
          <div className="mb-2">
            <label htmlFor="ID">Id</label>
            <input
              type="text"
              id="id"
              placeholder="Enter Your Id"
              className="form-control"
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button type="Submit" className="btn   btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
