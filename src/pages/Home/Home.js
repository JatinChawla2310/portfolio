import React from "react";
import { FaLinkedin, FaGithubSquare, FaFileDownload } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  HomeBackground,
  AboutMe,
} from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <Container
        fluid
        className={styles.container}
        style={{ background: `url(${HomeBackground})` }}
      >
        <Row>
          <ImageHolder
            primarySource={ProfessionalHeadshot}
            secondarySource={FallbackProfessionalHeadshot}
            alt="Professional Headshot of Aditya Vikram Singh"
            className={styles.professionalHeadshot}
          />
        </Row>
        <Row>
          <Col>
            <span className={`${styles.textWhite} ${styles.headingOne}`}>
              Jatin Chawla
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className={`${styles.textWhite} ${styles.headingThree}`}>
              Software Engineer, Full-Stack Developer, College Student
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://github.com/JatinChawla2310" target="_blank_">
              <FaGithubSquare className={styles.icon} />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/in/jatin-chawla-7839a5207/"
              target="_blank_"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileButton
              logo={<FaFileDownload className={styles.iconSmall} />}
              href="https://app.luminpdf.com/viewer/62488a40c7eb2ef584dfe864"
            >
              Résumé
            </ProfileButton>
          </Col>
        </Row>
      </Container>
      <section className="about-area" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={AboutMe} alt="About us" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-title">
              <h2 className="text-uppercase pt-5 title-h1">About Me</h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  I am a pre-final year Undergraduate pursuing Bachelors of
                  Technology in Computer Science & Engineering, with experience
                  in Web Development.
                </p>
                <p className="para">
                  My aim is to be a full stack engineer, for that I have been
                  constantly working on my fields. I also likes to explore
                  different fields to learn new things. I am also into cloud
                  computing.
                  <br />
                  <br />
                  <blockquote>
                    <em>
                      I am looking for opportunities as - Software Engineer /
                      Web Developer
                    </em>
                  </blockquote>
                </p>
              </div>              
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              <centre>                
                <b>• Languages/Technologies:</b> Html, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, C, C++, Java
                <br />
                <b>• Lib/Frameworks:</b> Bootstrap,
                <br />
                <b>• Database:</b> MongoDb
                <br />
                <b>• Tools:</b> Github, VsCode, Postman, Firebase
                <br />
                <b>• Course Curriculum:</b> OOPS, DSA, DBMS, OS, CN
                <br />
                <b>• Soft Skills:</b> Team Player, Leadership, Time Management,
                Self Driven, Focussed, Event Management
                <br />
              </centre>
            </p>
          </div>         
        </div>
      </section>
    </React.Fragment>
  );
};


export default Home;
