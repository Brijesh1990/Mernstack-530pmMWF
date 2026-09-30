import React,{useRef} from 'react'
// import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appoint from './doctor.png'

export default function App() {
  // create each input to stored via useRef() hooks 
  const fullname=useRef("");
  const phone=useRef("");
  const email=useRef("");
  const depname=useRef("");
  const date=useRef("");
  const time=useRef("");
  const message=useRef("");

  // create a function for submit all data 

  const addFormData=(e)=>{
      e.preventDefault();
       var insertData={
         
         fullname:fullname.current.value,
         phone:phone.current.value,
         email:email.current.value,
         depname:depname.current.value,
         date:date.current.value,
         time:time.current.value,
         message:message.current.value,
       
       }
      //print data 

      // pass a sweet alert messages 

      // Swal.fire({
      // title: "wow",
      // text: "Thanks for appointemt booking",
      // icon: "success"
      // });

       toast.success("Thanks for appointment successfully booked !", {
       position: "top-right"
    
      });
     
      console.log(insertData);
      // reset form data after submitted form 
      e.target.reset();

  }
  
  return (
  
  <div className="container appointment-section">
  <div className="row g-4 w-100">
    {/* Image Grid */}
    <div className="col-lg-6 d-none d-lg-block">
      <div className="image-container top-0 fixed-top img-fluid w-50 ms-5">
        <img
          src={appoint}
          alt="Doctor" className=''
        />
      </div>
    </div>
    {/* Form Grid */}
    <div className="col-lg-6 col-md-12 mt-5">
      <div className="form-container mt-5">

        <h3 className="mb-4 text-center">Book Appointment</h3>
        <ToastContainer />

        <form onSubmit={addFormData}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text" ref={fullname}
                className="form-control"
                placeholder="Enter name" required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel" ref={phone}
                className="form-control"
                placeholder="Enter phone" required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email" ref={email}
                className="form-control"
                placeholder="Enter email" required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select className="form-select" ref={depname} required>
                <option>Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="nerology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="dermatology">Dermatology</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Date</label>
              <input type="date" ref={date} required className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Time</label>
              <input type="time" ref={time} required className="form-control" />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Message</label>
              <textarea ref={message} required
                className="form-control"
                rows={3}
                placeholder="Describe your issue"
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <button type="submit"  className="btn btn-primary w-100">
                Book Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


  )
}
