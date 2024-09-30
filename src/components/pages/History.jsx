import React, { useState, useEffect } from "react";

const History = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch the appointment history data (you may use an API here)
  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("/api/appointment-history"); // Replace with actual API
      const data = await response.json();
      setAppointments(data);
    };
  
    fetchAppointments();
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Appointment History</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Doctor</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {appointment.doctor}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {appointment.department}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`${
                        appointment.status === "Completed"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
