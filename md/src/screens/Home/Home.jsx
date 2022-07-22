import "./Home.css"; 
import Layout from "../../components/Layout/Layout";  
// import Contact from "../Contact/Contact";


const Home = () => {
  return (
    <div> 
      <Layout> 
        <div className="main"> 
          <div className="first-block">  
            <div className="first-half">
              <h1 className="name-heading">Markell Dehaney</h1> 
              <p>My current passion is to express my creativity through design, while constantly evolving through learning.</p> 
            <div className="second-half">
              <img src="" className=""/>
            </div>
           </div>
          </div>
          <div className="second-block">  
          <h1 className="projects-heading">Projects</h1>
            <div className="project">
                <div>
                  <img src="CCTD.png" className="project-image" /> 
                </div>
                <h3>CCTD</h3> 
                <p>Covid Cases and Testing Data is a application to search daily covid rates in Chicago along with testing locations by zipcode. 
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
                <h3>Shaken or Stirred?</h3> 
                <p>Fully functional crud app made with React and Airtable. The app consist of classic cocktail recipes along with creations from fellow bartenders from Chicago.</p> 
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
              <h3>Linterna</h3> 
              <p>Collaborative project made with React,Express and MongoDB.</p>  
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
            
            
            
            
            







            



      
