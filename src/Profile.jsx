// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Profile() {
//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     city: "",
//     address: "",
//     phone: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get("http://localhost:5000/api/users/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setUser(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

//   const handleUpdate = () => {
//     const token = localStorage.getItem("token");
//     axios
//       .put("http://localhost:5000/api/users/profile", user, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setUser(res.data);
//         alert("Profile updated successfully");
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#faf6f8" }}>
//       <div className="card p-4 shadow-sm" style={{ maxWidth: "480px", width: "100%", borderRadius: "12px", backgroundColor: "white", border: "1px solid #f8d7e2" }}>
//         <h3 className="text-center mb-4" style={{ color: "#ff80ab", fontWeight: "600" }}>My Profile</h3>

//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input type="text" name="fullName" value={user.fullName} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" value={user.email} disabled className="form-control" />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Phone</label>
//           <input type="text" name="phone" value={user.phone || ""} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">City</label>
//           <input type="text" name="city" value={user.city} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Address</label>
//           <input type="text" name="address" value={user.address} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="text-center">
//           <button onClick={handleUpdate} className="btn btn-primary">Update Profile</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
