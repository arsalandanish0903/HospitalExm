import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaHospitalUser } from "react-icons/fa6";

function Sidebar() {
  const [isPatientsOpen, setIsPatientsOpen] = useState(false);
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleDropdown = (setDropdownOpen) => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className='h-screen w-full max-w-[300px] bg-blue-500 shadow-lg'>
      {/* Sidebar Header */}
      <div className='p-6 flex items-center justify-center'>
        <FaHospitalUser className='text-8xl text-white' />
      </div>

      {/* Sidebar Menu */}
      <div className='p-4'>
        <ul>
          {/* Patients Section */}
          <li>
            <div
              className='flex justify-between items-center cursor-pointer rounded-lg bg-blue-700 text-white p-3 my-3 transition-all hover:bg-blue-800'
              onClick={() => toggleDropdown(setIsPatientsOpen)}
            >
              Patients
              {isPatientsOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isPatientsOpen && (
              <ul className='pl-4 bg-blue-700 my-2 flex flex-col gap-3 p-4 rounded-lg text-white'>
                <li>
                  <NavLink
                    to='/patients/available'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    Available Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/patients/appointments'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/patients/history'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    History
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Doctors Section */}
          <li>
            <div
              className='flex justify-between items-center cursor-pointer rounded-lg bg-blue-700 text-white p-3 my-3 transition-all hover:bg-blue-800'
              onClick={() => toggleDropdown(setIsDoctorsOpen)}
            >
              Doctors
              {isDoctorsOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isDoctorsOpen && (
              <ul className='pl-4 bg-blue-700 my-2 flex flex-col gap-3 p-4 rounded-lg text-white'>
                <li>
                  <NavLink
                    to='/doctors/specialization'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    Specialization
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/doctors/schedule'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    Schedule
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Admin Section */}
          <li>
            <div
              className='flex justify-between items-center cursor-pointer rounded-lg bg-blue-700 text-white p-3 my-3 transition-all hover:bg-blue-800'
              onClick={() => toggleDropdown(setIsAdminOpen)}
            >
              Admin
              {isAdminOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isAdminOpen && (
              <ul className='pl-4 bg-blue-700 my-2 flex flex-col gap-3 p-4 rounded-lg text-white'>
                <li>
                  <NavLink
                    to='/admin/users'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/admin/settings'
                    className='hover:bg-blue-500 p-2 rounded transition-colors'
                  >
                    Settings
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
