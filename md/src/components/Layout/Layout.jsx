
import Footer from "../Footer/Footer"; 
import Nav from "../Nav/Nav";


const Layout = (props) => {
  return (
    <div className="layout"> 
      <Nav />  
        <div>
          {props.children} 
        </div> 
      <Footer/>
    </div>
  )
} 
export default Layout;
      
      