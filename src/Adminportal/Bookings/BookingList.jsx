import { useState } from "react";

function BookingList() {
  const [bookings] = useState([
    {
      id: 1,
      name: "Sara Khan",
      service: "Bridal Makeup ",
      date: "2025-10-20",
      time: "2:00 PM",
      status: "Pending",
    },
    {
      id: 2,
      name: "Ayesha Malik",
      service: "Party Makeup ",
      date: "2025-10-22",
      time: "4:00 PM",
      status: "Approved",
    },
    {
      id: 3,
      name: "Noor Fatima",
      service: "Nikkah Look ",
      date: "2025-10-25",
      time: "1:30 PM",
      status: "Cancelled",
    },
  ]);

  // 💖 Helper for colored status labels
  const getStatusStyle = (status) => {
    if (status === "Approved")
      return { backgroundColor: "#d4f8d4", color: "#228B22" };
    if (status === "Cancelled")
      return { backgroundColor: "#ffe6e6", color: "#b30000" };
    return { backgroundColor: "#fff0f5", color: "#b30059" };
  };

  return (
    <div
      style={{
      
        minHeight: "100vh",
        padding: "40px 0",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "90%",
          maxWidth: "900px",
          margin: "auto",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(238, 109, 124, 0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
           
            marginBottom: "25px",
            fontFamily: "cursive",
          }}
        >
          Booking List
        </h2>
       <hr style={{color:'red'}}/>
        <table className="table table-hover"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            borderRadius: "10px",
           
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#ffe6ee",
                color: "#b30059",
                fontWeight: "bold",
              }}
            >
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Service</th>
              <th style={{ padding: "12px" }}>Date</th>
              <th style={{ padding: "12px" }}>Time</th>
              <th style={{ padding: "12px" }}>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, index) => (
              <tr
                key={b.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff9fb" : "#fff5f8",
                  borderBottom: "1px solid #ffe6ee",
                }}
              >
                <td style={{ padding: "10px" }}>{b.id}</td>
                <td style={{ padding: "10px" }}>{b.name}</td>
                <td style={{ padding: "10px" }}>{b.service}</td>
                <td style={{ padding: "10px" }}>{b.date}</td>
                <td style={{ padding: "10px" }}>{b.time}</td>
                <td style={{ padding: "10px" }}>
                  <span
                    style={{
                      ...getStatusStyle(b.status),
                      padding: "5px 12px",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;