import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Doctors(){
    const [doctors,setDoctors] = useState([])
    async function getDoctors(){
        console.log('fetching the data')
        let data = await fetch('http://localhost:1000/doctor')
        let convertedData = await data.json()
        console.log(convertedData)
        setDoctors(convertedData)
    }
    useEffect(()=>{
        getDoctors()
      },[])
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {doctors.map((doctors,index)=>{
                        return(
                            <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
  <div className="card-header">{doctors.name}</div>
  <div className="card-body">
    <h5 className="card-title">{doctors.job}</h5>
    <p className="card-text">
      {doctors.time}
    </p>
  </div>
</div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}