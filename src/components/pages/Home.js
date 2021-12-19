import React from "react";
import DoctorImg from "../../assets/doctor.svg";
function Home() {
  return (
    <div className="container Home-page">
      <div className="row my-4 min-height-80">
        <div className="col-lg-6 m-auto">
          <h2 className="text-primary-without-hover">Hello, Friend &#128519;</h2>
          <h2 className="text-primary-without-hover">
            Welcome to{" "}
            <span className="font-weight-bold text-primary-b">AmWell</span>
          </h2>
          <p className="text-primary-without-hover">
            We are team of{" "}
            <span className="font-weight-bold text-primary-b">
              MBM Engineering College
            </span>
            , we will help you to provide a general symptom assessment test
            with the help of our ML ChatBot Prediction. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <a href="https://wa.link/8l9pou">
            <button className="btn-style btn btn-primary">Read More</button>
          </a>
        </div>
        <div className="col-lg-6 m-auto">
          <img className="w-100" src={DoctorImg} alt="amwell" />
        </div>
      </div>
    </div>
  );
}

export default Home;
