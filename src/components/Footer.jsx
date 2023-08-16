import React from "react";
import Form from "../components/Form";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div id="contact">
        <div className="divLeft">
          <Form></Form>
        </div>
        <div className="divRight">
          <a
            id="profile-link"
            href="https://github.com/IMilner"
            target="_blank"
          >
            MY GIT HUB
          </a>
          <h3 className="footerH3">Contact me on social media</h3>
          <div className="iconDiv">
            <a href="">
              <img src="Images/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="Images/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="Images/snapchat.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
