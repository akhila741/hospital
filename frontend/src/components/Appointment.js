import React, { useEffect } from "react";
import { useState } from "react";

export default function Appointment({appointment}){
    const [name,setName] = useState("");
    const [job,setJob] = useState("");
    const [time,setTime] = useState("");
    const currentDate = new Date();
const currentDateTime = currentDate.toLocaleString(undefined, {
    timeZone: "Asia/Dubai",
    timeStyle: "short",
    dateStyle: "long",
  });
  function postAppointment(){
    fetch("http://localhost:1000/doctor",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        job: job,
        appointment_id:appointment.id,
        time: currentDateTime+"GMT"
      })
    })
    .then((response)=>{response.json()})
      .then((data)=>{console.log(data)})
      console.log("posted");
  }
  
    return(
        <>
        <div className="container">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Name
    </label>
    <input
    value = {name}
    onChange={(e)=>{setName(e.target.value)}}
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Service
    </label>
    <input
    value = {job}
    onChange={(e)=>{setJob(e.target.value)}}
      type="number"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Time
    </label>
    <input
    value = {time}
    onChange={(e)=>{setTime(e.target.value)}}
      type="text"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={postAppointment}>
    Submit
  </button>
</form>
</div>

        </>
    )
}