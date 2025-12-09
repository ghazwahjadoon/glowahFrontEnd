import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerUser } from "./Service/Api";


const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
});

function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async(data) => {
   try {
      const res = await registerUser(data);
      alert(" Registered");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
};
  return (
    <div className="container-fluid bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-lg p-4" style={{ width: "100%", maxWidth: "500px", backgroundColor: "white" }}>
        <h3 className="text-center mb-4" style={{ fontFamily: "Times New Roman", color: "lightpink", fontWeight: "bold" }}>
          --- SIGN UP ---
        </h3>

        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>

          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </div>

          <div className="col-12">
            <label htmlFor="inputFullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFullName"
              placeholder="Your full name"
              {...register("fullName")}
            />
            {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              {...register("address")}
            />
            {errors.address && <p className="text-danger">{errors.address.message}</p>}
          </div>

          <div className="col-12">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Enter your city"
              {...register("city")}
            />
            {errors.city && <p className="text-danger">{errors.city.message}</p>}
          </div>

          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn w-50"
              style={{ backgroundColor: "lightpink", color: "white", fontWeight: "bold", borderRadius: "10px" }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
