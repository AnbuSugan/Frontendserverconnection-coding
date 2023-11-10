import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/Read/" + id)
      .then((res) => {
        console.log(res);
        setTeacher(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h2>Teacher Detail</h2>
          <h2>{teacher.id}</h2>
          <h2>{teacher.name}</h2>
          <h2>{teacher.email}</h2>
        </div>
        <Link to="/" className="btn btn-primary me-2">
          Back
        </Link>
        <Link to={`/edit/${teacher.id}`} className="btn btn-info">
          Edit
        </Link>
      </div>
    </div>
  );
}
export default Read;
