import React from "react";
import Header from "../components/header/Header";
import StylizedImage from "../components/image/StylizedImage";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <Header />

        {/* About Section */}
        <section id="about">
          <div className="flex-between width-100 height-100 about-sect">
            <div className="flex-column">
              <h2 className="sect-title overlap-under align-start">About</h2>
              <StylizedImage
                src={img1}
                shadowDirection="se"
                width="max(60%, 650px)"
              />
            </div>
            <div className="sm-textbox align-center min-width-250">
              <p>
                <strong className="bold-1">
                  Andy Griffith turned us down.
                </strong>
              </p>
              <summary>
                <p>
                  Army had half a day. Bad news. Andy Griffith turned us down.
                  He didn't like his nice trailer. That's why you always leave a
                  note!
                </p>
              </summary>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section id="vision">
          <div className="flex-reverse width-100 height-100 vision-sect">
            <div className="flex-center rotated-title">
              <h2 className="sect-title align-start">Our Vision</h2>
            </div>
            <div className="flex-column width-100 vision-text">
              <div className="md-textbox align-start">
                <p>
                  <strong className="bold-2">
                    Army had half a day. Bad news. Andy Griffith turned us down.
                    He didn't like his trailer.
                  </strong>
                </p>
              </div>
              <summary className="lg-textbox">
                <p>
                  Army had half a day. Bad news. Andy Griffith turned us down.
                  He didn't like his trailer. That's why you always leave a
                  note! Army had half a day. Bad news. Andy Griffith turned us
                  down. He didn't like his trailer. That's why you always leave
                  a note! No… but I'd like to be asked! Oh, you're gonna be in a
                  coma, all right.
                </p>
              </summary>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section id="values">
          <div className="large-img">
            <StylizedImage src={img2} shadowDirection="nw" width="100%" />
          </div>
          <h2 className="sect-title overlap-over text-center">Our Values</h2>
          <summary className="text-2-col">
            <p>
              Army had half a day. Bad news. Andy Griffith turned us down. He
              didn't like his trailer. That's why you always leave a note! Army
              had half a day. Bad news. Andy Griffith turned us down. He didn't
              like his trailer. That's why you always leave a note! No… but I'd
              like to be asked! Oh, you're gonna be in a coma, all right.
            </p>
            <p>
              Army had half a day. Bad news. Andy Griffith turned us down. He
              didn't like his trailer. That's why you always leave a note! Army
              had half a day. Bad news. Andy Griffith turned us down.{" "}
            </p>
          </summary>
        </section>
      </div>
    </div>
  );
};

export default Home;
