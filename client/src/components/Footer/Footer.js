import "./Footer.css";

import React from "react";

import alaina from "../../assets/img/alaina.jpg";
import bryan from "../../assets/img/bryan.jpg";
import noah from "../../assets/img/noah.jpg";

import {
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>
            React arcade is a basic game arcade made by 3 friend who met in a
            coding bootcamp and wanted to learn more about programming basic
            games.
          </h4>
          <div className="hub">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>https://github.com/AlainaRosendahl/react-arcade</p>
            </div>
          </div>
          <div className="copy">
            <FaCopyright
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <h4>by Project 3 Group 2</h4>
          </div>
        </div>
        <div className="right">
          <div className="dev-container">
            <h4>Alaina Rosendahl</h4>
            <div>
              <img className="dev-img" src={alaina} alt="developer" />
            </div>
            <div className="socials">
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <FaGithub
                  size={30}
                  style={{
                    color: "#fff",
                    marginRight: "2rem",
                  }}
                />
              </a>
              <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                <FaTwitter
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a href="https://linkedin.com/" rel="noreferrer" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
            </div>
            <div className="dev-email">
              <a
                href="mailto:bwilk483@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaMailBulk
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                YOUR EMAIL HERE AND ABOVE IN HREF
              </a>
            </div>
          </div>
          <div className="dev-container">
            <h4>Noah</h4>
            <div>
              <img className="dev-img" src={noah} alt="developer" />
            </div>

            <div className="socials">
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <FaGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                <FaTwitter
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a href="https://linkedin.com/" rel="noreferrer" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
            </div>
            <div className="dev-email">
              <a
                href="mailto:bwilk483@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaMailBulk
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                YOUR EMAIL HERE AND ABOVE IN HREF
              </a>
            </div>
          </div>
          <div className="dev-container">
            <h4>Bryan Wilkerson</h4>
            <div>
              <img className="dev-img" src={bryan} alt="developer" />
            </div>

            <div className="socials">
              <a
                href="https://github.com/bwilk483"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://facebook.com/bwilk483"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
              <a href="https://linkedin.com/" rel="noreferrer" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </a>
            </div>

            <div className="dev-email">
              <a
                href="mailto:bwilk483@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaMailBulk
                  size={30}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                bwilk483@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
