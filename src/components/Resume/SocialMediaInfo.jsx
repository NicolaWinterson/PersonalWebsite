import React from "react";

const SocialMediaInfo = ({ link, icon, description }) => {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img className="resume__social-media-icons" src={icon} alt={description} />
      </a>
      {/* <p>
        <a href={link} rel="noopener noreferrer">
          {description}
        </a>
      </p> */}
    </div>
  );
};
export default SocialMediaInfo;
