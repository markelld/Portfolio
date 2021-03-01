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
            <p className="paragraph">I am a software engineer that has a hunger to learn new ways to innovate and bring my ideas to life. I see Software engineeing as an outlet for me to solve issues and create a more modern approach to problem solving. Prior to developing I worked in the hospitality industry with a formal education in mechanical engineering and Degree in Marketing.
               My journey to software engineering started with self study followed by attending General Assembly's Full Stack Engineering Program.The program included over 400 hours of professional training over 12 weeks. Utilizing a hands-on approach to design and build full-stack web applications with Git,HTML, CSS,Javascript, React, Express, MongoDB, SQL, PostgreSQL,Ruby and Rails. 
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

