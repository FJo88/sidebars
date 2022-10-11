import React, { useState } from "react";

const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar3" style={{ width: isOpen ? "25%" : "13%", marginLeft: isOpen ? "0%": "6.25%" }}>
      <h1 style={{ display: isOpen ? "block" : "none", marginBottom: "100px" }}>SidebarExample 3</h1>
      <div className="container3">
        <div className="top-section">
          <div className="img-bar">
            <img
              src="../images/petra.png"
              alt=""
              style={{ display: isOpen ? "block" : "none" }}
            />
            <a href="#">
              <i
                className="fa-solid fa-bars"
                style={{
                  fontSize: isOpen ? "80px" : "80px",
                  margin: isOpen ? "10px" : "50px",
                  paddingTop: isOpen ? "0px" : "100px"
                }}
                
                onClick={toggle}
              ></i>
            </a>
          </div>
        </div>
        <div className="navigation3">
          <a href="#" style={{ color: "blue" }}>
            <i className="fa-solid fa-table" style={{ paddingLeft: isOpen ? "100px" : "85px", fontSize: isOpen ? "2rem": "3rem" }}></i>
            {isOpen ? <span>Dashboard</span> : null}
          </a>
          <a href="#" style={{ color: "red" }}>
            <i className="fa-solid fa-user" style={{ paddingLeft: isOpen ? "100px" : "85px", fontSize: isOpen ? "2rem": "3rem" }}></i>
            {isOpen ? <span>About</span> : null}
          </a>
          <a href="#" style={{ color: "green" }}>
            <i className="fa-solid fa-chart-simple" style={{ paddingLeft: isOpen ? "100px" : "85px", fontSize: isOpen ? "2rem": "3rem" }}></i>
            {isOpen ? <span>Analytics</span> : null}
          </a>
          <a href="#" style={{ color: "yellow" }}>
            <i className="fa-solid fa-message" style={{ paddingLeft: isOpen ? "100px" : "85px", fontSize: isOpen ? "2rem": "3rem" }}></i>
            {isOpen ? <span>Comment</span> : null}
          </a>
          <a href="#" style={{ color: "blue" }}>
            <i className="fa-solid fa-bag-shopping" style={{ paddingLeft: isOpen ? "100px" : "85px", fontSize: isOpen ? "2rem": "3rem" }}></i>
            {isOpen ? <span>Product</span> : null}
          </a>
          <a href="#" style={{ color: "red" }}>
            <i className="fa-solid fa-list" style={{ paddingLeft: isOpen ? "100px" : "85px", fontSize: isOpen ? "2rem": "3rem" }}></i>
            {isOpen ? <span>Product List</span> : null}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar3;
