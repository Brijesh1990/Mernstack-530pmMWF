import React from "react";
function Appoint()
{
    return (
        <>
            <div className="app">
                <div className="sidebar">
                    <h1>Hospitals <span>Address</span></h1>
                    <p><b>Address :</b> Plot No.251, Police Station, 150 Feet Ring Rd, opp. Gandhigram, Dharam Nagar, Rajkot, Gujarat 360007</p>

                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14765.783318453752!2d70.76012925250724!3d22.29897267499763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.2920704!2d70.7723264!4m5!1s0x3959c983ae49a5d9%3A0x6ec42199c0552471!2sSterling%20Hospitals%20-%20Rajkot%2C%20Plot%20No.251%2C%20Police%20Station%2C%20150%20Feet%20Ring%20Rd%2C%20opp.%20Gandhigram%2C%20Dharam%20Nagar%2C%20Rajkot%2C%20Gujarat%20360007!3m2!1d22.306737!2d70.76754199999999!5e0!3m2!1sen!2sin!4v1772195247517!5m2!1sen!2sin" width="80%" height="250" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                </div>
                <div className="form">
                    <h1>Book appointment</h1>
                    <form>
                        <input type="text" placeholder="Patient Name *" />
                        <br /><br />
                        
                        <input type="text" placeholder="Patient Phone *" />
                        <br /><br />
                        
                        <input type="text" placeholder="Patient Age *" />
                        <br /><br />

                        
                        <input type="datetime-local" placeholder="appointment date & time *" />
                        <br /><br />

                        
                        <textarea type="text" placeholder="Patient Name *"></textarea>
                        <br /><br />

                        
                        <input type="submit" placeholder="Patient Name *" value="Submit" />
                        
                    </form>
                </div>
            </div>
        </>
    )

}

export default Appoint