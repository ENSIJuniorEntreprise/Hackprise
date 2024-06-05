import React from "react";
import Hackathon from "../../Components/Hackathon/Hackathon";
import './LightForm.css'
import capture from "./Untitled-1.png"
import { useState } from "react";


function Form1(){
    
    return(
        <div className="lightform">
            <div className="go-back-container">
                <button className='go-back-button'>GO BACK</button>
            </div>

            <div className="hackathon">
                <Hackathon logo={capture}  hackathonName="logo1"></Hackathon>
            </div>
            
            <div className="Lform">
                <div className="name-container form-container">
                    <div>
                        <label htmlFor="" className="label">FIRST NAME</label><br />
                        <input type="text" className="Ninput form-input" required/>
                    </div>
                
                    <div>
                        <label htmlFor="" className="label">LAST NAME</label><br />
                        <input type="text" className="Ninput form-input" required/>
                    </div>
                </div>
                <div className="form-container">
                    <label htmlFor="" className="label">EMAIL</label><br />
                    <input type="email" className="lf-input form-input" required/>
                </div>
                <div className="form-container">
                    <label htmlFor="" className="label">PHONE NUMBER</label><br />
                    <input type="number" className="lf-input form-input" required/>
                </div>
                <div className="form-container">
                    <label htmlFor="" className="label">COMMENT</label><br />
                    <textarea name="" id="" className=" lf-input form-input" rows={7}></textarea>
                </div>
                

            </div>
            <div className="light-submit">
                <button className="light-submit-button" type="submit">
                    SUBMIT
                </button>
            </div>
            
        </div>
    )
}

export default Form1; 
