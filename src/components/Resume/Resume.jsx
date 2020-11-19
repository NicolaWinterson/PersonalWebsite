import React from "react";
import Navbar from "../Navigation/Navbar"
import ResumeItem from "./ResumeItem";
import TimeRangeBlock from "./TimeRangeBlock";
import ProgressBar from "./ProgressBar";
import {
  experience,
  education,
  socialMediaData,
  contactData
} from "./PersonalData";
import SocialMediaInfo from "./SocialMediaInfo";
import ContactInfo from "./ContactInfo";
import "./styles.css";

//import CVpdf from "C:/Users/Nicola/Documents/Website/website-main/src/components/Resume/NicolaWinterson_CV_2020.pdf"

const Resume = () => {
  return (
    <div className="resume__container">
      <Navbar className="resume__container--navbar" />
      <div className="resume__background">
        <div className="resume__container--left">
          <img
            className="resume__profile-image"
            src="https://pixiepunkpix.files.wordpress.com/2014/05/tumblr_static_black-and-white-camera-cute-photography-favim-com-273178.jpg"
            alt="Fake Profile"
          />
          <h1 className="contact-info--header">Nicola Winterson</h1>
          

          <ResumeItem title="Skills">
            <ProgressBar title="HTML" className="progress_bar--value value-100" />
            <ProgressBar title="CSS" className="progress_bar--value value-90" />
            <ProgressBar title="JavaScript" className="progress_bar--value value-80" />
            <ProgressBar title="React" className="progress_bar--value value-80" />
            <ProgressBar title="Node.js" className="progress_bar--value value-70" />
            <ProgressBar title="Database" className="progress_bar--value value-50" />
            <ProgressBar title="GitHub" className="progress_bar--value value-70" />
            <ProgressBar title="Life" className="progress_bar--value value-100" />
          </ResumeItem>

          <ResumeItem title="Contact">
            {/* <section className="resume__contact-info">
              <dl className="contact-info__grid">
                <dt>D.O.B:</dt>
                <dd>1st January 1900</dd>
                <dt>Address:</dt>
                <dd>
                  <span>123 Street Name,</span>
                  <p>Malmö,</p>
                  <p>Skåne, Sweden,</p>
                  <p>PostCode</p>
                </dd>
              </dl>
              <dl className="contact-info__inline">
              <img src="C:/Users/Nicola/Documents/Website/website-main/public/phone-black-18dp.svg" />
                <dt>Phone:</dt>
                <dd>0767819843</dd>
                <dt>Email:</dt>
                <dd>nicola.l.winterson@gmail.com</dd>
              </dl>
            </section> */}

            <div className="contact-info">
              {contactData.map(item => (
                <ContactInfo {...item} />
              ))}
            </div>

            <div className="social-media-links">
              {socialMediaData.map(item => (
                <SocialMediaInfo {...item} />
              ))}
            </div>
          </ResumeItem>


        </div>
        <main className="resume__container--right">
          <ResumeItem title="About Me">
            <p>I'm a driven and insightful person who is passionate about developing my skills and working towards my goal of becoming a full stack developer.</p>
            <p>My specialities include quickly learning new skills and programming languages and problem solving. I have already learnt JavaScript(ES6), HTML, CSS, React, NODE.js, PostgreSQL, JSON and Git/GitHub and am enthusiastically seizing any opportunity to learn and use use other programming languages, frameworks or principals.</p>
          </ResumeItem>
          <ResumeItem title="Experience">
            {experience.map(item => (
              <TimeRangeBlock {...item} />
            ))}
          </ResumeItem>
          <ResumeItem title="Education">
            {education.map(item => (
              <TimeRangeBlock {...item} />
            ))}
          </ResumeItem>
        </main>
      </div>
      <footer className="resume__container--bottom" />
    </div>


  );
}

export default Resume