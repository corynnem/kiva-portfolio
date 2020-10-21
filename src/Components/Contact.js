import React from 'react';

const Contact = () => {



    const formStyles = {
      
        textAlign: 'left',
        padding: '3%',
        width: '30%',
        height: '10%',
        borderRadius: '20px',
        fontWeight: 'bold',
        marginLeft: '15%',
      

    }

    const inputStyles = {
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '.5px',
        width: '50vw',
        height: '2.5vh',
  
    }
  
    const textareaStyles = {
        borderRadius: '10px',
        borderStyle: 'none',
        height: '10vh',
        width: '50vw',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '.5px',
       
    }
    
  const contactStyles = {
      float: 'left',
      textAlign: 'left',
      width: '70vw',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: '-10%'
  }


 const buttonStyles = {
     textDecoration: 'none',
     borderColor: 'transparent',
     height: 'auto',
     width: 'auto',
 }

    return (
        <div style={formStyles}>
        <div style={contactStyles}>
            <h1>Lets keep in touch</h1>
            <p><u>Email</u> kivas@hey.com</p>
            <p><u>Instagram</u> @kiva4</p>
            <p><u>Twitter</u> @kkLva</p>
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <form
                className="w3-container"
                style={formStyles}
                action="https://formspree.io/maylwrdz"
                method="POST"
                >
                <label>
                    Name
                    <br/>
                    <input type="text" name="name"  className="w3-input" style={inputStyles}/>
                </label>
                <br></br>
                <br></br>
                <label>
                    Your Email
                    <br></br>
                    <input type="email" name="_replyto" className="w3-input" style={inputStyles}/>
                </label>
                <br></br>
                <br></br>
                <label>
                    Message
                    <br></br>
                    <textarea name="message" style={textareaStyles} className="w3-input"></textarea>
                </label>
                <br></br>
                <br></br>
                <button style={buttonStyles} className="bttn-stretch bttn-med bttn-primary" type="submit" value="Send">Send</button>
                </form>
        </div>
    )
}

export default Contact;