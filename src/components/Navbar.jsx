  import React, { useState, useEffect } from "react";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Link, useNavigate } from "react-router-dom";
  import Whitelogo from '../assets/Whitelogo.jpg';
  import { CiSearch } from "react-icons/ci";

  function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      setUser(localStorage.getItem("token"));

      const handleAuthChange = () => {
        setUser(localStorage.getItem("token"));
      };

      window.addEventListener("authChanged", handleAuthChange);

      return () => window.removeEventListener("authChanged", handleAuthChange);
    }, []);

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userEmail");
      setUser(null);

      // Notify navbar
      window.dispatchEvent(new Event("authChanged"));

      navigate("/"); // redirect to home page
    };

    return (
      <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: "white", height: "15vh", width: "100%" }}>
          <div className="container-fluid">

            <Link className="navbar-brand" to="/">
              <img src={Whitelogo} alt="Logo" style={{ height: "60px" }} />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: "30px" }}>
                <li className="nav-item"><Link className="nav-link active" to="/" style={{ fontFamily: 'Inter',fontWeight: 'bold' }}>HOME</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/services" style={{ fontFamily: 'Inter',fontWeight: 'bold' }}>SERVICES</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/gallery" style={{ fontFamily: 'Inter',fontWeight: 'bold' }}>SHOP</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/gallery" style={{ fontFamily: 'Inter',fontWeight: 'bold' }}>GALLERY</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/booking" style={{ fontFamily: 'Inter',fontWeight: 'bold' }}>BOOKING</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/aboutus" style={{ fontFamily: 'Inter',fontWeight: 'bold' }}>ABOUT US</Link></li>
              </ul>

              <Link to="/booking" className="btn btn-outline-success">Book Now</Link>

              <button className="btn btn-light ms-3">
                <CiSearch size={22} />
              </button>

              {/* CART visible only when logged in */}
              {user && (
                <Link to="/Cart" className="btn btn-light ms-3">
                  🛒
                </Link>
              )}

              {/* Only show Logout button when logged in */}
              {user && (
                <button onClick={handleLogout} className="btn btn-danger ms-3">
                  Logout
                </button>
              )}

              {/* Show Login button when not logged in */}
              {!user && (
                <Link to="/login" className="btn btn-light ms-3">
                  Login
                </Link>
              )}

            </div>
          </div>
        </nav>
      </div>
    );
  }

  export default Navbar;
