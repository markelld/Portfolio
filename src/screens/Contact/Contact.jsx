import "./Contact.css"; 
import Layout from "../../components/Layout/Layout"; 
import Form from 'react-bootstrap/Form'  
import Button from 'react-bootstrap/Button' 
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
          "Succes"
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
        <div className="contact-main"> 
        <Form className="contact" onSubmit={handleFormSubmit}>
          <Form.Group >
            <Form.Label >Name</Form.Label>
              <Form.Control 
                name="user_name"
                size="lg"
                type="name"
                 
                required
                />
          </Form.Group> 
          <Form.Group >
            <Form.Label>Email</Form.Label>
              <Form.Control 
                name="user_email"
                size="lg"
                type="email"
                  
                required
                />
          </Form.Group>
          <Form.Group >
            <Form.Label>Message</Form.Label>
              <Form.Control 
                name="user_message"
                size="lg" 
                as="textarea"
                cols={25}
                rows={5} 
                required 
                />
            </Form.Group>   
            <div className="button-div">
              <Button  
                className="submit-button"
                type="submit"
                variant="danger"
                size="lg"
              >Submit
              </Button>
            </div>
        </Form>
      </div>
      </Layout>
    </div>
  )
} 

export default Contact; 


