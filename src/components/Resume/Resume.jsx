import React from "react";
import Navbar from "../Navigation/Navbar"
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
import "./styles.css";

//import CVpdf from "C:/Users/Nicola/Documents/Website/website-main/src/components/Resume/NicolaWinterson_CV_2020.pdf"

const Resume = () => {
  return (
    <div className="resume__container">
      <Navbar className="resume__container--top"/>
      <div className="resume__background">
        <aside className="resume__container--left">
          <section className="resume__contact-info">
            <img
              className="resume__profile-image"
              src="https://pixiepunkpix.files.wordpress.com/2014/05/tumblr_static_black-and-white-camera-cute-photography-favim-com-273178.jpg"
              alt="Fake Profile"
            />
            <h1 className="contact-info--header">Nicola Winterson</h1>

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
              <dd>0767819843</dd>
              <dt>Email:</dt>
              <dd>nicola.l.winterson@gmail.com</dd>
            </dl>
          </section>
          <div>
            {socialMediaData.map(item => (
              <SocialMediaInfo {...item} />
            ))}
          </div>
        </aside>
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
      </div>
      <footer className="resume__container--bottom"/>
    </div>


  );
}

export default Resume