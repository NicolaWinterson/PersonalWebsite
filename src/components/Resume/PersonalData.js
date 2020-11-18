import React from "react";

const experience = [
  {
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-11-11"),
    title: "Freelance, Malmö",
    children: (
      <>
        <p>Freelance web developer</p>
        <p>Working for specific clients</p>
      </>
    )
  },
  {
    startDate: new Date("2016-06-06"),
    endDate: new Date("2020-11-11"),
    title: "Malmö International School, Malmö",
    children: (
      <>
        <p>After School Care Pedagogue and SEN Student Assistant</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2013-06-06"),
    endDate: new Date("2013-02-06"),
    title: "GL Garrad Hassan, Bristol",
    children: (
      <>
        <p>HR and Recruitment Administrator</p>
        <p>second line</p>
      </>
    )
  },
  {
    startDate: new Date("2012-01-06"),
    endDate: new Date("2013-01-06"),
    title: "Reed Human Resources, Bristol",
    children: (
      <>
        <p>Resourcer</p>
        <p>second line</p>
      </>
    )
  }
];

const education = [
  {
    startDate: new Date("2019-11-06"),
    endDate: new Date("2020-11-06"),
    title: "FooCoding, Malmö",
    children: (
      <>
        <p>Full stack web developement course</p>
        <p>Focus on HTML, CSS, Javascript, React, Node.js and database languages</p>
      </>
    )
  },
  {
    startDate: new Date("2013-06-06"),
    endDate: new Date("2015-06-06"),
    title: "Lund University",
    children: (
      <>
        <p>Master of Science (MSc) Social Studies of Gender</p>
      </>
    )
  },
  {
    startDate: new Date("2014-06-06"),
    endDate: new Date("2014-06-06"),
    title: "University of Western Australia",
    children: (
      <>
        <p>Postgraduate Exchange Semester</p>
        <p>As part of my Masters Degree at Lund University.</p>
      </>
    )
  },
  {
    startDate: new Date("2009-06-06"),
    endDate: new Date("2010-06-06"),
    title: "University of Copenhagen",
    children: (
      <>
        <p>BA, Sociology Erasmus Year Abroad</p>
        <p>As part of my Bachelors degree at Univeristy of Bristol</p>
      </>
    )
  },
  {
    startDate: new Date("2007-06-06"),
    endDate: new Date("2011-06-06"),
    title: "University of Bristol",
    children: (
      <>
        <p>BSc in Sociology with Study Abroad</p>
      </>
    )
  }
];

const socialMediaData = [
  {
    link: "https://www.facebook.com/nicola.winterson/git",
    icon: "iconfinder_Circled_Facebook.svg",
    description: "facebook.com/NicolaWinterson"
  },

  {
    link: "https://github.com/NicolaWinterson/",
    icon: "iconfinder_Circled_Github.svg",
    description: "github.com/NicolaWintersonlinked"
  },

  {
    link: "https://www.linkedin.com/in/nicolawinterson/",
    icon: "iconfinder_Circled_Linkedin.svg",
    description: "linkedin.com/NicolaWinterson"
  }
];

export { experience, education, socialMediaData };
