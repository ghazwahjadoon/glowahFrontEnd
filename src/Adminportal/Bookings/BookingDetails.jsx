import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookingDetails() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Dummy booking data
    setBooking({
      id: 1,
      name: "Sara Khan",
      email: "sara@gmail.com",
      phone: "0321-4567890",
      service: "Bridal Makeup 💍",
      date: "2025-10-20",
      time: "2:00 PM",
      notes: "Needs heavy eye makeup with gold shimmer ✨",
      status: "Pending",
    });
  }, []);

  const handleApprove = () => {
    setBooking({ ...booking, status: "Approved" });
    alert("✅ Booking approved!");
  };

  const handleCancel = () => {
    setBooking({ ...booking, status: "Cancelled" });
    alert("❌ Booking cancelled.");
  };

  if (!booking) return <h3 style={{ textAlign: "center" }}>Loading...</h3>;

  // --- Styles for a Black and White Aesthetic ---

  // Grayscale palette
  const white = "#FFFFFF";
  const black = "#000000";
  const lightGray = "#F5F5F5"; // Background
  const mediumGray = "#E0E0E0"; // Borders/Dividers
  const darkGray = "#333333"; // Text

  // Status style utility
  const getStatusStyles = (status) => {
    let color, bgColor;
    switch (status) {
      case "Approved":
        color = black;
        bgColor = "#BDBDBD"; // Darker gray for approved
        break;
      case "Cancelled":
        color = black;
        bgColor = "#BDBDBD"; // Darker gray for cancelled
        break;
      default: // Pending
        color = black;
        bgColor = "#EEEEEE"; // Lightest gray for pending
    }
    return { color, bgColor };
  };

  const statusStyles = getStatusStyles(booking.status);

  return (
    <div
      style={{
        background: lightGray,
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: white,
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Subtle shadow
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: black,
            marginBottom: "30px",
            fontSize: "1.8rem",
            borderBottom: `1px solid ${mediumGray}`,
            paddingBottom: "15px",
            fontWeight: "normal",
          }}
        >
          📋 Booking Details
        </h2>

        {/* Details List */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Client:</b> {booking.name}
          </p>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Email:</b> {booking.email}
          </p>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Phone:</b> {booking.phone}
          </p>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Service:</b> {booking.service}
          </p>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Date:</b> {booking.date}
          </p>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Time:</b> {booking.time}
          </p>
          <p style={{ margin: "12px 0", borderBottom: `1px dashed ${mediumGray}`, paddingBottom: "8px" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Notes:</b> {booking.notes}
          </p>
          <p style={{ margin: "12px 0" }}>
            <b style={{ color: darkGray, minWidth: "90px", display: "inline-block" }}>Status:</b>{" "}
            <span
              style={{
                background: statusStyles.bgColor,
                color: statusStyles.color,
                padding: "4px 12px",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "0.9rem",
                border: `1px solid ${black}`,
              }}
            >
              {booking.status}
            </span>
          </p>
        </div>

        {/* Buttons Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            gap: "10px",
          }}
        >
          <button
            onClick={handleApprove}
            style={{
              flex: 1,
              background: black, // Solid black button
              color: white,
              border: "none",
              borderRadius: "5px",
              padding: "10px 15px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
             Approve
          </button>

          <button
            onClick={handleCancel}
            style={{
              flex: 1,
              background: darkGray, // Dark gray button
              color: white,
              border: "none",
              borderRadius: "5px",
              padding: "10px 15px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
             Cancel
          </button>

          <Link
            to="/bookingList"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              background: white, // White button with black border
              color: black,
              border: `1px solid ${black}`,
              borderRadius: "5px",
              padding: "10px 15px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            🔙 Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;