import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Print from '@material-ui/icons/Print';

import "./styles.css";

import ResumeItem from "./ResumeItem";
import TimeRangeBlock from "./TimeRangeBlock";
import SkillBar from "./SkillBar";
import DisplayAchievementsBlock from "./DisplayAchievements";
import {
  achievements,
  experience,
  education,
  socialMediaData
} from "./PersonalData";
import SocialMediaInfo from "./SocialMediaInfo";
//import CVpdf from "C:/Users/Nicola/Documents/Website/website-main/src/components/Resume/NicolaWinterson_CV_2020.pdf"

const Resume = () => {
  return (
    <div className="resume__container">
      <header className="resume__banner resume__nav">
        {/* <a className="resume__nav--item" href={CVpdf} target="_blank"><Print /></a> */}
        <ul className="navbar">
          <li className="navbar--push">
            <Link className="navbar--active" to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li><Link className="portfolio__nav" to="/"><ArrowBackIosIcon /></Link>  </li>
        </ul>
      </header>
      <div className="resume__background">
        <aside className="resume__container--left">
          <section className="resume__contact-info">
            <img
              className="resume__profile-image"
              src="https://pixiepunkpix.files.wordpress.com/2014/05/tumblr_static_black-and-white-camera-cute-photography-favim-com-273178.jpg"
              alt="Fake Profile"
            />
            <h1 className="contact-info--header">Person Personsson</h1>

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
              <dt>Phone:</dt>
              <dd>0707070707</dd>
              <dt>Email:</dt>
              <dd>name.surname@gmail.com</dd>
            </dl>
          </section>
          <div>
            {socialMediaData.map(item => (
              <SocialMediaInfo {...item} />
            ))}
          </div>
        </aside>
        <main className="container__right">
          <ResumeItem title="About Me">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
          <ResumeItem title="Skills">
            <div className="skills">
              <SkillBar title="HTML5" value={5} />
              <SkillBar title="CSS" value={5} />
              <SkillBar title="JavaScript" value={3} />
              <SkillBar title="Twinery" value={2} />
              <SkillBar title="React" value={3} />
              <SkillBar title="Java" value={1} />
              <SkillBar title="Python" value={1} />
              <SkillBar title="Life" value={5} />
            </div>
          </ResumeItem>
          <ResumeItem title="Achievements">
            {achievements.map(item => (
              <DisplayAchievementsBlock {...item} />
            ))}
          </ResumeItem>
        </main>
        <footer />
      </div>
    </div>


  );
}

export default Resume