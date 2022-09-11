import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaPills } from "react-icons/fa";
import { TbVaccine } from "react-icons/tb"
import './Sidebar.css';
const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <FaPills/> Prescriptions
      </a>
      <a className="menu-item" href="/salads">
        <TbVaccine/> Vaccination
      </a>
    </Menu>
  );
};

export default Sidebar