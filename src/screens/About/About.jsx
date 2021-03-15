import "./About.css"; 
import Layout from "../../components/Layout/Layout"; 
import Button from 'react-bootstrap/Button' 


const About = () => {
  return (
    <div> 
      <Layout> 
        <div className="about-main"> 
          <div className="info"> 
            <h1 className="about-tite">About Me</h1> 
            <p className="paragraph">Developing software has created a hunger for learning, making new ways for me to innovate. I see Software engineeing as an outlet to express myself, it kind of feels like its art. Prior to developing I worked in the hospitality industry as a Bartender.  
               My journey to software engineering started with self study followed by attending General Assembly's Full Stack Engineering Program.The program included over 400 hours of professional training over 12 weeks. Utilizing a hands-on approach to design and building full-stack web applications with Git,HTML, CSS,Javascript, React, Express, MongoDB, SQL, PostgreSQL and Ruby on Rails. 
            </p>
          </div>
          <a
            target="_blank"
            alt=""
            href="https://docs.google.com/document/d/1axaqKrqbP9x1_yrgSuJ0cvta30rMCv2zfxrFHY6JzPI/edit?usp=sharing">
            <Button  variant="danger" className="resume-button">Resume</Button>
          </a>
        </div>
      </Layout>
    </div>
  )
} 
export default About; 

