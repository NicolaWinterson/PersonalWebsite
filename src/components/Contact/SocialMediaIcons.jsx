import React from "react";

const SocialMediaIcons = ({ link, icon, description }) => {
  return (
    <div>
      <div className="contact__social-media-links">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <img className="social-media-icons" src={icon} alt={description} />
        </a>
      </div>
    </div>
  );
};
export default SocialMediaIcons;
