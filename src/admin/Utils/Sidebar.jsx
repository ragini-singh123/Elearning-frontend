import React from 'react';
import"./common.css";
import { Link } from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";





const Sidebar = () => {
  return (
<div className="sidebar">
    <ul>
        <li>
            <Link to={'/admin/dashboard'}>
            <div className="icon">
                <BiSolidHome />

            </div>
            <span>Home</span>
            </Link>
        </li>

        <li>
            <Link to={'/admin/course'}>
            <div className="icon">
                <FaBook />

            </div>
            <span>Courses</span>
            </Link>
        </li>

        <li>
            <Link to={'/admin/users'}>
            <div className="icon">
                <FaUserAlt />

            </div>
            <span>Users</span>
            </Link>
        </li>

        <li>
            <Link to={'/account'}>
            <div className="icon">
                <GrLogout />

            </div>
            <span>Logout</span>
            </Link>
        </li>
    </ul>
</div>
  )
}

export default Sidebar
