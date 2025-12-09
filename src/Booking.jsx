import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.min.css";
import models from "./assets/models1.jpg";
import { createBooking} from "./Service/Api";

const schema = z.object({
  name: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).optional(),
  contactMethod: z.enum(["Email", "Phone", "Either"], { 
    errorMap: () => ({ message: "Select a contact method" }) 
  }),
  service: z.string().min(3, { message: "Please specify a service" }),
  datetime: z.string().min(1, { message: "Select a date and time" }),
});

function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async(data) => {
      try {
    const res = await createBooking(data);
    alert("Booking Confirmed!");
    console.log(res.data);
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ background: "linear-gradient(135deg, #ffe6f2, #fff0f5)", minHeight: "100vh" }}
    >
      <div
        className="container bg-white rounded-5 shadow-lg p-5"
        style={{ border: "2px solid #f5b2ca", maxWidth: "1000px" }}
      >
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-12 col-md-6">
            <h1
              className="mb-4"
              style={{ fontFamily: "Bradley Hand ITC, cursive", color: "#e75480", fontWeight: "bold" }}
            >
              Book The Look You Want
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name:</label>
                <input
                  type="text"
                  className="form-control border-2 rounded-4"
                  placeholder="Enter your full name"
                  style={{ borderColor: "#f5b2ca" }}
                  {...register("name")}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email:</label>
                <input
                  type="email"
                  className="form-control border-2 rounded-4"
                  placeholder="example@email.com"
                  style={{ borderColor: "#f5b2ca" }}
                  {...register("email")}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Phone#:</label>
                <input
                  type="tel"
                  className="form-control border-2 rounded-4"
                  placeholder="+92 3xx xxx xxxx"
                  style={{ borderColor: "#f5b2ca" }}
                  {...register("phone")}
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
              </div>

              {/* Contact Method */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Preferred Contact:</label>
                <div>
                  {["Email", "Phone", "Either"].map((method) => (
                    <div key={method} className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        id={method}
                        value={method}
                        {...register("contactMethod")}
                      />
                      <label htmlFor={method} className="form-check-label text-muted">
                        {method}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.contactMethod && <p className="text-danger">{errors.contactMethod.message}</p>}
              </div>

              {/* Services */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Services Required:</label>
                <input
                  type="text"
                  className="form-control border-2 rounded-4"
                  placeholder="e.g. Bridal Makeup, Party Makeup..."
                  style={{ borderColor: "#f5b2ca" }}
                  {...register("service")}
                />
                {errors.service && <p className="text-danger">{errors.service.message}</p>}
              </div>

              {/* Date */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Date & Time:</label>
                <input
                  type="datetime-local"
                  className="form-control border-2 rounded-4"
                  style={{ borderColor: "#f5b2ca" }}
                  {...register("datetime")}
                />
                {errors.datetime && <p className="text-danger">{errors.datetime.message}</p>}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn w-100 py-2 fw-semibold"
                style={{ backgroundColor: "#e75480", color: "white", borderRadius: "30px" }}
              >
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img
              src={models}
              alt="Model"
              className="img-fluid rounded-5 shadow-sm"
              style={{ maxHeight: "480px", border: "3px solid #f5b2ca" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
