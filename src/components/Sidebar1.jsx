import React from "react";

const Sidebar1 = () => {
  return (
    <div className="sidebar1">
      <h1>SidebarExample 1</h1>
      <div>
        <center>
          <img src="../images/anonym.png" alt="" />
          <h3>Joe Doe</h3>
        </center>
        <div className="links">
          <a href="#">
            <i class="fa-solid fa-desktop"></i>
            <span>Dashboard</span>
          </a>
          <a href="#">
            <i class="fa-solid fa-cogs"></i>
            <span>Components</span>
          </a>
          <a href="#">
            <i class="fa-solid fa-table"></i>
            <span>Tables</span>
          </a>
          <a href="#">
            <i class="fa-solid fa-th"></i>
            <span>Forms</span>
          </a>
          <a href="#">
            <i class="fa-solid fa-info-circle"></i>
            <span>About</span>
          </a>
          <a href="#">
            <i class="fa-solid fa-sliders"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
