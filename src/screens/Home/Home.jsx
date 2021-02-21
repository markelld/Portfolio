import "./Home.css"; 
import Layout from "../../components/Layout/Layout";  
import Button from 'react-bootstrap/Button'  
import { Link } from "react-router-dom"; 


const Home = () => {
  return (
    <div> 
      <Layout> 
        <div className="main"> 
          <div className="first-block">  
             <div className="statement">
              <h1 className="name-heading">Hey, I'm Markell.</h1> 
              <p className="brand-statement">My current passion is to express my creativity through code, while constantly evolving through learning.</p> 
              <Link to="/about">
                <Button variant="danger" className="about-me-button">About Me</Button>
              </Link>
            </div> 
          </div> 
          
          <h1 className="projects-heading">Projects</h1>
          
          <div className="second-block">  
            <div className="project">
                <div>
                  <img src="CCTD.png" className="project-image" /> 
                </div>
                <h3 className="project-name">CCTD</h3> 
                <p className="project-des">Covid Cases and Testing Data is a application to search daily covid rates in Chicago along with testing locations by zipcode. 
                </p>  
                <a href="https://github.com/markelld/Covid-Data" target="_blank" alt="">
                  <button>View Code</button> 
                </a> 
                <a href="https://cctd.netlify.app/" target="_blank" alt="">
                  <button>View App</button>
                </a>
            </div> 
            <div className="project"> 
                <div>
                  <img src="SS.png" className="project-image"/> 
                </div>
                <h3 className="project-name">Shaken or Stirred?</h3> 
                <p className="project-des">Created with React and Airtable, the app consists of classic cocktail recipes along with creations from fellow bartenders from Chicago.</p> 
                <a href="https://github.com/markelld/ShakenorStirred" target="_blank" alt="">
                  <button>View Code</button>  
                </a> 
                <a href="https://shorst.netlify.app/" target="_blank" alt="">
                  <button>View App</button>
                </a>
            </div> 
            <div className="project"> 
              <div>
                <img src="Linterna.png" className="project-image"/> 
              </div>
              <h3 className="project-name">Linterna</h3> 
              <p className="project-des">Collaborative project made with React,Express and MongoDB.The project was made during 5 day sprint with github to manage workflow.</p>  
              <a  href="https://github.com/hrisso/lighting-project" target="_blank" alt="">
                <button>View Code</button> 
              </a> 
              <a href="https://linterna-lamps.netlify.app/" target="_blank" alt="">
                <button>View App</button>
              </a>
            </div> 
          </div>  
          <div className="third-block"> 
          </div>
        </div>
      </Layout>
    </div>

  )
} 


export default Home; 
            