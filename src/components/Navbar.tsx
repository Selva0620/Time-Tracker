import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <button
        className="sidebar-toggle"
        style={{color:"black"}}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖' : '☰'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="nav-links">
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/projects"  className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'active' : '')}>
          Tasks
        </NavLink>
        <NavLink to="/timetracking"  className={({ isActive }) => (isActive ? 'active' : '')}>
          Time Tracker
        </NavLink>
        {/* <NavLink to="/reports"  className={({ isActive }) => (isActive ? 'active' : '')}>
          Reports
        </NavLink> */}
      </div>
      {/* <div className="settings">
        <NavLink to="/settings"  className={({ isActive }) => (isActive ? 'active' : '')}>
          Settings
        </NavLink>
      </div> */}
    </div>
    </>
  );
};

export default Navbar;
