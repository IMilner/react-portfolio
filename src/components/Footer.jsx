import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div id="contact">
        <div className="footerBtmDiv">
          <div className="btmDivLeft">
            <form action="">
              <h4>Enter Details</h4>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Number" />
              <textarea name="" id="" placeholder="Write message"></textarea>
              <input id="submitBtn" type="submit" />
            </form>
          </div>
          <div className="btmDivRight">
            <a
              id="profile-link"
              href="https://github.com/take2nz"
              target="_blank"
            >
              MY GIT HUB
            </a>
            <h3>add me on social media</h3>
            <div className="iconDiv">
              <div>
                <a href="">
                  <img src="Images/facebook-512x512-721949.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="Images/instagram-512x512-498425.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="Images/pinterest-512x512-498415.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="Images/snapchat-512x512-498414.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="Images/twitter-512x512-498411.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
