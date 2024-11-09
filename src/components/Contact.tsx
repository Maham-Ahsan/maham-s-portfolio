import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-section'>
      <div className="container">
        <div className="title-container">
          <h1 className="title">Contact Me</h1>
        </div>
      </div>
      <div className="body">
        <div className="container map-form-container">
          <div className="map-container">
            <iframe width="100%" height="100%" className="map" frameBorder="0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0karachi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            <div className="contact-info">
              <div className="info-section">
                <h2 className="info-title">ADDRESS</h2>
                <p className="info-text">House Number 400, Survey Number 208 Millat Town, Malir Halt, Karachi</p>
              </div>
              <div className="info-section">
                <h2 className="info-title">EMAIL</h2>
                <a href="mailto:mahhhhh143@gmail.com" className="info-link">mahhhhh143@gmail.com</a>
                <h2 className="info-title">PHONE</h2>
                <p className="info-text">0313-456-7890</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <h2 className="form-title">Feedback</h2>
            <p className="form-description">Your valuable feedback here...</p>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Name</label>
              <input type="text" id="name" name="name" className="input" />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="input-group">
              <label htmlFor="message" className="input-label">Message</label>
              <textarea id="message" name="message" className="textarea"></textarea>
            </div>
            <button className="submit-button">Submit</button>
            <p className="form-footer">If you have any query feel free to contact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
