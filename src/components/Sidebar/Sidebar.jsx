import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaHospitalUser } from "react-icons/fa6";


function Sidebar() {
  const [isPatientsOpen, setIsPatientsOpen] = useState(false);
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleDropdown = (setDropdownOpen) => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className='h-screen w-full max-w-[300px] bg-blue-400'>
      <div className='p-4 flex items-center justify-center'>
        {/* Replace with actual logo */}
          <FaHospitalUser className='text-8xl text-white'/>
      </div>

      <div className='p-4'>
        <ul>
          <li>
            <div
              className='flex justify-between items-center cursor-pointer rounded-lg bg-blue-700 text-white p-2 my-4'
              onClick={() => toggleDropdown(setIsPatientsOpen)}
            >
              Patients
              {isPatientsOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isPatientsOpen && (
              <ul className='pl-4 bg-blue-700 my-2 flex flex-col gap-4 p-4 rounded-lg text-white'>
                <li>
                  <NavLink to='/patients/available'
                  className='bg-[#]'
                  >Available Doctors</NavLink>
                </li>
                <li>
                  <NavLink to='/patients/appointments'>Appointments</NavLink>
                </li>
                <li>
                  <NavLink to='/patients/history'>History</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div
              className='flex justify-between items-center cursor-pointer rounded-lg bg-blue-700 text-white p-2 my-4'
              onClick={() => toggleDropdown(setIsDoctorsOpen)}
            >
              Doctors
              {isDoctorsOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isDoctorsOpen && (
              <ul className='pl-4 bg-blue-700 my-2 flex flex-col gap-4 p-4 rounded-lg text-white'>
                <li>
                  <NavLink to='/doctors/specialization'>Specialization</NavLink>
                </li>
                <li>
                  <NavLink to='/doctors/schedule'>Schedule</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div
              className='flex justify-between items-center cursor-pointer rounded-lg bg-blue-700 text-white p-2 my-4'
              onClick={() => toggleDropdown(setIsAdminOpen)}
            >
              Admin
              {isAdminOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isAdminOpen && (
              <ul className='pl-4 bg-blue-700 my-2 flex flex-col gap-4 p-4 rounded-lg text-white'>
                <li>
                  <NavLink to='/admin/users'>Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to='/admin/settings'>Settings</NavLink>
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
