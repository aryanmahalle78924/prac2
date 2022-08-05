import React from "react";
import "./Homepage.css";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="giffy">
        <img src="https://identitydivision.co/wp-content/uploads/2018/12/GeorgeZen.gif" />
      </div>

      <div className="headerName">
        <h1>Atharva Mahalle</h1>
        <p>
          A Fullstack Developer With the passion of learning📕 and innovation💥
        </p>
        <Button color="primary" className="p-2 buttonLearn">
          Learn More 🎉
        </Button>
      </div>

      <div className="socialIcons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-facebook"></i>
      </div>
    </div>
  );
};

export default HomePage;
