import React, { useState } from "react";

const Sidebar2 = () => {
  const [general, setGeneral] = useState(false);
  const [account, setAccount] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className="sidebar2">
      <h1>SidebarExample 2</h1>

      <div className="profile2">
        <img src="../images/anonym2.png"  alt="" />
        <h2>Jane Doe Svensson</h2>
      </div>
      <h3 className="role2">Admin</h3>

      <div className="sidebar-item">
        <span>
          <i className="fa-solid fa-gear"></i>
          General
        </span>
        <i
          className="fa-solid fa-chevron-down toggle-button"
          onClick={() => setGeneral(!general)}
        ></i>
      </div>
      {general ? (
        <div className="sidebar-content2">
          <a href="#">
            <span>Home</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
      ) : null}
      <div className="sidebar-item">
        <span>
          <i className="fa-solid fa-circle-info"></i>
          Account
        </span>
        <i
          className="fa-solid fa-chevron-down toggle-button"
          onClick={() => setAccount(!account)}
        ></i>
      </div>
      {account ? (
        <div className="sidebar-content2">
          <a href="#">
            <span>Log In</span>
          </a>
          <a href="#">
            <span>Register</span>
          </a>
          <a href="#">
            <span>Forgot Password</span>
          </a>
          <a href="#">
            <span>Reset Password</span>
          </a>
        </div>
      ) : null}
      <div className="sidebar-item">
        <span>
          <i className="fa-solid fa-table"></i>
          Table
        </span>
      </div>

      <div className="sidebar-item">
        <span>
          <i className="fa-solid fa-user"></i>
          Profile
        </span>
        <i
          className="fa-solid fa-chevron-down toggle-button"
          onClick={() => setProfile(!profile)}
        ></i>
      </div>
      {profile ? (
        <div className="sidebar-content2">
          <a href="#">
            <span>Name</span>
          </a>
          <a href="#">
            <span>Email</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
        </div>
      ) : null}
      <div className="sidebar-item">
        <span>
        <i className="fa-solid fa-gears"></i>
          Support
        </span>
      </div>
    </div>
  );
};

export default Sidebar2;
