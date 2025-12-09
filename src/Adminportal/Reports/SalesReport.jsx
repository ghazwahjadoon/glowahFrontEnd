import React from "react";

const reports = [
  {
    id: 1,
    name: "Ayesha Khan",
    email: "ayesha@gmail.com",
    issue: "Booking page kept loading and didn’t confirm my appointment.",
    date: "2025-10-17",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sara Malik",
    email: "sara.malik@yahoo.com",
    issue: "Received wrong shade of foundation in my order.",
    date: "2025-10-16",
    status: "Resolved",
  },
  {
    id: 3,
    name: "Fatima Noor",
    email: "fatima.noor@gmail.com",
    issue: "Couldn’t make payment through JazzCash.",
    date: "2025-10-15",
    status: "Pending",
  },
  {
    id: 4,
    name: "Hira Iqbal",
    email: "hira.iqbal@hotmail.com",
    issue: "My booking confirmation email didn’t arrive.",
    date: "2025-10-12",
    status: "Resolved",
  },
];

function ReportsList() {
  return (
    <div className="p-4 bg-white rounded shadow-sm border">
      <h2 className="text-center mb-4 text-uppercase  ">
        Customer Reports & Feedback
      </h2>

      <div className="table-responsive">
        <table className="table table-hover align-middle text-center border">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Issue Description</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td className="fw-semibold">{r.name}</td>
                <td>{r.email}</td>
                <td className="text-start">{r.issue}</td>
                <td>{r.date}</td>
                <td>
                  {r.status === "Resolved" ? (
                    <span className="badge bg-success">{r.status}</span>
                  ) : (
                    <span className="badge bg-warning text-dark">{r.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportsList;
