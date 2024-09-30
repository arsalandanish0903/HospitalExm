import React, { useEffect, useState } from 'react';

function DoctorSearch() {
  const [specialization, setSpecialization] = useState('');
  const [department, setDepartment] = useState('');
  const [availability, setAvailability] = useState('');
  const [doctorData, setDoctorData] = useState(null);

  const handleSearch = () => {
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((data) => {
        setDoctorData(data);
        console.log(data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [])

  return (
    <div className="px-10 mx-auto w-full mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center mb-4">Search for Doctors</h2>

      <div className='flex items-center justify-between gap-4'>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Specialization</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Department</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="surgery">Surgery</option>
          <option value="pediatrics">Pediatrics</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Availability</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setAvailability(e.target.value)}
          value={availability}
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        onClick={handleSearch}
      >
        Search
      </button>
      </div>      

      {doctorData && (
        <table className="w-full mt-6 border-2 border-gray-300 text-center">
          <thead className="bg-gray-100 border-2">
            <tr>
              <th className="p-2 border">Specialization</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">{doctorData.title}</td>
              <td className="p-2 border">{doctorData.id}</td>
              <td className="p-2 border">{doctorData.description}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DoctorSearch;
