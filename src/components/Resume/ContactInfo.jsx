import React from "react";

const ContactInfo = ({ className, icon, description }) => {
  return (
    <div>
        <img className="contact-info__icons" src={icon} alt={description} />
        <span>{description}</span>
    </div>
  );
};
export default ContactInfo;