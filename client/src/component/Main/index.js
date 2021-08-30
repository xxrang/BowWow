import React from "react";
import { StyledMain } from "./StyledMain";
//import ScrollReveal from 'scrollreveal'

const Home = ({ handleClickForService }) => {
  /*ScrollReveal({
    reset: true,
    delay: 300,
    duration: 400,
  });
  
  ScrollReveal().reveal('.paw1', { delay: 300 });
  ScrollReveal().reveal('.paw2', { delay: 600 });
  ScrollReveal().reveal('.paw3', { delay: 900 }); 
  ScrollReveal().reveal('.rightBox', { delay: 1200 }); 
  */

  return (
    <StyledMain>
      <div className="pawImgs">
        <img className="paw1" src="../images/paw.jpg" alt="paw" />
        <img className="paw2" src="../images/paw.jpg" alt="paw" />
        <img className="paw3" src="../images/paw.jpg" alt="paw" />
      </div>
      <div className="rightBox">
        <img className="logo" src="../images/logo.png" alt="logoImg/" />
        <div className="homeText">
          <p>유기견 보호 커뮤니티,</p>
          <p>
            <span
              style={{ color: "#48cfad", fontSize: "32px", fontWeight: "800" }}
            >
              BowWow
            </span>{" "}
            와 함께하세요.{" "}
          </p>
        </div>

        <button onClick={handleClickForService}>
          <span className="shape">Get Start!</span>
        </button>
      </div>
    </StyledMain>
  );
};

export default Home;
