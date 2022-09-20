import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.row}>
        <div>
          <a>Udemy Busness</a>
          <a>Teach on Udemy</a>
          <a>Get the app</a>
          <a>About us</a>
          <a>Contact us</a>
        </div>
        <div>
          <a>Careers</a>
          <a>Blog</a>
          <a>Help and Support</a>
          <a>Afiliate</a>
          <a>Investors</a>
          <a>Impressum Kontakt</a>
        </div>
        <div>
          <a>Terms</a>
          <a>Privacy Policy</a>
          <a>Cookie settings</a>
          <a>Sitemap</a>
          <a>Accessbility statements</a>
        </div>
        <div></div> <div></div>
        <div></div>
        <div>
          <button>
            <i className="fa fa-globe"></i>
            &nbsp;&nbsp;
            <span>English</span>
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <a href="/">
            <img src={require("../../assets/logo/Udemy_logo2.png")} />
          </a>
        </div>
        <div> </div> <div></div> <div></div>
        <div></div> <div></div>
        <div></div>
        <div></div>
        <div>
          <h6>© 2022 Udemy, Inc.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
