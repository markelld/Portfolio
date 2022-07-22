import "./Contact.css"; 
import Layout from "../../components/Layout/Layout"; 
import swal from "sweetalert2"; 
import emailjs from "emailjs-com";


const Contact = () => { 

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        swal.fire(
          "Message Sent",
          "Markell will get back to you as he can!",
          "Success"
        )
        
      }, (error) => {
          console.log(error.text); 
          swal.fire(
            "Message Sent", 
            error.text, 
            "error"
          )
      }); 
    e.target.reset()
  }
  return (
    <div> 
      <Layout> 
        <div className="form-body"> 
          <form onSubmit={handleFormSubmit}
            className="contact-form">
            <input  
              className="name-textarea" 
              placeholder="Name" 
              name="user_name"
              required 
              // onChange={}
            /> 
            <input  
              className="email-textarea" 
              placeholder="Email" 
              name="user_email"
              required 
              // onChange={}
            />  
            <textarea 
              className="message-textarea" 
              rows={10}
              cols={50}
              placeholder="Message" 
              name="user_message"
              required 
              // onChange={}
            /> 
            <button type="submit" classname="submit-button">Submit</button>
          </form>
        </div>
      </Layout>
    </div>
  )
} 
export default Contact; 


      
