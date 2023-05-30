import React from 'react'

const Contact = () => {
  return (
    <div>
     <div className="contact container">     
      <h1>Contact me</h1>
      <hr />
    <div className="fcol">
      <div className="col1" data-aos="fade-right">
        <h4>Mobile Number</h4>
        <a href="tel:7218771578">+917218771578</a>
        <a href="tel:7588157242">+917588157242</a>
      </div>
      <div className="col2" data-aos="fade-left">
        <h4>Address</h4>
        <a href="">New Town, Badnera-444 701, Amrvati - Maharashtra</a>
      </div>
      <div className="col3" data-aos="fade-right">
        <h4>Mail</h4>
        <a href="mailto:sajeedsyed39@gmail.com">sajeedsyed39@gmail.com</a>
      </div>
      <div className="col4" data-aos="fade-left">
        <h4>Follow me</h4>
        <a href="https://www.linkedin.com/in/syed-sajeed-2ba32a1a6" target="_blank"><i className="fa fa-linkedin-square"> LinkedIn</i></a>
        <a href="https://wa.me/+917218771578" target="_blank"><i className="fa fa-whatsapp"> WhatsApp</i></a>
        <a href="https://www.facebook.com/syed.sajeed.906" target="_blank"><i className="fa fa-facebook-official"> Facebook</i></a>
        <a href="instagram.com" target="_blank"><i className="fa fa-instagram"> Instagram</i></a>
        <a href="https://github.com/mrsajids" target="_blank"><i className="fa fa-github"> GitHub</i></a>
      </div>
    </div>
    </div>
      </div>
  )
}

export default Contact
