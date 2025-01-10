import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/components/email.css'

function Email() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();
      const serviceId = 'service_tb7xgem';
      const tamplateId = 'template_j7zagfq';
      const publicKey = 'BI5xjKnxD2ovXxEIr';
      const data = {
        from_name: name,
        from_email: email,
        to_name: "Ashenafi",
        message: message
      }
      const response = emailjs
        .send(serviceId, tamplateId, data, publicKey)
        .then(
          () => {
            console.log('SUCCESS!', response);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div className="emailContainer">
            <form className='emailForm' onSubmit={sendEmail}>
                <input className='emailInput' type="text" name="user_name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='emailInput' type="email" name="user_email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea className='emailText' cols='30' rows='10' name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className='emailButton' type='submit'>Send</button>
            </form>
        </div>
      
    );
}

export default Email;
