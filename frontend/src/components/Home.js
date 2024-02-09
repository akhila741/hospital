import React from "react";

export default function Home(){
    return(
        <>
        <h1>About Us</h1>
        <p>Mediclinic Al Noor Hospital is situated on Khalifa Street in the central business district of Abu Dhabi. The hospital, which started as a small polyclinic in 1985, has grown into a bustling, international-standard hospital with a team of expert medical professionals which strives not only to meet, but exceed, patients’ expectations. The hospital is designed to provide you and your family with a full continuum of care, with a wide range of outpatient and inpatient services, delivered in a friendly and compassionate manner.</p>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.myaster.com/_next/image?url=https%3A%2F%2Fcms-agent-uat.azureedge.net%2F%2Fblobhomecarecms%2Fassets%2F1600_x_500_AED_111_8d2f7c16ae.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.myaster.com/_next/image?url=https%3A%2F%2Fcms-agent-uat.azureedge.net%2F%2Fblobhomecarecms%2Fassets%2F07_Aster_Dental_Banner_1600x500_905d9f4e4f.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.myaster.com/_next/image?url=https%3A%2F%2Fcms-agent-uat.azureedge.net%2F%2Fblobhomecarecms%2Fassets%2F07_Aster_PHC_Banner_1600x500_c2d3a90cd4.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}