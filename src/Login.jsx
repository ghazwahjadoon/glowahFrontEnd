import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from 'react-router-dom';
import { createLogin } from './Service/Api.jsx';

const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function Login() {
  // const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
      try {
    const res = await createLogin(data);

    const { token, user, message, isAdmin } = res.data; // get isAdmin from backend

    // Admin login
    if (isAdmin) {
      alert(message);
      navigate("/admin"); // redirect to admin portal
      return; // stop further execution
    }

    //  Normal user login
    if (token) {
      localStorage.setItem("token", token);
    }
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userEmail", user.email);
    }

    // 🔹 Notify navbar
    window.dispatchEvent(new Event("authChanged"));

    alert(message || "Login successful");
    navigate("/"); // normal user home
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert(err.response?.data?.message || "Something went wrong!");
  }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #ffe6f0, #ffd6eb, #ffeaf3)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="col-12 col-sm-10 col-md-8 col-lg-4">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(255,182,193,0.4)",
            border: "1px solid #ffb6c1",
            padding: "35px",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-12 text-center">
              <h3
                style={{
                  fontFamily: "Times New Roman",
                  color: "#ff69b4",
                  letterSpacing: "1px",
                }}
              >
                LOG IN
              </h3>
              <hr
                style={{
                  borderTop: "2px solid #ffb6c1",
                  width: "50%",
                  margin: "10px auto",
                }}
              />
            </div>

            <div className="col-12">
              <label className="form-label" style={{ color: "#e75480" }}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                {...register("email")}
                style={{ border: "1px solid #f5a6c5", borderRadius: "10px", padding: "10px" }}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="col-12">
              <label className="form-label" style={{ color: "#e75480" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                {...register("password")}
                style={{ border: "1px solid #f5a6c5", borderRadius: "10px", padding: "10px" }}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <div className="col-12 text-center mt-3">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#ff69b4",
                  color: "white",
                  borderRadius: "10px",
                  width: "120px",
                  fontWeight: "500",
                  transition: "0.3s",
                  border: "none",
                }}
              >
                LOG IN
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <Link to="/Signin" style={{ color: "#e75480", textDecoration: "none" }}>
              Don’t have an account? <span style={{ fontWeight: "bold" }}>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
