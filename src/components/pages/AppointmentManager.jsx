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
    <div className="w-full container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mt-4 mb-8">Manage Appointments</h2>
      <table className="w-full text-left border-collapse mt-5">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-2"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-2"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Phone No"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-2"
              />
            </td>
            <td>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-2"
              />
            </td>
            <td>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-2"
              />
            </td>
            <td>
              <button
                className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-900 transition"
                onClick={bookAppointment}
              >
                Book Appointment
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {appointments.length > 0 ? (
        <div className="overflow-x-auto mt-5">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">First Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Phone No</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{appt.firstName}</td>
                  <td className="border border-gray-300 px-4 py-2">{appt.lastName}</td>
                  <td className="border border-gray-300 px-4 py-2">{appt.phoneNo}</td>
                  <td className="border border-gray-300 px-4 py-2">{appt.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{appt.time}</td>
                  <td className="border border-gray-300 px-4 py-2 flex gap-4">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => cancelAppointment(appt.id)}
                    >
                      Cancel
                    </button>
                    <button
                      className="ml-2 bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-900 transition"
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
        <p className="text-center mt-5">No appointments booked</p>
      )}


      {/* Reschedule Inputs */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Reschedule Appointment</h3>
        <div className="flex space-x-4 mt-2">
          <input
            type="date"
            value={rescheduleDate}
            onChange={(e) => setRescheduleDate(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="New Date"
          />
          <input
            type="time"
            value={rescheduleTime}
            onChange={(e) => setRescheduleTime(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="New Time"
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