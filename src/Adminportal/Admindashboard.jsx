import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function Admindashboard() {

  // STATE to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // function to toggle menus
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <>
      <div
        className="container-fluid d-flex"
        style={{
          backgroundColor: "#f4f5f7",
          minHeight: "100vh",
          fontFamily: "Poppins, sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* Sidebar */}
        <div
          className="p-4"
          style={{
            backgroundColor: "#1f2937",
            width: "260px",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            position: "sticky",
            top: 0,
            height: "100vh",
            color: "#fff",
          }}
        >
          <h2 className="text-center mb-4" style={{ fontSize: "26px", fontWeight: "600" }}>
            Admin Panel
          </h2>

          <ul className="nav flex-column">

            {/* Dashboard */}
            <li className="nav-item mb-2">
              <Link
                to="/admindashboard"
                className="nav-link"
                style={{
                  color: "#e5e7eb",
                  backgroundColor: "#374151",
                  borderRadius: "10px",
                  padding: "10px 15px",
                }}
              >
                Dashboard
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item mb-2">
              
              <Link to="/ProductsPage"   className="nav-link"
                style={{
                  color: "#e5e7eb",
                  backgroundColor: "#374151",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  cursor: "pointer",
                }}>
               
               
              
                Products
             
                </Link>
            </li>

            {/* Reports */}
            <li className="nav-item mb-2">
              <div
                onClick={() => toggleMenu("reports")}
                className="nav-link"
                style={{
                  color: "#e5e7eb",
                  backgroundColor: "#374151",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  cursor: "pointer",
                }}
              >
                Reports
              </div>

              {openMenu === "reports" && (
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-2">
                    <Link
                      to="/salesreport"
                      className="nav-link"
                      style={{ color: "#d1d5db", fontSize: "14px", padding: "6px 12px" }}
                    >
                      Sales Report
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Bookings */}
            <li className="nav-item mb-2">
              <div
                onClick={() => toggleMenu("bookings")}
                className="nav-link"
                style={{
                  color: "#e5e7eb",
                  backgroundColor: "#374151",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  cursor: "pointer",
                }}
              >
                Bookings
              </div>

              {openMenu === "bookings" && (
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item mb-2">
                    <Link
                      to="/bookingdetails"
                      className="nav-link"
                      style={{ color: "#d1d5db", fontSize: "14px", padding: "6px 12px" }}
                    >
                      Booking Details
                    </Link>
                  </li>

                  <li className="nav-item mb-2">
                    <Link
                      to="/bookingList"
                      className="nav-link"
                      style={{ color: "#d1d5db", fontSize: "14px", padding: "6px 12px" }}
                    >
                      Booking List
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Customers */}
            <li className="nav-item mb-2">
              <Link
                to="/admin/customers"
                className="nav-link"
                style={{
                  color: "#e5e7eb",
                  backgroundColor: "#374151",
                  borderRadius: "10px",
                  padding: "10px 15px",
                }}
              >
                Customers
              </Link>
            </li>

            {/* Logout */}
            <li className="nav-item mt-auto text-center">
              <Link
                to="/logout"
                className="nav-link"
                style={{
                  color: "#f87171",
                  marginTop: "25px",
                  fontWeight: "600",
                }}
              >
                Logout
              </Link>
            </li>

          </ul>
        </div>

        {/* Main Content */}
        <div className="container-fluid p-5">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "#fff",
              padding: "15px 25px",
              borderRadius: "15px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
              marginBottom: "30px",
            }}
          >
            <h3 style={{ fontWeight: "600", color: "#1f2937", margin: 0 }}>
              Admin Dashboard
            </h3>
            <CgProfile size={40} color="#1f2937" />
          </div>

          <div
            className="text-center p-5"
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
              color: "#4b5563",
            }}
          >
            <h4 style={{ color: "#111827", fontWeight: "600" }}>
              Welcome to the Admin Panel
            </h4>
            <p>Manage products, bookings, reports, and customers from here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admindashboard;
