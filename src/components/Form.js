import React,{ Component } from 'react';
import Captcha from "../components/Captcha";
import './css/Main_Content.css';

class Form extends Component {

    render() {
        return (

<div className="col-12 justify-content-center" data-aos="fade-up" data-aos-duration="3000" id="contact-form">
    
            <h2 className="card-title" id="title-m">Schedule A Free RCM Consultation Today!</h2>

    <form className="wow pulse" action="https://formspree.io/f/maykpnjz" method="POST">

    <div className="row justify-content-center">
        <div className="col-6-mx-auto">
            <label id="label" htmlFor="first-name">First Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="first-name" placeholder="John" required/>
         </div>

        <div className="col-6-mx-auto">
            <label id="label" htmlFor="last-name">Last Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="last-name" placeholder="Doe" required/>
        </div>
    </div>


    <div className="row justify-content-center">
        <div className="col-6-mx-auto">
            <label id="label" htmlFor="email"><i className="fa-solid fa-envelope"></i> Email: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="email" className="form-control" id="email" placeholder="JohnD@ligolab.com" required/>
        </div>

        <div className="col-6-mx-auto">
            <label id="label" htmlFor="phone"><i className="fa-solid fa-phone"></i> Phone Number:</label>
            <input type="text" className="form-control" id="phone" placeholder="(555) 5555-5555"/>
        </div>
    </div>

    <div className="row justify-content-center">
        <div className="col-6-mx-auto">
            <label id="label" htmlFor="company"><i className="fa-regular fa-registered"> </i> Company/Laboratory Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="company" placeholder="LigoLab??? Information System" required/>
        </div>

        <div className="col-6-mx-auto">
            <label id="label" htmlFor="state"><i className="fa-solid fa-map-pin"></i> Company Location - State: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="state" placeholder="CA or California" required/>
        </div>
    </div>

    <div className="row justify-content-center" id="heading">

        <div className="col-7-mx-auto">
            <label id="label" htmlFor="select"><i className="fa-solid fa-clipboard-check"></i> Please Select An Area of Opportunity: <i id="ast" className="fa-solid fa-asterisk"></i></label>
                <select className="custom-select" id="select" required>
                    <option selected disabled value="">Select an Option...</option>
                    <option>Revenue Cycle Management</option>
                    <option>Regulatory Compliance</option>
                    <option>Productivity/Metrics Analytics</option>
                    <option>Start-Up Consultation</option>
                    <option>Other: (please explain below)</option>
                </select>
        </div>

    </div>

    <div className="row justify-content-center">
        <div className="col-7-mx-auto">
            <label id="label" htmlFor="details"> <i className="fa-solid fa-briefcase"></i> Please Share Laboratory
                    Operation & Workflow Details Below: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <textarea className="form-control" id="details" rows="3" placeholder="Laboratory workflow details include..." required></textarea>
        </div>
    </div>

<div className='row justify-content-center'>
   
    <div data-aos="slide-right" className='col-6 justify-content-center' id="qr-card">
        <img id="qr" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675399884/LigoLab_Template_Scratch_13_quicxw.svg" class="card-img" alt="tablet"></img>
    </div>

    <button className='col-6 justify-content-center' id="submit-6" type="submit" onClick={ () => this.submitMyForm() }>
        <Captcha />
    </button>

</div>
       
    </form>
    </div>
)}
};

export default Form;