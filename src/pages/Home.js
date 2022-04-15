import React from "react";
import Header from "../components/header/Header";
import StylizedImage from "../components/image/StylizedImage";
import img1 from "../assets/images/img1.jpg";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <Header />
        <section>
          <div className="flex-center width-100 height-100 about-sect">
            <div className="flex-column">
              <h2 className="sect-title align-start">About</h2>
              <StylizedImage
                src={img1}
                shadowDirection="se"
                width="max(60%, 650px)"
              />
            </div>
            <div className="sm-textbox align-center min-width-250">
              <p>
                <strong>Andy Griffith turned us down.</strong>
              </p>
              <p>
                Army had half a day. Bad news. Andy Griffith turned us down. He
                didn't like his nice trailer. That's why you always leave a
                note!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
