import React from "react";

const ContactInfo = ({ icon, description }) => {
  return (
    <div>
        <img className="contact-info__icons" src={icon} alt={description} />
        <span className="contact-info__span">{description}</span>
    </div>
  );
};
export default ContactInfo;