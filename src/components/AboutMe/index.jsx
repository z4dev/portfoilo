import React, { useState } from "react";
import "./style.css";
import MY_PICTURE from "./Izz_pic.jpg";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [internship, setInternship] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <SectionTitle title={"About me"} />
        <div className="about__container">
          <div className="about-img">
            <div className="img-box">
              <img src={MY_PICTURE} alt="about img" />
            </div>
          </div>

          <div className="about-text">
            <p>
              I am Izzedeen Alfarra, a dedicated JavaScript and TypeScript
              developer with a fervent enthusiasm for backend development. Over
              the past two years, I've honed my skills in Node.js and Nest.js,
              crafting robust and scalable solutions. I'm deeply passionate
              about leveraging the power of these technologies to create
              innovative and efficient software solutions.
            </p>
            <h3>skills</h3>
            <div className="skills">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">NodeJS</div>
              <div className="skill-item">ExpressJs</div>
              <div className="skill-item">NestJS</div>
              <div className="skill-item">PHP</div>
              <div className="skill-item">Laravel</div>
              <div className="skill-item">MySQL</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">typeORM</div>
              <div className="skill-item">Prisma</div>
              <div className="skill-item">Docker</div>
              <div className="skill-item">Github Projects</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">REACTJS</div>
            </div>

            <div className="about-tabs">
              <button
                className="tab-item active"
                onClick={() => setEducation(true)}
              >
                education
              </button>
              <button
                className="tab-item"
                onClick={() => {
                  setInternship(true);
                  setEducation(false);
                }}
              >
                Internship
              </button>
              <button
                className="tab-item"
                onClick={() => {
                  setProjects(true);
                  setInternship(false);
                  setEducation(false);
                }}
              >
                Projects
              </button>
            </div>
            <div className="content__container">
              {education ? (
                <div className="content">
                  <div className="tab-content active" id="education">
                    <div className="timeline">
                      <div className="timeline-item">
                        <span className="date">2022-2027</span>
                        <h4>
                          Bachelor - Software engineering
                          <span> Alazhar University</span> of Gaza
                        </h4>
                        <p>
                          I am pursuing a Bachelor's degree in Software
                          Engineering, learning SOLID and Agile principles, as
                          well as Algorithms and Data Structures.
                        </p>
                        <a href="https://www.alazhar.edu.ps/arabic/index.asp">
                          university page
                        </a>
                      </div>
                      <div className="timeline-item">
                        <span className="date">2019-2022</span>
                        <h4>
                          Diploma in STEM <span>Mohammed Alnajjar School </span>
                        </h4>
                        <p>
                          I hold a diploma in the IT field, with a
                          specialization in web development encompassing both
                          front-end and back-end technologies. My academic
                          performance reflects excellence, evidenced by a GPA of
                          4.0 (96%). I am deeply passionate about programming,
                          consistently demonstrating dedication and proficiency.
                          My expertise includes front-end development utilizing
                          HTML, CSS, and Vanilla JavaScript, and back-end
                          development employing Vanilla PHP and SQL.
                        </p>
                        <a href="https://www.facebook.com/schoolAlNajar/?locale=en_EN">
                          School page
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : internship ? (
                <div className="tab-content active" id="education">
                  <div className="timeline">
                    <div className="timeline-item">
                      <span className="date">05/2024 – 06/2024</span>
                      <h4>
                        Backend web developer(NodeJS-Laravel) Intern -{" "}
                        <span>Eagle Owl Technology</span>
                      </h4>
                      <p>
                        I completed an internship focused on PHP and Node.js
                        development, working on real-world projects and robust
                        APIs. I utilized Laravel for PHP and Node.js for backend
                        solutions to create efficient and scalable applications.
                        My responsibilities included participating in all
                        project stages,
                        <br />
                        <a href="https://www.linkedin.com/company/eagle-owl-technology/">
                          Company LinkedIn
                        </a>
                      </p>
                    </div>
                    <div className="timeline-item">
                      <span className="date">05/2023 – 08/2023</span>
                      <h4>
                        Advanced Reactjs and Javascript Intern -{" "}
                        <span>Gaza Sky Geeks</span>
                      </h4>
                      <p>
                        During my internship, I immersed myself in ReactJS,
                        Next.js, and advanced JavaScript, refining my ability to
                        develop dynamic and responsive user interfaces. Through
                        practical projects and mentorship, I gained invaluable
                        experience using React.js and Next.js to create
                        efficient and scalable web applications. Additionally, I
                        delved into advanced JavaScript concepts, broadening my
                        technical expertise. I also learned to use Git and
                        GitHub, further enhancing my skills in version control
                        and collaborative development.
                        <br />
                        <a href="https://www.linkedin.com/company/gaza-sky-geeks/">
                          Company LinkedIn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : projects ? (
                <div className="tab-content active" id="education">
                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="date">
                        E-commerce Web APP :
                        <span>PHP and vanilla JavaScript </span>
                      </h4>
                      <p>
                        Had solve an issue for a client in the e-commerce
                        website, the issue was related to the payment gateway
                        and the shipping method. Technology Used : PHP,
                        JavaScript, MySQL.
                      </p>
                      <a href="https://github.com/z4dev/phone_e_web_site">
                        review code
                      </a>
                    </div>
                  </div>

                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="date">
                        E-commerce API : <span>Nodejs and Expressjs</span>{" "}
                      </h4>
                      <p>
                        In our E-commerce API project, I spearheaded the
                        implementation of advanced features using Express.js to
                        create a robust solution for online payments.
                        Integrating various payment gateways securely, I
                        optimized API endpoints for speed and scalability,
                        ensuring seamless transactions.
                      </p>
                      <a href="https://github.com/z4dev/e-commerce-api">
                        review code
                      </a>
                    </div>
                  </div>

                  <div className="timeline">
                    <div className="timeline-item">
                      <h4 className="date">
                        CRUD Task Manager : <span>Laravel APIs</span>
                      </h4>
                      <p>
                        Laravel CRUD Task Management simplifies task
                        organization with essential CRUD operations. Developed
                        during my internship at Eagle Owl Tech, users can
                        create, read, update, and delete tasks effortlessly. It
                        features user authentication, task categorization, and
                        search/filter functionality. Built on Laravel, it offers
                        a responsive interface and follows MVC architecture for
                        scalability and maintainability, enhancing productivity.
                        <a href="https://github.com/z4dev/intern01-laravel">
                          review code
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="btns">
              <a
                href="https://drive.google.com/file/d/1pqJjCnwkSoZQ4yvW9vdNOB0Bzrf7Nu7I/view"
                className="btn"
              >
                see my cv
              </a>
              <Link to="/contact" className="btn link-item">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
