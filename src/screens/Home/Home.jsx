import "./Home.css";
import Layout from "../../components/Layout/Layout";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Typical from "react-typical";


const Home = () => {
  return (
    <div>
      <Layout>
        <div className="main">
          <div className="first-block">
            <div className="statement">
              <h1 className="name-heading">Hey, I'm Markell. </h1> 
              <h4 className="tagline">I'm a{" "}
                <Typical
                  className="typical"
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Developer.",
                    2000,
                    "Artist.",
                    2000,
                    "Bartender.",
                    2000,
                 ]}
                />
              </h4>
              {/* <h2 className="tagline-heading">My goal is to turn my love for design into code.</h2> */}
              {/* <Link to="/about">
                <Button variant="danger" className="about-me-button">
                  About Me 
                </Button>
              </Link>  
              <a
                target="_blank"
                alt=""
                href="https://docs.google.com/document/d/1axaqKrqbP9x1_yrgSuJ0cvta30rMCv2zfxrFHY6JzPI/edit?usp=sharing"
              >
                <Button variant="danger" className="about-me-button">
                  Resume
                </Button>
              </a> */}
            </div>
          </div>
          <div className="linkbutton-div">
              <Link to="/about">
                <button variant="danger" className="about-me-button">
                  About Me
                </button>
              </Link>  
              <a
                target="_blank"
                alt=""
                href="https://docs.google.com/document/d/1OVLtGNTtBlCMG1Js6FYsGL0O21oggaCfXDhZ-W6-BNQ/edit#"
              >
                <button variant="danger" className="about-me-button">
                  Resume
                </button>
              </a>
          </div>
          <div className="project-heading-div">
            <h1 className="projects-heading">Skills</h1> 
          </div>
          <div className="">
            <div className="third-block">
              <div className="front-end">
                <h3 className="skills-subheading">Front-end:</h3>
                <ul>
                  <li>HTML,CSS,Javascript</li>
                  <li>React for single page applications</li>
                  <li>Axios to utilize Rest Api's</li> 
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="back-end">
                <h3 className="skills-subheading">Back-end:</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>SQL,PostgreSQL</li>
                  <li>Ruby on Rails</li>
                </ul>
              </div>
              <div className="development-tools">
                <h3 className="skills-subheading">Tools for development:</h3>
                <ul>
                  <li>Postman</li>
                  <li>Compass</li>
                  <li>Github</li>
                  <li>Chrome Developer Tools</li>
                  <li>VSCode</li>
                </ul>
              </div> 
            </div> 
          </div>
          <div className="project-heading-div">
            <h1 className="projects-heading">Projects</h1>
          </div>
          <div className="second-block">
            <div className="project">
              <div>
                <img src="CCTD.png" className="project-image" />
              </div>
              <h3 className="project-name">CCTD</h3>
              <p className="project-des">
                Covid Cases and Testing Data is a application to search daily
                covid rates in Chicago along with testing locations by zipcode.
              </p>
              <a
                href="https://github.com/markelld/Covid-Data"
                target="_blank"
                alt=""
              >
                <button className="project-button">View Code</button>
              </a>
              <a href="https://cctd.netlify.app/" target="_blank" alt="">
                <button className="project-button">View App</button>
              </a>
            </div>
            <div className="project">
              <div>
                <img src="SS2.png" className="project-image" />
              </div>
              <h3 className="project-name">Shaken or Stirred?</h3>
              <p className="project-des">
                Created with Ruby on Rails, the app consists of classic
                cocktail recipes along with creations from fellow bartenders
                from Chicago.
              </p>
              <a
                href="https://github.com/markelld/ShakenorStirred"
                target="_blank"
                alt=""
              >
                <button className="project-button">View Code</button>
              </a>
              <a href="https://shakenorstirred.herokuapp.com/" target="_blank" alt="">
                <button className="project-button">View App</button>
              </a>
            </div>
            <div className="project">
              <div>
                <img src="Linterna.png" className="project-image" />
              </div>
              <h3 className="project-name">Linterna</h3>
              <p className="project-des">
                Collaborative project made with React,Express and MongoDB.The
                project was made during 5 day sprint with github to manage
                workflow.
              </p>
              <a
                href="https://github.com/hrisso/lighting-project"
                target="_blank"
                alt=""
              >
                <button className="project-button">View Code</button>
              </a>
              <a
                href="https://linterna-lamps.netlify.app/"
                target="_blank"
                alt=""
              >
                <button className="project-button">View App</button>
              </a>
            </div> 
            <div className="project">
              <div>
                <img src="AD.png" className="project-image" />
              </div>
              <h3 className="project-name">AD</h3>
              <p className="project-des">
                Artiste Depremes replicates the functionality of a social platform with crud functionality. Made with React and Ruby on Rails.
              </p>
              <a
                href="https://github.com/markelld/artistedeprime"
                target="_blank"
                alt=""
              >
                <button className="project-button">View Code</button>
              </a>
              <a href="https://dipremes.netlify.app/" target="_blank" alt="">
                <button className="project-button">View App</button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
