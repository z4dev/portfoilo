import Form from "../Form";
import SectionTitle from "../SectionTitle";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact-section sec-padding" id="contact">
      <div className="container">
        <SectionTitle title={"Contact Me"} />

        <div className="row contact-form-container">
          <Form />

          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>alfarrajs2004@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>+201018055912</p>
            </div>
            <div className="contact-info-item">
              <h3>My Socials</h3>
              <div className="social-links">
                <a href="https://github.com/z4dev">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://discordapp.com/users/993778906010226749">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="https://www.linkedin.com/in/izzedeenalfarra">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
