import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllPropertiesCards from "../user/AllPropertiesCards";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";

const Home = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", paddingLeft: "15px" }}>
          HouseHunt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end" style={{ paddingRight: "15px" }}>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* HERO SECTION */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>HOUSE HUNT</h1>
        <h2 style={{ fontSize: "28px", marginTop: "10px" }}>Welcome to House Hunt</h2>
        <p style={{ fontSize: "18px", marginBottom: "30px", maxWidth: "600px", margin: "0 auto" }}>
          Find your dream home with our comprehensive house hunting platform.
        </p>
        <button style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          marginTop: "20px",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </div>

      {/* IMAGE PREVIEW SECTION */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", padding: "20px" }}>
        {[p1, p2, p3, p4].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`House ${idx + 1}`}
            style={{
              width: "250px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          />
        ))}
      </div>

      {/* PROPERTY LISTING SECTION */}
      <AllPropertiesCards />
    </div>
  );
};

export default Home;