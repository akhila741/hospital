import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Service(){
    const [service,setService] = useState([])
    async function getService(){
        console.log('fetching the data')
        let data = await fetch('http://localhost:1000/service')
        let convertedData = await data.json()
        console.log(convertedData)
        setService(convertedData)
    }
    useEffect(()=>{
        getService()
      },[])
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {service.map((service,index)=>{
                        return(
                            <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
  <div className="card-header">{service.service}</div>
  <div className="card-body">
    <h5 className="card-title">{service.time_available}</h5>
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