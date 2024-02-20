import React from "react";

//creating class Component
class Contact extends React.Component
{
    //in class component we must use render() to return html
    render() {
      return (
        <div className="ui main">
        <h3>Information</h3>
        <form className="ui form">
         <div className="field">
             <label>Name: </label>
             <input type="text" placeholder="Enter Your Name"></input>
         </div>
         <div className="field">
             <label>Email: </label>
             <input type="email" placeholder="xyz@gmail.com"></input>    
         </div>    
         <button className="ui button blue">Submit</button>
        </form>
     </div>
      );
    }
    
}
export default Contact;