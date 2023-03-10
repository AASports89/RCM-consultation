import React, { Component } from 'react';
import CountUp from 'react-countup';
import './css/Revenue_Gaps.css';

class Revenue_Gaps extends Component {

render() {

  return (

<div className="container-fluid bg-light mt-5" id="revenue_gaps">

    <h1 className="card-header" id="h1">Identify Revenue Stream Gaps & Opportunities</h1>

<div className="row justify-content-center">
        <h5 className="card-title" id="check-title">
            Your free consultation will give you an inside look into your revenue cycle and provide you with actionable next steps to:
        </h5>
    <div data-aos="slide-right" className="col-5">
      
               <div className="col-12" id="check-list">

                <p id='checking'>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Maximize First-Pass Ratios</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Decrease A/R Days Across the Board</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Eliminate Billing Errors, While Increasing Volume</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Streamline Operational Workflow Tasks</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Automate Repetitive Billing Functions</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Customize Analytics for Productivity & KPI Tracking</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Transition Billing From a "Back-End" To a "Front-End" Process</ul>
                </p>
                   
                   <div className="form-row justify-content-md-center">
                       <a id="submit-5" className="btn btn-primary" href="#contact-form">Schedule Free Consultation</a>
                </div>
        </div>
    </div>

    <div data-aos="slide-left" className="col-7" id='gap'>
        <div className="card border-0" id="gaps">
        </div>
    </div>

    <div data-aos="zoom-in" className="form-row justify-content-center" id="stats-div">
        <div className="col-4">
            <div className="card text-center" id="stats-div-1">
                <h1 className="card-title"><i id="clean-claim" class="fa-solid fa-chart-pie"></i></h1>
                    <p className="card-text" data-aos="fade-up" id="stats"><span id="ref"><CountUp enableScrollSpy={true} start={0} end={98} duration={3} />%</span> Clean Claims First-Pass Rate</p>
            </div>
        </div>

        <div className="col-4">
            <div className="card text-center" id="stats-div-1">
                <h1 className="card-title"><i id="clean-claim" class="fa-solid fa-sack-dollar"></i></h1>
                    <p className="card-text" data-aos="fade-up" id="stats"><span id="ref"><CountUp enableScrollSpy={true} start={0} end={30} duration={3} />%</span> Higher Net Collections</p>
            </div>
        </div>

        <div className="col-4">
            <div className="card text-center" id="stats-div-1">
               
                <h1 className="card-title"><i id="clean-claim" class="fa-solid fa-chart-line"></i></h1>
                    <p className="card-text" data-aos="fade-up" id="stats">Average of <span id="ref"><CountUp enableScrollSpy={true} start={0} end={31} duration={3} />%</span> Revenue Growth</p>
            </div>
        </div>
        
    </div>
</div>
</div>

)}};
export default Revenue_Gaps;