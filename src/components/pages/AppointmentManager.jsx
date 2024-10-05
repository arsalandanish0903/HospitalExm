import React, { useState } from 'react';

function AppointmentManager() {
  const [appointments, setAppointments] = useState([]); // List of appointments
  const [maxAppointments, setMaxAppointments] = useState(5); // Max limit of appointments
  const [firstName, setFirstName] = useState(''); // First name input
  const [lastName, setLastName] = useState(''); // Last name input
  const [phoneNo, setPhoneNo] = useState(''); // Phone number input
  const [date, setDate] = useState(''); // Date input
  const [time, setTime] = useState(''); // Time input
  const [rescheduleDate, setRescheduleDate] = useState(''); // Reschedule date
  const [rescheduleTime, setRescheduleTime] = useState(''); // Reschedule time

  // Function to book an appointment
  const bookAppointment = () => {
    if (firstName && lastName && phoneNo && date && time && appointments.length < maxAppointments) {
      const newAppt = {
        id: appointments.length + 1,
        firstName,
        lastName,
        phoneNo,
        date,
        time,
      };
      setAppointments([...appointments, newAppt]);
      setFirstName(''); // Reset input fields after booking
      setLastName('');
      setPhoneNo('');
      setDate('');
      setTime('');
    } else if (appointments.length >= maxAppointments) {
      alert('Max appointments reached');
    } else {
      alert('Please fill in all fields');
    }
  };

  // Function to cancel an appointment
  const cancelAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  // Function to reschedule an appointment
  const rescheduleAppointment = (id) => {
    if (rescheduleDate && rescheduleTime) {
      setAppointments(
        appointments.map((appt) =>
          appt.id === id ? { ...appt, date: rescheduleDate, time: rescheduleTime } : appt
        )
      );
      setRescheduleDate(''); // Reset input fields after rescheduling
      setRescheduleTime('');
    } else {
      alert('Please provide both date and time for rescheduling');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Manage Appointments</h2>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-left py-2">First Name</th>
              <th className="text-left py-2">Last Name</th>
              <th className="text-left py-2">Phone No</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Time</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="py-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </td>
              <td className="py-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </td>
              <td className="py-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </td>
              <td className="py-2">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </td>
              <td className="py-2">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </td>
              <td className="py-2">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                  onClick={bookAppointment}
                >
                  Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {appointments.length > 0 ? (
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left border-collapse bg-white shadow-md rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4">First Name</th>
                <th className="py-3 px-4">Last Name</th>
                <th className="py-3 px-4">Phone No</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-100 transition">
                  <td className="py-2 px-4">{appt.firstName}</td>
                  <td className="py-2 px-4">{appt.lastName}</td>
                  <td className="py-2 px-4">{appt.phoneNo}</td>
                  <td className="py-2 px-4">{appt.date}</td>
                  <td className="py-2 px-4">{appt.time}</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      onClick={() => cancelAppointment(appt.id)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                      onClick={() => rescheduleAppointment(appt.id)}
                    >
                      Reschedule
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-5">No appointments booked</p>
      )}

      {/* Reschedule Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Reschedule Appointment</h3>
        <div className="flex gap-4">
          <input
            type="date"
            value={rescheduleDate}
            onChange={(e) => setRescheduleDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="time"
            value={rescheduleTime}
            onChange={(e) => setRescheduleTime(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AppointmentManager;





{/* <div className="flex items-center">
<input
  type="text"
  placeholder="Enter appointment time"
  value={newAppointment}
  onChange={(e) => setNewAppointment(e.target.value)}
  className="w-full p-2 border border-gray-300 rounded mb-2"
/>
<button
  className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
  onClick={bookAppointment}
>
  Book Appointment
</button>
</div>


<div className="mb-4">
<h3 className="text-lg font-semibold">Your Appointments:</h3>
{appointments.length > 0 ? (
  <ul className="list-disc list-inside">
    {appointments.map((appt) => (
      <li key={appt.id} className="mb-2">
        <span>Appointment {appt.id}: {appt.time}</span>
        <button
          className="ml-4 bg-red-500 text-white p-1 rounded"
          onClick={() => cancelAppointment(appt.id)}
        >
          Cancel
        </button>
        <button
          className="ml-2 bg-blue-500 text-white p-1 rounded"
          onClick={() => rescheduleAppointment(appt.id)}
        >
          Reschedule
        </button>
      </li>
    ))}
  </ul>
) : (
  <p>No appointments booked.</p>
)}
</div>


<div className="mb-4">
<input
  type="text"
  placeholder="Enter new time to reschedule"
  value={rescheduleTime}
  onChange={(e) => setRescheduleTime(e.target.value)}
  className="w-full p-2 border border-gray-300 rounded mb-2"
/>
</div> */}