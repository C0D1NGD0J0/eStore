import React from 'react';
import ReactWOW from 'react-wow';

const NewsLetter = (props) => {
  return (
    <section className="newsletter">
      <ReactWOW animation="slideInUp">
        <div className="newsletter-content">
          <p>Subscribe to our newsletter to receive <br />notifications about new products and sales.</p>
          <form className="newsletter-form">
            <input type="text" name="email" className="newsletter-form__input" placeholder="Enter email address" />
            <input type="submit" value="Subscribe" className="btn btn-regular btn-lg" />
          </form>
        </div>
      </ReactWOW>
    </section>
  );
}

export default NewsLetter;
