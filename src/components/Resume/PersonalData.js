import React from "react";

const experience = [
  {
    startDate: new Date("2020-01-01"),
    endDate: new Date("2021-02-11"),
    title: "Freelance, Malmö",
    children: (
      <>
        <p>Freelance web developer</p>
      </>
    )
  },
  {
    startDate: new Date("2016-06-06"),
    endDate: new Date("2021-11-11"),
    title: "Malmö International School, Malmö",
    children: (
      <>
        <p>After School Care Pedagogue and SEN Student Assistant</p>
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
      </>
    )
  }
];

const education = [
  {
    startDate: new Date("2019-11-06"),
    endDate: new Date("2020-11-06"),
    title: "FooCoding Malmö",
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
        <p>MSc Social Studies of Gender</p>
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
    link: "https://www.instagram.com/nikkithunderthighs/",
    icon: "iconfinder_Instagram.svg",
    description: "instagram.com/nikkithunderthighs/"
  },

  {
    link: "https://codepen.io/nicolawinterson",
    icon: "iconfinder_Codepen.svg",
    description: "codepen.io/NicolaWinterson"
  },

  {
    link: "https://github.com/NicolaWinterson/",
    icon: "iconfinder_github.svg",
    description: "github.com/NicolaWintersonlinked"
  },

  {
    link: "https://www.linkedin.com/in/nicolawinterson/",
    icon: "iconfinder_Linkedin.svg",
    description: "linkedin.com/NicolaWinterson"
  }
];

const contactData = [
  {
    icon: "phone-black-18dp.svg",
    description: "0767819843"
  },

  {
    icon: "home-black-18dp.svg",
    description: "Malmö, Sweden"
  },

  {
    icon: "email-black-18dp.svg",
    description: "nicola.l.winterson@gmail.com"
  }
];

export { experience, education, socialMediaData, contactData };
