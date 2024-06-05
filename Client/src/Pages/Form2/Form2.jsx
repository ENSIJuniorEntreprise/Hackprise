import React from "react";
import './DarkForm.css'
import Hackathon from "../../Components/Hackathon/Hackathon";
import capture from './Untitled-1.png'

function Form2(){
    return(
        <div className="darkform">
            <div className="go-back-container">
                <button className='go-back-button'>GO BACK</button>
            </div>

            <div className="hackathon">
                <Hackathon logo={capture}  hackathonName="logo1"></Hackathon>
            </div>
            
            <div className="Dform">
                <div className="name-container form-container">
                    <div>
                        <label htmlFor="" className="label">FIRST NAME</label><br />
                        <input type="text" className="Ninput form-input" required />
                    </div>
                
                    <div>
                        <label htmlFor="" className="label">LAST NAME</label><br />
                        <input type="text" className="Ninput form-input" required/>
                    </div>
                </div>
                <div className="form-container">
                    <label htmlFor="" className="label">EMAIL</label><br />
                    <input type="email" className="df-input form-input" required/>
                </div>
                <div className="form-container">
                    <label htmlFor="" className="label">PHONE NUMBER</label><br />
                    <input type="number" className="df-input form-input" required/>
                </div>
                <div className="form-container">
                    <label htmlFor="" className="label">COMMENT</label><br />
                    <textarea name="" id="" className=" df-input form-input" rows={7}></textarea>
                </div>

            </div>
            <div className="submit">
                <button className="submit-button" type="submit">
                    SUBMIT
                </button>
            </div>
            
        </div>
    )
}

export default Form2; 
